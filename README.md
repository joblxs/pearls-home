## 项目概述
拾贝歪栈是一个集创意灵感与技术干货于一体的网站，为用户提供非标准的代码灵感、反套路的编程技巧以及各种小众技术知识。网站包含主页、博客等多个板块，拥有丰富的交互效果和良好的用户体验。

## 项目结构
### 主要目录结构
```
src/
├── components/
│   ├── blog/           # 博客相关组件
│   │   ├── module/     # 博客模块组件
│   │   ├── BlogIndex.vue # 博客首页
│   ├── module/         # 通用模块组件
│   ├── error/          # 错误页面组件
│   ├── IndexHome.vue   # 主页组件
├── router/             # 路由配置
├── store/              # Vuex状态管理
├── utils/              # 工具函数
├── App.vue             # 根组件
├── main.js             # 入口文件
```

### 主要文件功能说明
- `src/main.js`：项目入口文件，初始化Vue应用，注册全局插件和组件。
- `src/router/index.js`：路由配置文件，定义页面路由。
- `src/store/index.js`：Vuex状态管理文件，管理应用的全局状态。
- `src/components/IndexHome.vue`：主页组件，包含导航抽屉、横幅、站点、热榜和底部等部分。
- `src/components/blog/BlogIndex.vue`：博客首页组件，包含博客列表和右侧小组件。

## 技术栈
- **前端框架**：Vue.js
- **状态管理**：Vuex
- **路由管理**：Vue Router
- **UI组件库**：Layui Vue
- **动画库**：Animate.css
- **进度条插件**：NProgress

## 安装与运行
### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run serve
```

### 构建生产版本
```bash
npm run build
```

## 部署说明
将构建生成的`dist`目录下的文件部署到服务器即可。

## 注意事项
- 确保Node.js和npm已正确安装。
- 项目中使用了一些第三方插件和库，确保网络连接正常以正确安装依赖。