
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "" });

export async function getCraftRecommendation(productName: string, productDesc: string) {
    try {
        const response = await ai.getGenerativeModel({
            model: 'gemini-1.5-flash',
        }).generateContent({
            contents: [{ role: 'user', parts: [{ text: `بصفتك خبيراً في الحرف اليدوية، اشرح بعبارة قصيرة وجذابة لماذا يعتبر المنتج "${productName}" (وصفه: ${productDesc}) مميزاً جداً كهدية أو قطعة ديكور. اجعل الإجابة بالعربية ودافئة.` }] }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 150,
            }
        });
        return response.response.text();
    } catch (error) {
        console.error("Gemini Error:", error);
        return "هذا المنتج مصنوع يدوياً بكل حب وعناية ليناسب ذوقك الرفيع.";
    }
}
