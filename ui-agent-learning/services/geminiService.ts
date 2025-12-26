
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function getCraftRecommendation(productName: string, productDesc: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `بصفتك خبيراً في الحرف اليدوية، اشرح بعبارة قصيرة وجذابة لماذا يعتبر المنتج "${productName}" (وصفه: ${productDesc}) مميزاً جداً كهدية أو قطعة ديكور. اجعل الإجابة بالعربية ودافئة.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 150,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "هذا المنتج مصنوع يدوياً بكل حب وعناية ليناسب ذوقك الرفيع.";
  }
}
