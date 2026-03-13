import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Uses Gemini to refine a user's contact message to be more professional.
 */
export const refineMessageWithAI = async (originalMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment variables.");
    return originalMessage; // Fallback if no key
  }

  try {
    // Using recommended gemini-3-flash-preview for text refinement
    const model = "gemini-3-flash-preview";
    const prompt = `
      Actúa como un asistente profesional de redacción corporativa.
      Tu objetivo es reescribir mensajes de contacto para que suenen más ejecutivos, formales y directos.
      Conserva la intención original y los datos específicos del usuario.
      
      Mensaje original: "${originalMessage}"
      
      Devuelve ÚNICAMENTE el texto reescrito. No incluyas saludos iniciales ni explicaciones.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text?.trim() || originalMessage;
  } catch (error) {
    console.error("Error refining message with Gemini:", error);
    return originalMessage;
  }
};