import React from "react";
import { TextInput } from "flowbite-react";

export default function InputField({ getResponse }) {
  const [prompt, setPrompt] = React.useState("");
  const onFieldSubmitEnter = async (e) => {
    if (e.key === "Enter") {
      getResponse(prompt);
      setPrompt("");
    }
  };
  const onFieldSubmit = async () => {
    getResponse(prompt);
    setPrompt("");
  };
  return (
    <div>
      <div>
        <TextInput
          id="base"
          type="text"
          sizing="md"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          onKeyDown={onFieldSubmitEnter}
        />
      </div>
      <button
        className="h-[30px] w-[30px] bg-gray-200 rounded-[50%] text-black relative top-[-37px] right-[-95%]"
        onClick={onFieldSubmit}
      >
        &uarr;
      </button>
    </div>
  );
}
