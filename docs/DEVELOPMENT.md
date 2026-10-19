# 开发说明

开发工作区采用独立仓库布局。总目录的 Git 仓库只管理公共说明、问题表单和配置模板，各插件的源码由对应仓库管理。

| 目录 | 职责 |
| --- | --- |
| `Projects/mnknowledgebase` | Knowledge Base 公共源码 |
| `Projects/mncommentmanager` | Comment Manager 既有公共仓库 |
| `Projects/mnpinner`、`Projects/mnliterature` | 付费插件私有源码 |
| `Projects/extensions` | 私有定制和实验插件 |
| `Tooling/public` | 公共路径定位和包体校验工具 |
| `Tooling/internal` | 私有构建、发布适配和跨插件验证 |
| `Reference` | 私有接口资料与独立上游参考仓库 |
| `Resources`、`Packages`、`Archive` | 本地资料、安装包和恢复档案 |
| `Worktrees`、`MEMORY`、`Local` | 工作树、项目记录和本地运行数据 |

开发配置从 `addon-workspace.example.json` 复制为 `addon-workspace.local.json`，并按实际检出位置填写。项目的 `path` 相对于工作区，`payload` 相对于项目目录。本地配置不提交到公共仓库。

```sh
python3 Tooling/public/bin/addon-workspace.py --workspace "$workspace" resolve mnknowledgebase
```

Knowledge Base 的独立检出支持以下离线检查和打包命令。构建环境固定为 Node.js 24，安装包保存在项目的 `dist` 目录。

```sh
npm test
npm run pack
```

普通检查只运行明确列出的源码检查、回归和本地构建，不修改版本，不抓取更新，不安装插件，不上传、部署或推送。跨插件实现和内部验证记录保存在私有范围，公共检查不读取付费源码。

拉取请求应关联问题，并分别记录源码检查、包体校验和设备验收结果。拉取请求合并后，尚未完成 Mac 或 iPad 验收的问题继续保持开放。发布前需要明确记录源码提交、版本、渠道、安装包摘要和验证结果。

源码可以使用文件同步备份。活动 Git 元数据、依赖和可再生缓存需要按实际路径排除同步，并另存经过校验的静态 Git 恢复档案。同步设置和恢复档案保存在本地私有范围。
