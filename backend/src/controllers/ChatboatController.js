const ChatbotService = require("../services/ChatbotService.js");

class ChatbotController {
  async simpleChat(req, res) {
    try {
      const message = req.body.message;
      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }

      const contents = [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ];

      const reply = await ChatbotService.chatService(contents);
      return res.status(200).json({ reply });
    } catch (error) {
      console.error("Chatbot Error:", error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }

  async askProductQuestionController(req, res) {
    try {
      const { productId } = req.params;
      const { question } = req.body;

      if (!question) {
        return res.status(400).json({ message: "Question is required" });
      }

      const answer = await ChatbotService.askProductQuestion(
        productId,
        question
      );

      res.status(200).json({ answer });
    } catch (error) {
      console.error("Controller Error:", error);
      res.status(500).json({
        message: "Something went wrong while processing the question",
      });
    }
  }
}

module.exports = new ChatbotController();
