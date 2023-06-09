---
sidebar_position: 1
sidebar_label: 安装前的准备
---


# 安装前的准备

由于当前 UEFI 已普及十余年，安装将全部以 UEFI+GPT 的形式进行，传统 BIOS 方式不再赘述。

## 0.终端编辑器 vim 的使用

在安装 Arch Linux 的过程中，需要使用到 vim 编辑器，如果你不会使用，这里首先进行一个简要的介绍，你需要掌握如下基本操作。实践的环境可以找一个在线的 Linux 体验环境进行 vim 的尝试，如[copy.sh](https://copy.sh/v86/?profile=archlinux)。注意，由于其是在线环境，所以性能较差，执行 vim 命令时需要耐心等待。

```bash
vim 1.txt   #创建并编辑名为1.txt的文件
```

你可以看到进入了一个空的界面。此时你处在 vim 的`命令模式`。在`命令模式`下，可以用一些快捷指令来对文本进行操作。 现在我们输入`a`进入 vim 的`编辑模式`，此时输入任意文本，即可进行编辑。 在输入完成后，我们按下 Esc 键，即可从`编辑模式`退出到`命令模式`。此时输入`:wq`即可保存并退出 vim。 下面介绍一些在命令模式下常用的命令

```bash
:wq     # 保存退出
:q!     # 不保存，强制退出
dd      # 删除一行
2dd     # 删除两行
gg      # 回到文本第一行
shift+g  # 转到文本最后一行
/xxx    # 在文中搜索内容'xxx' 回车搜索，按n键转到下一个
?xxx   # 反向搜索
```

拓展链接：需要完整教程的读者可以在终端中输入命令`vimtutor`来学习完整的 vim 教程。

## 1.确保网络环境

如果你可以使用路由器分接出来的网线，以 dhcp 的方式直接上网，那么不用准备什么。如果你的环境只能使用无线网络安装，需要事先把自己所用的 wifi 名称改成自己能记住的英文名称。因为**安装时无法显示和输入中文名的 wifi**，你会看到一堆不知道是什么的方块，并且在安装过程中你将没有办法输入中文的无线名称进行连接。虽然通过一些繁琐的步骤可以解决终端中文的问题，但是显然这么做在安装 Arch Linux 时毫无必要。

其次，有些笔记本电脑上存在无线网卡的硬件开关或者键盘控制，开机后安装前需要**确保你的无线网卡硬件开关处于打开状态**。

## 2.刻录启动优盘

准备一个 2G 以上的优盘，刻录一个安装启动盘。安装镜像 iso 在[下载页面](https://archlinux.org/download/)下载，注意，你需要选择最新的镜像下载，选择通过磁力链接或 torrent 下载，下载完成后，还需要在 archlinux 下载页面下载`PGP signature`签名文件(不要从镜像源下载签名文件)，将签名文件和 iso 镜像置于同一文件夹，随后进行对镜像的签名校验，以保证下载的镜像是完整，无错误的，未被篡改的。若你使用 Linux,执行以下命令，确保输出完好的签名。具体镜像名根据名字自行修改。如果你使用其他系统，请自行搜索验证签名的方式。

```bash
gpg --keyserver-options auto-key-retrieve --verify archlinux-202x.0x.01-x86_64.iso.sig
```

注意，这里的签名校验**非常重要**，这可以保证你的安装镜像是未被篡改的，同时可以保证你在使用安装盘安装系统时，用正确的公钥校验安装包。

------

Windows 下推荐使用[ventoy](https://www.ventoy.net/cn/doc_start.html)或者[Rufus](https://rufus.ie/)或者[etcher](https://github.com/balena-io/etcher)进行优盘刻录。三者皆为自由软件。具体操作请自行查阅，都非常简单。

Linux 下可以直接用 dd 命令进行刻录。注意 of 的参数为 sdx,不是 sdx1 sdx2 等。

```bash
sudo dd bs=4M if=/path/to/archlinux.iso of=/dev/sdx status=progress oflag=sync
```

> bs=4M 指定一个较为合理的文件输入输出块大小。
> status=progress 用来输出刻录过程总的信息。
> oflag=sync 用来控制写入数据时的行为特征。确保命令结束时数据及元数据真正写入磁盘，而不是刚写入缓存就返回。

## 3.进入主板 BIOS 进行设置

插入优盘并开机。在开机的时候，按下 F2/F8/F10/DEL 等(取决与你的主板型号，具体请查阅你主板的相关信息)按键，进入主板的 BIOS 设置界面。

## 4.关闭主板设置中的 Secure Boot

在类似名为 `security` 的选项卡中，找到一项名为 Secure Boot(名称可能略有差异)的选项，选择 Disable 将其禁用。

## 5.调整启动方式为 UEFI

在某些旧的主板里，需要调整启动模式为 UEFI,而非传统的 BIOS/CSM。在类似名为 `boot` 的选项卡中，找到类似名为 Boot Mode 的选项，确保将其调整为 UEFI only，而非 legacy/CSM。

## 6.调整硬盘启动顺序

在类似名为 `boot` 的选项卡中，找到类似名为 Boot Options(名称可能略有差异)的设置选项，将 USB 优盘的启动顺序调至首位。

## 7.准备安装

最后保存 BIOS 设置并退出，一般的按键是 F10。此时系统重启，不出意外你应该已经进入 archlinux 的安装界面。

