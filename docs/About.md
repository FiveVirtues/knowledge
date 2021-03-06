---
title: 注意事项
actions:
author: causes
permalink: /about
sticky: 1
---

## 使用到的技术点

**GitLab**

GitLab 提供代码的托管机制。

**CI**

用到的 CI 是 GitLab 自带的 CI，主要的实现方式就是文件 `.gitlab-ci.yml + Runner`。

公用的 Runner 需要填写银行卡信息，所以你们想要自己实现 CI 的时候最好自己搭一个。

::: tip
因为腾讯云服务器只有 1Mbps（128KB） 的速度，所以 CI 有可能因为网络原因（或者其他灵异事件）失败，重启一下试试。
:::

**VuePress**

生成静态博客的技术驱动。

同类型的有很多，比如 Hexo，Hugo 等，选择 VuePress 的考虑是使用 Vue 开发的，如果想自己搞一个什么页面都可以。

## 现在的问题

:::danger
文章中图片的引用使用相对路径，例如引用 `./images/1.png`，不可以写为 `/images/1.png`，因为这样写会找到公共文件夹下的 `images` 文件夹。
:::

:::danger
主题使用的是 [vuepress-theme-hope](https://vuepress-theme-hope.github.io/zh/)，里面使用了 yarn format 作为配置，所以在写文章之前需要首先看一下基本的书写规则，其实主要就是看一下如何在文章页面给文章填写题目、分类、标签。
:::
