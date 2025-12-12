import { ContactFormData } from '../types';

/**
 * 模擬發送 Email 到後端
 * 實際專案中，這裡會使用 fetch() 呼叫你的後端 API
 */
export const sendEmail = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // 模擬網路延遲
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log('Form Data submitted:', data);
  
  // 這裡可以換成真實的 fetch 請求
  // const response = await fetch('http://localhost:3000/api/send-email', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  
  // 模擬成功回應
  if (data.email.includes('error')) {
     return { success: false, message: '發送失敗，請稍後再試。' };
  }

  return { success: true, message: '訊息已發送！我會盡快回覆您。' };
};