(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1039:function(t,v,_){"use strict";_.r(v);var i=_(1),e=Object(i.a)({},(function(){var t=this,v=t.$createElement,i=t._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"说明"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),i("p",[t._v("本文档目前的部分来自 "),i("a",{attrs:{href:"https://ohshitgit.com/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oh Shit，Git？"),i("OutboundLink")],1),t._v("，部分来自之前的笔记，日后有比较好用的操作也会放进来。")]),t._v(" "),i("h2",{attrs:{id:"git-分区"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-分区"}},[t._v("#")]),t._v(" Git 分区")]),t._v(" "),i("p",[t._v("在 Git 中，有几种分区：工作区、暂存区、本地仓库、远程仓库。我们用一个文件来说明这三种分区情况：")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("一个文件被创建了，这个时候文件在工作区中，也就是你能够在屏幕前看到的代码。它还不被 Git 管理，所以在 Git 上，它是一个未追踪的状态。")])]),t._v(" "),i("li",[i("p",[t._v("使用 "),i("code",[t._v("git add xx")]),t._v(" 命令，将这个文件的当前内容添加到 Git 中，这个时候文件就会被 Git 管理，这个时候是放到了 Git 的暂存区中，这个时候文件是已经追踪，但是没有提交的状态。")])]),t._v(" "),i("li",[i("p",[t._v("使用 "),i("code",[t._v("git commit")]),t._v(" 命令，就会将文件的当前内容从暂存区中挪动到本地仓库中，这个时候文件是已经提交的状态。")])]),t._v(" "),i("li",[i("p",[t._v("可能文件发生了改动，那么这个时候因为发生了改动，Git 会检测到，那么文件当前的状态就变成了文件发生改动的状态。")]),t._v(" "),i("p",[t._v("注意，在此时 Git 已经有了上一次文件的全部内容，但是没有这次文件的内容。")])]),t._v(" "),i("li",[i("p",[t._v("再次使用 "),i("code",[t._v("git add")]),t._v("，那么文件当前的状态就会再次被 Git 追踪，添加到了暂存区中。")])]),t._v(" "),i("li",[i("p",[t._v("再次使用 "),i("code",[t._v("git commit")]),t._v("，文件当前的状态就会被放到本地仓库中。")]),t._v(" "),i("p",[t._v("注意，此时的本地仓库中一共有两次提交，第一次提交是文件没有发生改动之前的状态，第二次提交是文件发生改动之后的状态。")])]),t._v(" "),i("li",[i("p",[t._v("使用 "),i("code",[t._v("git push")]),t._v(" 命令，文件就会从本地仓库上传到远程仓库，这个时候文件的所有 commit 都会 push 上去。")])])]),t._v(" "),i("h2",{attrs:{id:"git-常用操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-常用操作"}},[t._v("#")]),t._v(" Git 常用操作")]),t._v(" "),i("p",[i("strong",[t._v("git 回滚")])]),t._v(" "),i("p",[i("img",{attrs:{src:_(806),alt:"2021-08-20-11-41-02"}})]),t._v(" "),i("p",[t._v("在上图的例子中，Git 进行了两次 commit，它们的编号分别为 A、B。")]),t._v(" "),i("p",[t._v("回滚其实就是对于 Git 几个分区的管理：")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("git reset")]),t._v("：默认使用 "),i("code",[t._v("git reset --mixed")]),t._v(" 方式回滚。")]),t._v(" "),i("li",[i("code",[t._v("git reset --soft")]),t._v("：仅仅将本地仓库回滚，工作区和暂存区保持不变，也就是回到你没有进行 commit 之前的状态。")]),t._v(" "),i("li",[i("code",[t._v("git reset --mixed")]),t._v("：回滚本地仓库和暂存区中的代码，工作区保持不变，也就是回到你没有进行 add 之前的状态。")]),t._v(" "),i("li",[i("code",[t._v("git reset --hard")]),t._v("：回滚本地仓库、暂存区、工作区中的代码，也就是回到你没有更改代码之前的状态。")]),t._v(" "),i("li",[i("code",[t._v("git reset --keep")]),t._v("：回滚本地仓库、工作区中的代码，暂存区保持不变。这个一般用得少。")])]),t._v(" "),i("p",[i("strong",[t._v("查看当前所有的 commit")])]),t._v(" "),i("p",[i("code",[t._v("git reflog")]),t._v(" 操作可以查看当前所有的 commit，包括所有的分支，所有已经被删除的 commit。这个操作可以在某些特定的时间吃一颗后悔药。")]),t._v(" "),i("p",[i("img",{attrs:{src:_(807),alt:""}})]),t._v(" "),i("p",[t._v("效果如上图，可以清晰地看到每一个分支的提交情况，然后就可以再调用 "),i("code",[t._v("git reset HEAD@{index}")]),t._v("，就可以回到对应的位置了。")]),t._v(" "),i("p",[i("strong",[t._v("覆盖本地上次的 commit 操作")])]),t._v(" "),i("p",[t._v("当你 commit 了之后，可能就会发现自己还有需要改动的地方，这个时候假如为了一丁点的小改动再次提交一个 commit 就显得太难看了。")]),t._v(" "),i("p",[i("code",[t._v("git commit --amend")]),t._v(" 可以让你去覆盖上一次 commit 内容，做到推送到远程时，只会有一条 commit 信息。")]),t._v(" "),i("p",[i("code",[t._v("git commit --amend")]),t._v(" 会重新让你去编辑 commit 的信息，假如你不想重新编辑信息，使用 "),i("code",[t._v("git commit --amend --no-edit")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),i("p",[t._v("注意，这种操作不要对刚刚拉下来的分支做，因为远程分支的内容是上一次提交的内容，你在上一次的提交上进行 "),i("code",[t._v("amend")]),t._v(" 操作，相当于覆盖了上次的提交。")]),t._v(" "),i("p",[t._v("上次的提交甚至有可能不是你做的，是别人做的。")])]),t._v(" "),i("p",[i("strong",[t._v("直接提交到了 master 上的内容再切到新的分支")])]),t._v(" "),i("p",[t._v("有这样一种情况：本来应该是放到一个新的分支上的内容，却由于忘记切换分支，直接提交到了 master 上。")]),t._v(" "),i("p",[t._v("第一种解决方式：")]),t._v(" "),i("ol",[i("li",[i("code",[t._v("git branch new-branch")]),t._v("：首先从当前的 master 分支上切出一个新的分支。")]),t._v(" "),i("li",[i("code",[t._v("git reset HEAD~ --hard")]),t._v("：master 节点直接强制回滚到上次提交的位置，使用 hard 会将所有内容强制回滚到之前。")]),t._v(" "),i("li",[i("code",[t._v("git checkout new-branch")]),t._v("：切到新的分支。")])]),t._v(" "),i("p",[t._v("第二种解决方式：")]),t._v(" "),i("ol",[i("li",[i("code",[t._v("git checkout new-branch")]),t._v("：首先切换到新的分支。")]),t._v(" "),i("li",[i("code",[t._v("git cherry-pick master")]),t._v("：抓取 master 节点最后一个 commit 到当前分支下。")]),t._v(" "),i("li",[i("code",[t._v("git checkout master")]),t._v("：切回 master。")]),t._v(" "),i("li",[i("code",[t._v("git reset HEAD^ --hard")]),t._v("：强制回滚到之前的 commit。")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),i("p",[t._v("这种方式只能在没有提交到远程分支的时候使用，不过一般来讲 master 分支是受保护的，一般人推不上去，有权限的推上去只能 revert 了。")])]),t._v(" "),i("p",[i("strong",[t._v("查看保存在暂存区中的改动")])]),t._v(" "),i("p",[i("code",[t._v("git diff")]),t._v(" 命令可以查看当前的代码与之前的 commit 有什么改动，但是使用 "),i("code",[t._v("git add")]),t._v(" 工具之后要使用 "),i("code",[t._v("git diff --staged")]),t._v(" 来查看。")]),t._v(" "),i("p",[i("strong",[t._v("撤回某一个文件的改动")])]),t._v(" "),i("p",[t._v("假如现在提交的某一个文件发现不对，那么回滚整个项目明显是不正常的，可以通过 "),i("code",[t._v("git checkout [回滚的 hash 值] -- path/to/file")]),t._v("。")]),t._v(" "),i("p",[t._v("使用 checkout 来回滚某一个文件，这操作也太渣了……")]),t._v(" "),i("p",[i("strong",[t._v("干掉某一个分支上的所有未追踪的文件")])]),t._v(" "),i("ol",[i("li",[i("code",[t._v("git fetch origin")]),t._v("：获取远程的最新状态，使用 master 来举例。")]),t._v(" "),i("li",[i("code",[t._v("git checkout master")])]),t._v(" "),i("li",[i("code",[t._v("git reset origin/master --hard")])]),t._v(" "),i("li",[i("code",[t._v("git clean -d --force")]),t._v("：干掉所有未追踪的文件和目录。")])])])}),[],!1,null,null,null);v.default=e.exports},806:function(t,v,_){t.exports=_.p+"assets/img/2021-08-20-11-41-02.b0db7386.png"},807:function(t,v,_){t.exports=_.p+"assets/img/2021-08-20-09-19-53.4b83f1ca.png"}}]);