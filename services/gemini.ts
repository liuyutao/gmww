
import { GoogleGenAI } from "@google/genai";

export const askGeminiAboutArt = async (workTitle: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `请作为一名资深艺术评论家，用富有诗意和历史厚重感的语言，简短介绍延安红色版画作品《${workTitle}》的历史背景和艺术价值。控制在150字以内。`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini query failed:", error);
    return "暂时无法获取AI深度解析，请浏览下方基础介绍。";
  }
};
