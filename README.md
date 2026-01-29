# Maca Candy 官方网站

> 基于高端生物科技企业风格打造的品牌官网  
> 移动端优先 · 单页滚动 · 纯静态部署

## 📋 项目概述

这是 Maca Candy 草本能量糖的官方品牌展示与招商网站。采用现代化的生物科技企业设计风格，强调专业性、可信度与转化效率。

### 核心特点

- ✅ **生物科技风格**: 参考辽宁丰瑞等高端企业官网设计
- ✅ **移动端优先**: 完美适配 375px - 1920px 所有屏幕
- ✅ **单页滚动**: 流畅的锚点导航与区块切换
- ✅ **无后端设计**: 纯静态页面，表单提交采用复制方案
- ✅ **SEO 优化**: 完整的 meta 标签与语义化 HTML
- ✅ **动效精致**: Framer Motion 驱动的流畅动画

---

## 🛠️ 技术栈

- **框架**: Vite 7 + React 18
- **样式**: Tailwind CSS 4.x (最新版)
- **动画**: Framer Motion
- **图标**: Lucide React
- **工具**: react-intersection-observer, clsx, tailwind-merge

---

## 🚀 快速开始

### 1. 安装依赖

```bash
cd maca-candy-official
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

浏览器访问: http://localhost:5173

### 3. 构建生产版本

```bash
npm run build
```

生成的文件在 `dist/` 目录，直接部署到任意静态托管平台。

---

## 📂 项目结构

```
maca-candy-official/
├── public/
│   └── logo.png                  # 品牌 Logo
├── src/
│   ├── components/
│   │   ├── sections/             # 页面区块组件
│   │   │   ├── Header.jsx        # 顶部导航
│   │   │   ├── Hero.jsx          # 首屏展示
│   │   │   ├── PainPoints.jsx    # 痛点共鸣
│   │   │   ├── Features.jsx      # 核心优势
│   │   │   ├── Ingredients.jsx   # 成分展示
│   │   │   ├── Usage.jsx         # 使用方式
│   │   │   ├── FAQ.jsx           # 常见问题
│   │   │   ├── Partnership.jsx   # 招商合作
│   │   │   ├── Contact.jsx       # 联系表单
│   │   │   └── Footer.jsx        # 页脚
│   │   └── ui/                   # 可复用UI组件
│   ├── config/
│   │   └── site.js               # 站点配置 ⚠️ 需修改
│   ├── data/
│   │   └── content.js            # 文案内容
│   ├── lib/
│   │   └── utils.js              # 工具函数
│   ├── App.jsx                   # 主应用
│   ├── main.jsx                  # 入口文件
│   └── index.css                 # 全局样式
├── index.html                    # HTML 模板
├── tailwind.config.js            # Tailwind 配置
├── postcss.config.js             # PostCSS 配置
└── package.json
```

---

## ⚙️ 配置说明

### 修改站点配置

打开 `src/config/site.js`，修改以下占位符：

```javascript
export const siteConfig = {
  // 联系方式 - ⚠️ 必填
  contact: {
    phone: "[待填写客服电话]",      // 替换为真实电话
    wechat: "[待填写微信号]",       // 替换为真实微信
    whatsapp: "[待填写 WhatsApp]", // 替换为真实 WhatsApp
    email: "[待填写邮箱]",          // 替换为真实邮箱
  },
  
  // 产品信息 - ⚠️ 建议填写
  product: {
    spec: "[待填写规格]",           // 如：每条5g，10条/盒
    retailPrice: "[待填写零售价]",  // 如：¥298/盒
    agentPrice: "[待填写代理价]",   // 如：¥198-¥238/盒
  },
  
  // 公司信息 - ⚠️ 建议填写
  company: {
    name: "[待填写公司全称]",
    address: "[待填写公司地址]",
    warehouse: "[待填写发货地]",
  },
  
  // 第三方表单链接 - 🟢 可选
  formLink: "https://forms.example.com/...",  // 替换为真实表单链接
};
```

### 修改文案内容

所有页面文案都在 `src/data/content.js`，可以根据需要调整：

- `hero` - 首屏文案
- `features` - 核心优势
- `ingredients` - 成分说明
- `usage` - 使用方式
- `faq` - 常见问题
- `partnership` - 招商信息

---

## 🖼️ 图片素材管理

### 当前状态

所有需要图片的位置都使用了占位符：

1. **Hero 首屏**: 使用 Logo + 装饰元素作为占位
2. **成分展示**: 使用编号圆形作为占位
3. **场景展示**: 暂时隐藏，等待真实图片

### 替换真实图片

#### 方法 1: 本地图片

将图片放到 `public/images/` 目录：

```
public/
└── images/
    ├── hero-product.jpg      # 首屏产品图
    ├── ingredient-maca.jpg    # 成分图片
    ├── scene-work.jpg         # 场景图片
    └── ...
```

然后在组件中修改图片路径：

```jsx
<img src="/images/hero-product.jpg" alt="Product" />
```

#### 方法 2: 在线图片

使用 Unsplash/Pexels 等免费图库：

```jsx
<img src="https://images.unsplash.com/photo-xxx" alt="Product" />
```

---

## 🌐 部署指南

### Vercel (推荐)

1. 将项目推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

### Netlify

1. 连接 GitHub 仓库
2. 构建命令: `npm run build`
3. 发布目录: `dist`

### GitHub Pages

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

### 自建服务器 (Nginx)

```bash
# 构建
npm run build

# 上传 dist/ 目录到服务器
# 配置 Nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📋 待补充清单

### 🔴 极高优先级 (影响核心功能)

- [ ] **联系方式**: 电话、微信、邮箱 (在 `src/config/site.js`)
- [ ] **表单链接**: 第三方表单URL (如问卷星/Google Form)
- [ ] **公司信息**: 公司全称、地址

### 🟡 高优先级 (影响专业度)

- [ ] **产品图片**: 高清产品实拍图 (白底/场景化)
- [ ] **成分图片**: 5种成分的植物/原料图
- [ ] **规格定价**: 产品规格与价格体系

### 🟢 中等优先级 (提升品牌感)

- [ ] **场景图片**: 4个使用场景的配图
- [ ] **工厂图片**: 生产车间/实验室 (如有)
- [ ] **资质证书**: 检测报告、资质认证

### ⚪ 可选优化

- [ ] 集成 Google Analytics
- [ ] 添加在线客服
- [ ] 接入真实表单后端
- [ ] 添加产品视频

---

## 🎨 设计风格说明

### 配色方案

| 颜色 | 用途 | Hex |
|------|------|-----|
| 品牌绿 | 主色调、CTA按钮 | #2AA84A |
| 深绿 | 导航、标题 | #1A4D2E |
| 中性灰 | 背景、分割 | #E5EADF |
| 纯白 | 背景 | #FAFAFA |
| 墨黑 | 正文 | #1A1A1A |

### 字体系统

- 标题: PingFang SC / Microsoft YaHei (Bold)
- 正文: PingFang SC / Microsoft YaHei (Regular)
- 特殊强调: 加粗 + 字间距

### 布局特点

- 非对称网格（7:5 / 5:7 黄金比例）
- 极简分割线（1px 细线）
- 克制的动效（淡入 + 轻微位移）

---

## 🐛 常见问题

### Q: 为什么表单提交后没有发送到后端？

A: 本项目采用无后端设计，表单内容会复制到剪贴板。您可以：
- 使用第三方表单服务 (问卷星/Google Form)
- 或集成 EmailJS / Formspree 等服务

### Q: 如何更换 Logo？

A: 替换 `public/logo.png` 文件即可。建议尺寸：400x400px，PNG 透明背景。

### Q: 为什么有些图片显示不出来？

A: 当前使用的是占位符。请参考「图片素材管理」章节替换真实图片。

---

## 📞 技术支持

如有问题或需要定制开发，请联系开发团队。

---

## 📄 许可证

© 2024 Maca Candy. All rights reserved.
