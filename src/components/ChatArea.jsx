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
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", content: text },
      ]);
      setText(""); 
    }
  }, [text, setText]);

  return (
    <div className="chat-area">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.type === "user" ? "user-message" : "bot-message"
          }`}
        >
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
