(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1041:function(v,_,a){"use strict";a.r(_);var e=a(1),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"rpm-包的管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpm-包的管理"}},[v._v("#")]),v._v(" RPM 包的管理")]),v._v(" "),e("h3",{attrs:{id:"rpm-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpm-介绍"}},[v._v("#")]),v._v(" RPM 介绍")]),v._v(" "),e("p",[v._v("rpm 用于互联网下载包的打包和安装工具，它包含在某些 Linux 发行版中。")]),v._v(" "),e("p",[v._v("它生成具有 .RPM 扩展名的文件。RPM 是 RedHat Package Manager（RedHat 软件包管理工具）的缩写，类似 Windows 的 setup.exe。")]),v._v(" "),e("h3",{attrs:{id:"rpm-包的管理-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpm-包的管理-2"}},[v._v("#")]),v._v(" RPM 包的管理")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("rpm")]),v._v(" 包的简单查询指令：")]),v._v(" "),e("p",[v._v("查看已经安装的 rpm 列表："),e("code",[v._v("rpm -qa | grep xx")])]),v._v(" "),e("p",[v._v("举例：查看当前系统是否安装了 firefox："),e("code",[v._v("rpm -qa | grep firefox")])]),v._v(" "),e("p",[v._v("一个 rpm 包名包含：\n- 一个包名："),e("code",[v._v("firefox-60.2.2-1.el7.centos.x86_64")]),v._v("\n- 名称："),e("code",[v._v("firefox")]),v._v("\n- 版本号："),e("code",[v._v("60.2.2-1")]),v._v("\n- 适用操作系统："),e("code",[v._v("centos.x86_64")])]),v._v(" "),e("p",[v._v("如果是 "),e("code",[v._v("i686")]),v._v("、"),e("code",[v._v("i386")]),v._v(" 表示 32 位系统，"),e("code",[v._v("noarch")]),v._v(" 表示通用。")])]),v._v(" "),e("li",[e("p",[v._v("rpm 包的其他指令：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("rpm -qa")]),v._v("：查询所安装的所有 rpm 软件包。")]),v._v(" "),e("li",[e("code",[v._v("rpm -qi 软件包名")]),v._v("：查询软件包信息。")]),v._v(" "),e("li",[e("code",[v._v("rpm -ql 软件包名")]),v._v("：查询软件包里的文件。")]),v._v(" "),e("li",[e("code",[v._v("rpm -qf 文件全路径名")]),v._v("：查询文件所属的软件包。")])])]),v._v(" "),e("li",[e("p",[v._v("卸载 RPM 包")]),v._v(" "),e("ul",[e("li",[v._v("基本语法："),e("code",[v._v("rpm -e 软件包名称")]),v._v("，比如："),e("code",[v._v("rpm -e firefox")]),v._v(" 。")])]),v._v(" "),e("p",[v._v("假如其他软件包依赖于这次要卸载的软件包，它可能会出现错误信息。\n假如要强制删除此软件包，使用："),e("code",[v._v("rpm -e --nodeps 软件包名")]),v._v("。")])]),v._v(" "),e("li",[e("p",[v._v("安装 rpm 包：")]),v._v(" "),e("ul",[e("li",[v._v("基本语法："),e("code",[v._v("rpm -ivh rpm包全路径名称")]),v._v("，比如："),e("code",[v._v("rpm -ivh /xxx/firefox")])]),v._v(" "),e("li",[v._v("参数说明：\n"),e("ul",[e("li",[v._v("i = install：安装。")]),v._v(" "),e("li",[v._v("v = verbose：提示。")]),v._v(" "),e("li",[v._v("h = hash 进度条。")])])])])])]),v._v(" "),e("h2",{attrs:{id:"yum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[v._v("#")]),v._v(" YUM")]),v._v(" "),e("h3",{attrs:{id:"yum-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum-介绍"}},[v._v("#")]),v._v(" YUM 介绍")]),v._v(" "),e("p",[v._v("yum，一个 Shell 前端软件包管理器，基于 RPM 包管理，能够自动从指定的服务器中下载 RPM 包并进行安装，可以自动处理依赖关系，并且一次性安装所有依赖软件包。")]),v._v(" "),e("h3",{attrs:{id:"yum-指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yum-指令"}},[v._v("#")]),v._v(" YUM 指令")]),v._v(" "),e("ul",[e("li",[v._v("yum 的基本指令：\n"),e("ul",[e("li",[e("code",[v._v("yum list | grep xxx")]),v._v("：查询 yum 服务器是否有需要安装的软件。")]),v._v(" "),e("li",[e("code",[v._v("yum install xxx")]),v._v("：下载安装软件，比如："),e("code",[v._v("yum -y install firefox")]),v._v("。")])])])]),v._v(" "),e("h2",{attrs:{id:"搭建-javaee-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建-javaee-环境"}},[v._v("#")]),v._v(" 搭建 JavaEE 环境")]),v._v(" "),e("h3",{attrs:{id:"环境介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境介绍"}},[v._v("#")]),v._v(" 环境介绍")]),v._v(" "),e("p",[v._v("如果需要在 Linux 环境下进行 JavaEE 的开发，则需要如下软件：")]),v._v(" "),e("ul",[e("li",[v._v("IDEA")]),v._v(" "),e("li",[v._v("Apache-Tomcat")]),v._v(" "),e("li",[v._v("MySQL")]),v._v(" "),e("li",[v._v("JDK")])]),v._v(" "),e("h3",{attrs:{id:"安装-jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-jdk"}},[v._v("#")]),v._v(" 安装 JDK")]),v._v(" "),e("ol",[e("li",[e("p",[e("code",[v._v("mkdir /opt/jdk")])])]),v._v(" "),e("li",[e("p",[v._v("通过 xftp6 上传到 "),e("code",[v._v("/opt/jdk")]),v._v(" 下。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("cd /opt/jdk")])])]),v._v(" "),e("li",[e("p",[v._v("解压 "),e("code",[v._v("tar -zxvf jdk-8u-xxx")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("mkdir /usr/local/java")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("mv /opt/jdk/jdk1.8.0xxx /usr/local/java")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("vim /etc/profile")])])]),v._v(" "),e("li",[e("p",[v._v("编辑对应的内容：")]),v._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[v._v("export")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v("/usr/local/java/jdk1.8.0xxx\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[v._v("export")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[v._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[v._v("$JAVA_HOME")]),v._v("/bin:"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[v._v("$PATH")]),v._v("\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])]),e("p",[e("code",[v._v("$JAVA_HOME/bin:$PATH")]),v._v(" 后面一定要将 "),e("code",[v._v("$PATH")]),v._v(" 带进去，假如不加这个，那么 PATH 将只剩下这一个路径了，原先的环境变量就给破坏了。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("source /etc/profile")]),v._v("：让文件生效。")])]),v._v(" "),e("li",[e("p",[v._v("测试是否安装成功，编写一个简单的 Hello.java 输出 Hello World。")])])]),v._v(" "),e("h3",{attrs:{id:"安装-tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-tomcat"}},[v._v("#")]),v._v(" 安装 tomcat")]),v._v(" "),e("ol",[e("li",[v._v("上传安装文件，并且解压至 "),e("code",[v._v("/opt/tomcat")])]),v._v(" "),e("li",[v._v("进入解压目录 "),e("code",[v._v("/bin")]),v._v("，启动tomcat："),e("code",[v._v("./startup.sh")])]),v._v(" "),e("li",[v._v("开放端口 "),e("code",[v._v("8080")])]),v._v(" "),e("li",[v._v("测试是否安装成功：在 windows/linux 下面访问 "),e("code",[v._v("http://linuxip:8080")])])]),v._v(" "),e("h3",{attrs:{id:"配置-mysql5-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-mysql5-7"}},[v._v("#")]),v._v(" 配置 MySQL5.7")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("新建文件夹"),e("code",[v._v("/opt/mysql")]),v._v("，然后进入。")])]),v._v(" "),e("li",[e("p",[v._v("通过网络获取 MySQL 安装包。")]),v._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[v._v("wget")]),v._v(" http://dev.mysql.com/get/mysql-5.7.26-1.el7.x86_64.rpm-bundle.tar\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])])]),v._v(" "),e("li",[e("p",[v._v("解压 "),e("code",[v._v("tar -xvf xxx.tar")])])]),v._v(" "),e("li",[e("p",[v._v("运行 "),e("code",[v._v("rpm -qa | grep mari")]),v._v("，查询 mariadb 相关安装包。")])]),v._v(" "),e("li",[e("p",[v._v("运行 "),e("code",[v._v("rpm -e --nodeps mariadb-libs")]),v._v("，卸载。")])]),v._v(" "),e("li",[e("p",[v._v("然后开始真正安装 MySQL，依次运行如下几条命令：")]),v._v(" "),e("p",[e("img",{attrs:{src:a(867),alt:"2021-08-16-22-08-03"}})])]),v._v(" "),e("li",[e("p",[v._v("运行"),e("code",[v._v("systemctl start mysqld.service")]),v._v("，启动 MySQL")])]),v._v(" "),e("li",[e("p",[v._v("开始设置 root 用户密码。")]),v._v(" "),e("p",[v._v("MySQL 会自动给 root 用户设置用户密码，运行"),e("code",[v._v('grep "password" /var/log/mysqld.log')]),v._v("可以查看当前密码")])]),v._v(" "),e("li",[e("p",[v._v("运行 "),e("code",[v._v("mysql -uroot -p")]),v._v("，用 root 用户登录，输入上述密码，可以成功进入 MySQL 命令行。")])]),v._v(" "),e("li",[e("p",[v._v("可以重设 root 密码，对于个人开发环境要设置简单密码即可。")]),v._v(" "),e("p",[v._v("可以运行 "),e("code",[v._v("set global validate_password_policy=0")]),v._v(" 提示密码设置策略。")]),v._v(" "),e("p",[e("code",[v._v("validate_password_policy")]),v._v("默认为 1。")]),v._v(" "),e("p",[v._v("MySQL 密码复杂度有三种：")]),v._v(" "),e("ul",[e("li",[v._v("低：0 or low：只要求长度（默认为8位）。")]),v._v(" "),e("li",[v._v("中：1 or MEDIUM：要求长度、数字、大小写和特殊字符。")]),v._v(" "),e("li",[v._v("高：2 or STRONG：要求长度、数字、大小写、特殊字符和字典文件。")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("set password for 'root'@'localhost'=password('密码')")]),v._v("。")])]),v._v(" "),e("li",[e("p",[v._v("运行 "),e("code",[v._v("flush privileges")]),v._v(" 使密码生效。")])])])])}),[],!1,null,null,null);_.default=t.exports},867:function(v,_,a){v.exports=a.p+"assets/img/2021-08-16-22-08-03.9952f954.png"}}]);