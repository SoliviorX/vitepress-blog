<h1 align="center"> SoliviorX </h1>
<p align="center">你的指尖,拥有改变世界的力量</p>
<p align="center">博客主题：<a href="" target="_blank">@soliviorx/theme</a></p>

## 仓库介绍

这是一个 monorepo 仓库，目前有如下四个部分

- [blogpress](./packages/blogpress/)：博客内容本身
- [@soliviorx/theme](./packages/theme/)：博客分离出的通用 VitePress 主题
- [主题模板](./packages/template/)：用于快速创建和作者一样风格的博客
- [vitepress-plugin-pagefind](./packages/vitepress-plugin-pagefind/)：基于 pagefind 实现的 VitePress 离线全文搜索支持插件

## 运行本项目

博客基于[vitepress](https://vitepress.vuejs.org/)构建

① 先安装 `pnpm`

```sh
npm i -g pnpm
# 安装依赖
pnpm install
```

② 构建主题包

```sh
pnpm build:theme-only
```

③ 运行

```sh
# 运行博客
pnpm dev

# 运行主题包文档
pnpm dev:theme
```

## :pencil:关于内容

大前端开发相关知识，包含但不限于前端

记录面试中所遇的问题，并整理相关知识点，分模块进行了梳理

## :link:个人相关链接

## :phone:联系我

如对博客内容，知识，排版等有疑问或者建议，欢迎邮件和我联系

**邮箱:307042873@qq.com**
