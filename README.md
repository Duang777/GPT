<p align="center">
  <img src="src/icons/icon-128.png" alt="GPT Voyager 图标" width="168" />
</p>

<h1 align="center">GPT Voyager</h1>

<p align="center">ChatGPT 网页增强扩展：会话管理、提示词复用、公式与 Mermaid 处理、导出与备份</p>

<p align="center">
  <a href="https://github.com/Duang777/GPT-Voyager/releases/latest">最新版本下载（ZIP）</a> ·
  <a href="https://duang777.github.io/GPT-Voyager/">在线网页（前端）</a> ·
  <a href="https://duang777.github.io/GPT-Voyager/privacy.html">隐私政策</a>
</p>

## 项目简介
GPT Voyager 是一个面向 `chatgpt.com` / `chat.openai.com` 的浏览器扩展，提供统一的侧边栏工作台。目标是把高频、重复、易丢失的操作沉淀为稳定流程：
- 会话组织与检索
- 提示词模板化复用
- 公式/Mermaid 技术内容提取与导出
- 本地可恢复的数据备份体系

## 核心能力
| 模块 | 能力 | 典型场景 |
|---|---|---|
| 会话工作台 | 索引、搜索、文件夹、标签、星标、备注、多选批量操作 | 历史会话快速归档与定位 |
| 性能优化 | 虚拟滚动、密度切换、排序能力 | 大量会话下保持流畅 |
| 提示词库 | 模板管理、变量填充、变量预设、导入导出、批量导出 | 固化高质量提示词流程 |
| 公式工作台 | 页面公式提取、点击公式复制（Word 优先 / LaTeX 回退）、来源定位 | 技术写作与公式复用 |
| Mermaid 工作台 | 图表识别、预览、收藏、源码/SVG/HTML 导出 | 结构化图表复用与文档沉淀 |
| 导出与备份 | 会话 Markdown/HTML 导出、时间线节点导出、JSON 备份恢复 | 交付、归档、迁移 |

## 在线入口
- 在线网页（前端）：<https://duang777.github.io/GPT-Voyager/>
- 最新 Release（ZIP）：<https://github.com/Duang777/GPT-Voyager/releases/latest>
- 仓库地址：<https://github.com/Duang777/GPT-Voyager>
- 隐私政策：<https://duang777.github.io/GPT-Voyager/privacy.html>

## 安装使用（用户）
1. 打开 Releases 下载最新 ZIP。
2. 解压后确认目录中存在 `manifest.json`。
3. 浏览器打开 `chrome://extensions/`。
4. 开启“开发者模式”。
5. 点击“加载已解压的扩展程序”，选择解压目录。
6. 打开 `https://chatgpt.com/` 即可在页面侧边使用 GPT Voyager。

## 本地开发（开发者）
### 环境要求
- Node.js 20+
- Chrome / Edge（Manifest V3）

### 安装依赖
```powershell
npm install
```

网络较慢时可使用镜像源：
```powershell
npm install --registry=https://registry.npmmirror.com
```

### 常用命令
```powershell
npm run dev
npm run typecheck
npm run build
npm run package:zip
```

## 发布流程
### 手动发布 ZIP
```powershell
npm run typecheck
npm run build
npm run package:zip
```
执行后在 `release/` 目录生成 ZIP，可上传到 GitHub Release。

### 自动发布 ZIP
仓库已配置 GitHub Actions：推送 `v*` 标签后自动构建并上传 ZIP 到 GitHub Release。
详见：`docs/store/AUTO_RELEASE_BY_TAG_ZH-CN.md`

## 文档索引
- 需求文档：`PRD.md`
- 开发规范：`AGENT.md`
- 功能日志：`docs/FEATURE_LOG.md`
- 分发与上架：`docs/store/README.md`

## 常见问题
### 1. 为什么推荐 ZIP 分发？
无需等待商店审核，用户可直接下载并本地加载，适合快速迭代。

### 2. 公式复制到 Word 是如何工作的？
点击页面公式优先复制可渲染 MathML；若浏览器环境不支持富格式剪贴板，会自动回退到 LaTeX。

### 3. 数据会上传到外部服务器吗？
核心数据管理与备份流程以本地存储为主，详情见隐私政策页面。

