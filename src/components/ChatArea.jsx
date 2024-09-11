"use client";
import React from "react";
import "./chat.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ChatArea({ text, setText }) {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    if (text) {
      // Add new text as a message from the user
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", content: text },
      ]);
      setText(""); // Clear the text after using it
    }
  }, [text, setText]);

  return (
    <div className="chat-area">
      {/* Iterate over messages to display them in a chat format */}
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.type === "user" ? "user-message" : "bot-message"
          }`}
        >
          {/* Render the message content with markdown and syntax highlighting */}
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    PreTag="div"
                    style={solarizedlight}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
}
