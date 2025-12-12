# 個人作品集網站 (Personal Portfolio)

這是一個使用 React, TypeScript, 和 Tailwind CSS 建立的現代化個人作品集網站。

## 🔐 資安重要說明 (Security)

**非常重要：請勿將敏感資料（如 Email 密碼、API Key）直接寫入程式碼中！**

1. **原始碼保護**：本專案已包含 `.gitignore` 檔案，它會防止您的 `.env` 檔案被上傳到 GitHub。請確保不要移除此檔案。
2. **環境變數**：所有的機密資料應透過環境變數 (`process.env`) 管理。

---

## 📁 部署建議 (Deployment)

### 1. 前端部署 (Vercel / Netlify) - 推薦
這是一個單頁應用 (SPA)，最適合部署在 Vercel 或 Netlify。

**Vercel 部署步驟:**
1. 將程式碼推送到 GitHub (確認沒有上傳 `.env` 檔案)。
2. 在 Vercel Dashboard 點擊 "Add New..." -> "Project"。
3. 選擇你的 GitHub Repo。
4. Framework Preset 選擇 "Create React App" 或 "Vite"。
5. 點擊 "Deploy"。

### 2. 後端整合與敏感資料設定

**選項 A: 使用 EmailJS (純前端，最推薦)**
不需要後端伺服器，也不需要在 Vercel 設定後端環境變數。
1. 註冊 [EmailJS](https://www.emailjs.com/)。
2. 在 EmailJS 後台取得 Service ID, Template ID, 和 Public Key。
3. 修改 `services/emailService.ts` 直接呼叫 EmailJS SDK。

**選項 B: 自架 Node.js 後端 (server/server.js)**
若您決定部署 `server.js` (例如部署到 Render.com)，您需要在該平台的後台設定環境變數：

*   **EMAIL_USER**: 您的 Gmail 帳號
*   **EMAIL_PASS**: 您的 Google 應用程式密碼 (非登入密碼)

**警告**：請勿將 `server.js` 當作前端程式碼的一部分部署到 Vercel 的靜態網站託管中，除非您將其改寫為 Vercel Serverless Functions。

## 🎨 圖片生成提示詞 (Image Prompts)

若您想使用 DALL·E 3 或 Midjourney 生成自定義圖片，請參考以下 Prompt：

**1. 首頁個人形象圖 (Hero Section):**
> "Professional and friendly web developer portrait, modern minimal bright office background with plants, soft natural lighting, holding a laptop, casual business attire, high quality, photorealistic, 4k."

**2. 關於我 - 工作情境 (About Section):**
> "Modern minimalist workspace desk setup, MacBook Pro showing code on screen, notebook, coffee cup, succulent plant, clean white desk, isometric view, soft shadows, aesthetics."

**3. 作品集縮圖 - 電商後台 (Project 1):**
> "Modern e-commerce dashboard UI design on a laptop screen, dark mode, vibrant purple and blue gradient charts, clean typography, glassmorphism elements, high fidelity UI design."

**4. 作品集縮圖 - 旅遊 App (Project 2):**
> "Mobile app interface design for travel planning, displaying a map with pins and scenic photo cards, bright and airy color palette, floating 3D mobile phone mockup."

## 🛠️ 技術堆疊
- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Icons:** Lucide React
- **Design:** Mobile-First, Responsive Grid