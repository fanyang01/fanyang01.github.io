# 股票交易客户端

请按照参照以下链接安装依赖工具：

- [Git](https://git-scm.com/downloads)

Windows可安装[Github客户端](https://windows.github.com/)，安装后有Git Shell程序可用于日常开发。

Unix/Linux可通过软件包管理工具安装git，如Debian/Ubuntu下：

    apt-get update
    apt-get install git

- [npm](https://nodejs.org/download/)

安装后在终端(Windows下PowerShell或cmd)输入npm，测试是否安装成功。

因为npm官方源需要梯子，可使用[国内镜像](https://npm.taobao.org/)，如：

    npm install -g cnpm --registry=https://registry.npm.taobao.org

安装成功后即可使用cnpm命令代替npm.

- [Bower](http://bower.io/#install-bower)

全局安装Bower:

    cnpm install bower -g

然后拉取项目：

	git clone https://github.com/fanyang01/STC.git

在项目文件夹运行命令

	bower install

来拉取依赖包。

在项目文件夹目录运行Web文件服务器，例如：

	python -m SimpleHTTPServer [可选的端口，默认为8000]

在浏览器中打开地址 http://localhost:8000

# 参考

- [Polymer](https://www.polymer-project.org/1.0/)(自备梯子)
- [Polymer国内镜像](http://docs.polymerchina.org/1.0/)