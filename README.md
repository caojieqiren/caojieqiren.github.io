# 我的个人主页

纯 HTML + CSS + 一点 JS 的个人主页，GitHub Pages 免费托管。风格参考学术主页（极简、白底、单页滚动）。

线上地址：**https://caojieqiren.github.io/**

## 文件说明

| 文件 / 文件夹 | 作用 |
| --- | --- |
| `index.html` | 页面结构 + 全部文字内容 |
| `style.css` | 样式（配色、间距、排版） |
| `script.js` | 移动端菜单、页脚年份、深色模式 |
| `cv.html` | 在线简历（可打印成 PDF） |
| `assets/` | 头像图片 |
| `slides/` | 幻灯片 PDF（网站「Slides」卡片链接到这里） |

## 本地预览

双击 `index.html` 即可在浏览器打开，改完刷新查看。

> 想更接近真实环境，可用 VS Code 的 Live Server 插件（右键 → Open with Live Server）。

## 更新网站

改了文件后，在 `personal-site` 目录执行：

```bash
git add .
git commit -m "更新内容"
git push
```

> git 的提交身份和代理都已在此仓库配置好，直接推即可。

## 改颜色

打开 `style.css`，改最上面 `:root` 里的 `--accent`（现在默认深蓝 `#1e40af`）。

## 加内容

- **加一章 slides**：把 PDF 放进 `slides/` 文件夹，命名成 `prml-chN.pdf`，再在 `index.html` 的「Slides」条目里加一行 `<a href="slides/prml-chN.pdf">Chapter N</a>`。
