const { GoogleGenerativeAI } = require("@google/generative-ai");

export default class ChatBot {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }
  async onPromptSubmit(prompt) {
    console.log(prompt);
    const res = await this.model.generateContent(prompt);
    return res.response.text();
  }
}
