# 林威 · 2026 个人作品网站

使用 React 19 + Vite 7 实现，内容和图像取自用户提供的 63 页 PDF 作品集。

## 本地运行

```bash
npm install
npm run dev
```

访问 http://localhost:3000 。服务绑定 `0.0.0.0:3000`，端口被占用时会明确报错。

## 生产构建

```bash
npm run build
npm run preview
```

`src/data.js` 管理项目、分类和作品页映射；`src/main.jsx` 包含页面和交互；`src/styles.css` 包含桌面、平板与手机样式。

网站包含 12 个项目、57 张项目作品页、个人简介、专业能力、联系方式与完整原始 PDF 下载。支持类别筛选、更多作品、项目详情、图片大图及键盘翻页、手机导航和邮箱复制。全部作品图像和字体存储在本地，无需依赖外部图片或字体服务。

联系方式按原 PDF 展示：18520492324 / 414218814@qq.com。

## 首页视频

首页右侧使用 `public/assets/hero-intro.mp4`，容器保持 `780:550` 横屏比例，并随屏幕宽度缩放。视频以 H.264/AAC MP4 格式提供，默认静音自动循环播放，支持手机端内联播放，并提供暂停和声音开关。若浏览器阻止自动播放，则显示手动播放按钮。

`public/assets/hero-intro-poster.jpg` 是视频加载时的封面图。首页视频样式位于 `src/hero-video.css`。

## GitHub Pages

仓库的 `main` 分支保存 React + Vite 源码，`gh-pages` 分支保存已构建的静态网站。资源使用相对路径，支持部署在 `/1122/` 等项目子目录。

在仓库 **Settings → Pages** 中，选择 **Deploy from a branch**，将分支设为 **gh-pages**、目录设为 **/ (root)**，然后保存。

Pages 启用并构建完成后，访问：https://atokiomi.github.io/1122/

源码修改后，需要重新执行 `npm run build`，将 `dist/` 的内容发布到 `gh-pages` 分支，并保留该分支根目录的 `.nojekyll` 文件。
