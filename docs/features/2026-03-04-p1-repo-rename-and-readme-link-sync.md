# FEAT-046：仓库重命名与 README 链接同步

## 1. 元信息
- 功能 ID：FEAT-046
- 功能名称：仓库重命名与 README 链接同步
- 日期：2026-03-04
- 作者：Codex
- 分支：N/A

## 2. 概述
将仓库名称从 `GPT` 调整为 `GPT-Voyager`，并同步仓库主页与 README 对外链接，避免用户访问旧路径。

## 3. 需求映射
- 对应 PRD 章节：
  - 对外展示与分发可达性
- 覆盖用户场景：
  - 用户通过 README 跳转下载页、在线网页与隐私页时不出现路径混淆。

## 4. 实现
- 主要变更：
  - GitHub 仓库：`Duang777/GPT` -> `Duang777/GPT-Voyager`
  - 仓库 About Website：`https://duang777.github.io/GPT-Voyager/`
  - 本地远端 `origin` 同步为 `https://github.com/Duang777/GPT-Voyager.git`
  - README 中所有仓库/网页/隐私链接同步为 `GPT-Voyager` 路径
- 主要文件：
  - `README.md`
  - `docs/FEATURE_LOG.md`

## 5. 验证
- 手工验证：
  1. `gh repo view Duang777/GPT-Voyager` 可正常返回仓库信息。
  2. `git remote -v` 指向新仓库地址。
  3. README 中链接均指向 `GPT-Voyager` 新路径。

## 6. 风险与回滚
- 已知风险：
  - 若 GitHub Pages 未完成新仓库路径发布，`/GPT-Voyager/` 页面可能短时间不可用。
- 回滚策略：
  - 重新修改仓库名称或恢复 README 链接至旧路径（不推荐）。
