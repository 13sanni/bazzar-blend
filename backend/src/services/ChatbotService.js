require("dotenv").config();
const ProductService = require("./ProductService");

class ChatbotService {
  async chatService(contents) {
    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
    });

    const text =
      response.candidates?.[0]?.content?.parts?.[0]?.text || "No response found.";

    console.log(text);
    return text;
  }

  async askProductQuestion(productId, userQuestion) {
    try {
      const product = await ProductService.findProductById(productId);

      if (!product) {
        return "Sorry, the product you're asking about does not exist.";
      }

      const productDetails = JSON.stringify(product);

      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

      const prompt = `
        You are an eCommerce assistant. 
        Answer the customer's question based only on the product details below.

        --- PRODUCT DETAILS ---
        ${productDetails}
        -----------------------

        Question: ${userQuestion}
        Answer:
      `;

      const contents = [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ];

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents,
      });

      const text =
        response.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm not sure about that. Please ask differently.";

      return text;
    } catch (error) {
      console.error("AI Error:", error);
      throw new Error("Chatbot service failed.");
    }
  }
}

module.exports = new ChatbotService();
