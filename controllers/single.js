angular.module('app')
.controller('SingleCtrl', function($scope) {
	$scope.article = {
		title: "Quicker Sort",
		summary: "Quick sort has a O(NlogN) average running time",
		content: '<p>This year GopherCon retained its single track format.</p>\
		<p>Given the other changes we are making to the event; the larger venue, double the ticket sales, multiple hotel reservations, some things had to remain unchanged, and one of those was the single track format. This meant we would be fielding roughly the same number of talks as last year. From the feedback we received last year it was clear that with the larger audience we would have allocate significantly more time for breaks, </p>\
		<p>and so ended up offering the same number of speaking slots as last year; 22.After subtracting the slots allocated to keynote and invited speakers, we were left with 18 thirty minute speaking slots for which we received 164 proposals. Proposals were reviewed anonymously without reveling the author of the proposal and given a numeric score between 1 and 5. Each proposal received between 9 and 11 votes. </p>\
		<p>After all the reviews were completed, roughly the top third of the proposals were short listed, de-anonymised, and considered for the programme by Erik, Brian and myself.When choosing papers from the shortlist, the reviewer’s score, as well as their comments were given strong weighting, but other factors such the topic of the talk and how it would interact with other shortlisted proposal were considered.</p>\
		<p>With an over subscription of 9:1, not only did we choose the very best proposals, but amongst those we considered to be the best, we had to turn down many that were excellent. Please, if your talk was not accepted for GopherCon this year, do not take this to heart, and I strongly recommend that you consider submitting a proposal for one of the many other conferences on this year’s calendar.</p>',
		time: new Date()
	};
})