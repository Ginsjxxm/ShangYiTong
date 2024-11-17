# 尚硅谷前端项目 - 尚医通

这是一个基于 **Vue 3** 和 **TypeScript** 的前端项目，使用 **Vite** 构建工具，旨在帮助你快速搭建和开发前端项目。本项目采用 Vue 3 的 `<script setup>` 语法，极大提升了开发效率。如果你不熟悉，可以查看 [script setup 文档](https://v3.cn.vuejs.org/api/sfc-script-setup.html)。

## 项目简介

尚医通是一个医疗挂号平台的前端项目，涵盖了用户端的挂号预约、医院管理和医生信息查询等核心功能。

## 技术栈

- **Vue 3**：轻量、高效的前端框架，支持响应式的开发模式。
- **TypeScript**：为项目提供类型约束，提升开发和维护效率。
- **Vite**：快速的构建工具，提供高效的热更新体验。

## 推荐的开发工具配置

- [Visual Studio Code](https://code.visualstudio.com/)（推荐的编辑器）
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)：Vue 3 官方推荐插件，用于增强 Vue 文件的开发体验。
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)：让 TypeScript 更好地支持 `.vue` 文件的类型检查。

> **注意**：如果你已经安装了 Vetur，请禁用它以避免冲突。

## `.vue` 文件的类型支持

TypeScript 默认无法处理 `.vue` 文件的类型信息。为了解决这一问题，我们使用了 `vue-tsc` 来替代 `tsc` 进行类型检查。同时，在编辑器中启用了 Volar 插件，使 TypeScript 的语言服务可以识别 `.vue` 文件类型。

## 提高编辑器性能（Take Over Mode）

如果你觉得默认的 TypeScript 插件速度不够快，可以启用 Volar 的 [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669)。启用步骤如下：

1. **禁用内置的 TypeScript 插件**：
   - 打开 VS Code 命令面板，运行 `Extensions: Show Built-in Extensions`
   - 找到 `TypeScript and JavaScript Language Features`，右键选择 `Disable (Workspace)`
2. **重载 VS Code 窗口**：
   - 打开命令面板，运行 `Developer: Reload Window`

## 快速开始

### 克隆项目

```bash
git clone https://github.com/atguigu/vue3-hospital.git
cd vue3-hospital
```

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产环境

```bash
npm run build
```

## 学习资源

- [Vue 3 官方文档](https://v3.cn.vuejs.org/)
- [尚硅谷 Vue3 入门教程](https://www.bilibili.com/video/BV1Xv411b7sA)
- [TypeScript 中文文档](https://www.typescriptlang.org/zh/)
- [Vite 官方文档](https://vitejs.dev/)

---

Enjoy coding! 🚀
