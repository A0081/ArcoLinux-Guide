# ArcoLinux Guide

[ArcoLInux Guide阅读地址](https://arco.i0081.wiki/)

ArchLinux是每一位Linux爱好者在尝试linux的必经之路，但其陡峭的学习曲线与较高的上手难度非常劝退。我试图通过ArcoLInux的学习路线来带领各位从基础的桌面环境到最终构建自己的iso.

本仓库包含以下内容：

1. ArcoLinux学习路线
2. 30+桌面环境介绍
3. ArchLinux安装指南
4. 常用软件介绍

## 内容列表

- [背景](#背景)
- [安装](#安装)
- [使用说明](#使用说明)
- [相关文章](#相关文章)
- [维护者](#维护者)
- [使用许可](#使用许可)

## 背景

这几年我一直在尝试折腾 ArchLinux，毕竟它的稳定性和性能优势确实令人着迷。但是，不下数十次的重装与复习，让我逐渐失去了耐心。然而，一次偶然的机会，我发现了 ArcoLinux。初次使用，我就被它卓越的性能与稳定性所折服，让我再也不想回到 ArchLinux 的繁琐操作中。于是，我想和大家分享这篇 ArcoGuide，让更多人了解和体验这个让人惊艳的 Linux 发行版。

与其父亲Arch的异同:

Arch 需要从零开始一步一步搭建自己的 Linux 系统，这对于新手来说非常不友好，而且学习过程中需要花费大量的时间和精力，因为过时但五花八门的问题解决贴无法有效解决问题，因此学习 Arch 的过程永远离不开查阅 Wiki。

相比之下，ArcoLinux 则具有完美的图形化安装界面，而且在安装过程中需要使用的应用程序也可以一并搞定，大大节省了时间。此外，ArcoLinux 的作者 Erik Dubois 制作了不下千余条视频，讲解每个不同的 ArcoLinux 镜像的使用方法，他的目的是想教会用户如何打造属于自己的 Linux 发行版。因此，ArcoLinux 是最适合学习 Linux 的发行版，让您能够在享受 ArcoLinux 带来的美好时光的同时，也能够快速提升您的技能水平。

本书提供我多年使用 Linux 的一些经验，并教与需要的人。与 Linux 密不可分的另一部分: [GNU](https://www.gnu.org/home.zh-cn.html) 新读者请确保你已经按照步骤完成了`新手上路`章节中的**全部内容**后再向下阅读，否则可能会出现问题。

- 本书声明
  - 我坚持每个 Linux 学习者都应该至少有一次 Arch Linux 的命令行安装体验，以建立坚实的 Linux 学习基础。尽管本书主要介绍了 ArcoLinux，但是我将以 Arch Linux 为核心，向读者介绍 ArcoLinux。本书分为两部分，第一部分主要讲解 Arch Linux 的安装和基础配置，第二部分则以 ArcoLinux 为核心，介绍各种桌面环境以及如何创建属于自己的 Linux 发行版。
  - 本书还提供了完善且可靠的科学上网流程，以帮助那些处于互联网被封锁和审查地区的读者获取更好的学习体验。如果有人认为此书的内容不和谐，我感到非常遗憾。
  - 本书中的大多数官方网址来自于国外，因此我提供了科学上网教程，以帮助读者实现完美的阅读体验。我试图用幽默风趣的语言，使本书更加易懂易学，但我仍需要读者的反馈和建议，以便不断完善和改进本书。如果您有任何问题或建议（哪怕只是一个错别字），请通过邮箱联系我。
  - 作为我青年时期第一部完整的教程类作品，本书将随着我的学习不断更新和改进。感谢所有的读者，希望您们能够对本书提出宝贵的意见和建议，以帮助我完善本书，使更多的 Linux 学习者受益。

## 安装

这个项目由[**Docusaurus**](https://docusaurus.io/)驱动，使用 [node](http://nodejs.org) 和 [npm](https://npmjs.com)。请确保你本地安装了它们。

```sh
sudo pacman -S npm node
```

## 使用说明

这只是一个文档包，你可以打印出 [spec.md](spec.md) 到输出窗口。

```sh
git clone https://github.com/A0081/ArcoLinux-Guide
cd ArcoLinux-Guide
npm init docusaurus
npm run start
```

## 相关文档

- [人生苦短，我用Manjaro](https://manjaro.i0081.wiki) — 💌入门级manjaor扫盲。
- [Chadwm配置详解](https://dwm.i0081.wiki) — 我的Chadwm-dotfile详解。

## 维护者

[@_0081](https://github.com/A0081)

## 使用许可

[MIT](LICENSE) © Richard Littauer
