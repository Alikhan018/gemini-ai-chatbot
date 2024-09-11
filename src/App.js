import React from "react";
import ChatArea from "./components/ChatArea";
import InputField from "./components/InputField";
import { NavbarComponent } from "./components/Navbar";
import ChatBot from "./services/chatbot.services";
import { SpinnerComponent } from "./components/Spinner";

function App() {
  const [chat, setChat] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const getResponse = async (prompt) => {
    if (!prompt.trim()) {
      setError("Prompt cannot be empty.");
      return;
    }

    setLoading(true);
    setError("");
    const cb = new ChatBot();

    try {
      const text = await cb.onPromptSubmit(prompt);
      setChat(text);
    } catch (err) {
      setError("Failed to fetch response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 h-[100vh] flex flex-col justify-between p-[40px] gap-[20px]">
      <NavbarComponent />
      <ChatArea text={chat} setText={setChat} />
      {loading && <SpinnerComponent />}
      {error && <p className="text-red-500">{error}</p>}
      <InputField getResponse={getResponse} />
    </div>
  );
}

export default App;
