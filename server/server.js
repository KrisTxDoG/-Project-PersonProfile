/**
 * 注意：這是一個 Node.js 後端範例代碼。
 * 在純前端演示環境（如此 Sandbox）中不會直接運行。
 * 若要部署完整後端，請建立一個新的 Node.js 專案並安裝 express 與 nodemailer。
 * 
 * 安裝依賴: npm install express cors nodemailer dotenv
 */

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email Transporter (以 Gmail 為例)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // 您的 Gmail 帳號
    pass: process.env.EMAIL_PASS, // 您的應用程式密碼 (App Password)
  },
});

// API Endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: '請填寫完整資訊' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // 寄給自己
    subject: `來自作品集的聯絡訊息: ${name}`,
    text: `
      姓名: ${name}
      Email: ${email}
      
      訊息內容:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent from ${name}`);
    res.status(200).json({ success: true, message: '訊息已發送成功！' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: '伺服器錯誤，發送失敗' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});