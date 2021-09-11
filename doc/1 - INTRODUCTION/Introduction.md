## 介绍

Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的框架。 它使用渐进式 JavaScript，使用 TypeScript 构建并完全支持（但仍然允许开发人员使用纯 JavaScript 进行编码）并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数式反应式编程）的元素。

在底层，Nest 使用了强大的 HTTP 服务器框架，如 Express（默认），并且可以选择配置为使用 Fastify！

Nest 在这些常见的 Node.js 框架（Express/Fastify）之上提供了一个抽象级别，但也直接向开发人员公开了它们的 API。 这使开发人员可以自由地使用可用于底层平台的无数第三方模块。

### 哲学

近年来，得益于 Node.js，JavaScript 已成为前端和后端应用程序的 Web 通用语言。 这催生了 Angular、React 和 Vue 等很棒的项目，它们提高了开发人员的生产力，并支持创建快速、可测试和可扩展的前端应用程序。 然而，尽管 Node（和服务器端 JavaScript）存在大量出色的库、帮助程序和工具，但它们都没有有效地解决架构的主要问题。

Nest 提供开箱即用的应用程序架构，允许开发人员和团队创建高度可测试、可扩展、松散耦合且易于维护的应用程序。 该架构深受 Angular 的启发。



### 安装

首先，您可以使用 Nest CLI 构建项目，或者克隆一个启动项目（两者都会产生相同的结果）。

要使用 Nest CLI 构建项目，请运行以下命令。 这将创建一个新的项目目录，并用初始核心 Nest 文件和支持模块填充该目录，为您的项目创建一个传统的基础结构。 建议首次使用的用户使用 Nest CLI 创建新项目。 我们将在“第一步”中继续使用这种方法。

```shell
$ npm i -g @nestjs/cli
$ nest new project-name
```

### 备选方案

可选地，使用git来安装Typescript入门项目：

```shell
$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start
```

打开浏览器并导航到 http://localhost:3000/。

要安装启动项目的 JavaScript 风格，请在上面的命令序列中使用 javascript-starter.git。

您还可以通过使用 npm（或 yarn）安装核心和支持文件，从头开始手动创建新项目。 在这种情况下，当然，您将负责自己创建项目样板文件。

```SHE
$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```

