+++
title = 'From Heat Flow to Generative Models'
date = 2024-04-14T11:52:16+08:00
draft = true
+++

{{<math>}}

The heat equation in $\mathbb{R}^d$ is partial differential equation (PDE) given by
\[
\begin{align*}
\frac{\partial}{\partial t} & u(t, \mathbf{x}) = \Delta u(t, \mathbf{x}) \\
& u(0, \mathbf{x}) = f(\mathbf{x})
\end{align*}
\]

where \( \Delta = \sum_{i=1}^d \frac{\partial^2}{\partial x_i^2} \) is the Laplace operator or the Laplacian. Physically, it describes the flow of heat in a homogeneous and isotropic medium, thus the name heat equation. Here,
 \( u(t, \mathbf{x}) \) is the temperature at time \( t \) and position \( \mathbf{x} \), and \( f(\mathbf{x}) \) is the initial temperature distribution. Informally, the equation states that the rate of change of temperature at a point is proportional to the difference between the temperature at that point and the average temperature of its neighbors.
{{</math>}}

The heat equation is a fundamental PDE that has been studied extensively in mathematics, physics, and engineering. In this post, we will discuss how the heat equation can be connected to modern generative models in machine learning, such as diffusion models and flow matching models. In doing so, we will explore various mathematical concepts and perspectives that can help us understand these models better.

One may wonder why choose the heat equation as a starting point for studying generative models. The following reasons may help to clarify this choice:
- Everything should be made as simple as possible, but not simpler. As we will see, the heat equation actually governs the most basic diffusion process. Meanwhile, it is also one of the most important examples of a continuity equation, which serves as the foundation of flow matching models. By studying the simplest case, we can not only understand their underlying principles easier but also generalize them to more complex settings.
- Historically, the heat equation was developed about one hundred years before its probabilistic interpretation was discovered. Tracking the intellectual history of research on the heat equation can help us appreciate the beauty of mathematics, the deep connections between different fields, and the insights that can be gained from studying the same problem from different perspectives.

# It All Starts With Physics

How does heat conduction work? Newton proposed the cooling law, which states that the rate of heat loss is proportional to the temperature difference between the object and its surroundings.

Fourier's law of heat conduction further states that the heat flux is proportional to the temperature gradient.

[convolution](https://fr.wikisource.org/wiki/Th%C3%A9orie_analytique_de_la_chaleur/Chapitre_9#SECTION_DEUXI%C3%88ME.)
[heat kernel](https://fr.wikisource.org/wiki/Th%C3%A9orie_analytique_de_la_chaleur/Chapitre_9#378.)

Fick's law of diffusion generalizes Fourier's law to the diffusion phenomenon in general.

At the beginning of the 20th century, Louis Bachelier, Albert Einstein, and Marian
Smoluchowsk independently discovered the connection between the heat equation and the stochastic diffusion process.

Bachelier, in his doctoral thesis (examined by Henri Poincaré), studied the fluctuations of stock prices, which he modeled as a Brownian motion. ...


Einstein's interest in the theory of heat goes back to his early scientific career, before his annus mirabilis. From 1902 to 1904, he published three papers on thermodynamics, aiming to establish a molecular-kinetic theory of heat. In 1905, one of his annus mirabilis papers was on Brownian motion, in which he discovered the connection between Brownian motion and the heat equation. He also realized that the fundamental solution of this equation is the Gaussian distribution. In addition, Einstein related the diffusion cofficient and mean displacement of particles
to physical quantities including the Avogadro number and the temperature, opening the door to the experimental confirmation of this theory.

Einstein's 1905 paper on Brownian motion is considered as a milestone of the atomistic revolution, which, together with the equivalent theoretical justification by Smoluchowsk in 1906 based on different arguments and the Nobel-winning experimental confirmation by Jean Perrin in 1909, provided the convincing evidence of the reality of atoms. It has profound implications for the development of statistical mechanics in physics and probability theory in mathematics. On the physics side, Einstein's idea were further developed by Smoluchowsk, Langevin, Fokker, Planck, Ornstein, Uhlenbeck, and others. For example, Langevin introduced a differential equation that contains a random force in 1908, which is now known as the Langevin equation. It was thirty years before the mathematical foundation of stochastic differential equations was established. On the mathematics side, Einstein's work inspired Wiener, Kolmogorov, Feller, Doob, and others to develop the theory of stochastic processes.

From 1906 to 1915, Bachelier and Smoluchowsk continued their research on the stochastic processes with mathematical and physical motivations, respectively. They pioneered, again independently, what are now known as the Ornstein-Uhlenbeck process and the Fokker-Planck equation, which are generalizations of the Brownian motion and the heat equation, respectively. Unfortunately, Bachlier's work, which was always ahead of its time, was not known to the physics community. Nowadays, Bachelier is considered as the forefather of mathematical finance.

{{<math>}}
Another annus mirabilis paper of Einstein in 1905 was on the photoelectric effect, which eventually led to the development of quantum mechanics in the mid-1920s. In 1926, Erwin Schrödinger published a series of papers titled "Quantisierung als Eigenwertproblem" (Quantization as an Eigenvalue Problem),
in the fourth of which he introduced the fundamental equation of quantum mechanics, which, in its simplest form, is a slight variation of the heat equation for complex-valued functions. It is given by (for a free particle)
\[
i \hbar \frac{\partial}{\partial t} \psi(t, \mathbf{x}) = - \frac{\hbar^2}{2m} \Delta \psi(t, \mathbf{x})
\]
where \( \psi(t, \mathbf{x}) \) is the complex-valued wave function, \( m \) is the mass of the particle, and \( \hbar \) is the reduced Planck constant. In the same paper, Schrödinger discussed how to interpret this equation physically. His idea was that the squared modulus of the wave function, \( |\psi(t, \mathbf{x})|^2 = \psi(t, \mathbf{x}) \psi^*(t, \mathbf{x}) \), is a "weight-function" in the configuration space and the "persistance of normalization" for this weight-function is a necessary condition for the validity of the equation. Using a pair of symmetrical wave functions traveling in opposite directions in time, he successfully found a continuity equation (i.e., a conservation law) for this weight function and connected it to the charge density continuity equation in electromagnetism. In the same year, Max Born, inspired by the work of Einstein, suggested that the value of the wave function should be interpreted statistically as [probability amplitudes](https://en.wikipedia.org/wiki/Probability_amplitude), whose squared modulus gives the **probability** density of finding the particle at a position, which later became the well-known Born rule and was further developed into the Copenhagen interpretation. Probability, from then on, became one of the central concepts in quantum mechanics. Nowadays, the conservation law discovered by Schrödinger is taught as the conservation of probability in quantum mechanics, and [probability current](https://en.wikipedia.org/wiki/Probability_current) can be defined accordingly.
{{</math>}}

Ok, but how does this relate to generative models? In 1931, Schrödinger presented a paper titled "Über die Umkehrung der Naturgesetze" (On the Reversal of the
Laws of Nature), in which he studied the time reversal of a diffusion process and defined the problem of finding the probability distribution of a particle at the intermediate times given the its initial and final distributions. This problem is called Schrödinger's Bridge problem now. He showed that the solution to this problem is given by the product of two functions which evolve according to the heat equation in opposite directions in time, and commented that "The most interesting thing about result today is the striking analogy with quantum mechanics". This paper made profound impact in physics and probability theory, one of which is the reversibility of Markov processes studied by Kolmogorov.

Kolmogrov had established the mathematical foundation of Markov process in 1930 with his famous paper "Über die analytischen Methoden in der Wahrscheinlichkeitsrechnung" (On Analytical Methods in Probability Theory), in which he introduced the fundamental differential equations characterizing the stochastic processes, now known as the Kolmogorov equations. For continuous-time processes, the first equation, now known as the Kolmogorov forward equation, is the general form of the Fokker-Planck equation, while the second equation, now known as the Kolmogorov backward equation, was new at that time and was developed into the Feynman-Kac formula.

# Continuum Mechanics

# Probabilistic Interpretation

It is connected to the Brownian motion by the Feynman-Kac formula
\[
u(t, \mathbf{x}) = \mathbb{E}_{X_0 = \mathbf{x}}[f(X_t)]
\]

where \( \{ X_t \}_{t \geq 0} \) is the Brownian motion with \( X_0 = \mathbf{x} \).

# Mathematical Derivation


# References

T. N. Narasimhan. Fourier’s heat conduction equation: History, influence, and connections. Reviews of Geophysics. 37(1) 151-172, 1999.

On The Reversibility of The Statistical Laws of Nature
A. N. Kolmogorov

https://www.biodiversitylibrary.org/item/51056#page/226/mode/1up
