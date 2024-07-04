import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setShowResult(true); // Show result section
    setRecentPrompt(input); // Set recent prompt to current input
    setLoading(true); // Set loading state

    try {
      // Call run function asynchronously
      const response = await run(prompt);
      setResultData(response); // Set result data from API response
    } catch (error) {
      console.error("Error fetching response:", error);
      setResultData("Error occurred. Please try again."); // Handle error
    }

    setLoading(false); // Set loading state back to false
    setInput(""); // Clear input field
  };

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
