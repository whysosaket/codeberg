import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const defaultValue = `
// some comment
class Main{
    public static void main(String [] args){
        System.out.println("Hello World");
    }
}
`;

const EditView = () => {
  const [isDarkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      setDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className="bg-dark3 overflow-hidden z-0">
      <Editor
        height="60vh"
        defaultLanguage="java"
        theme={`${isDarkMode ? "vs-dark" : "light"}`}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default EditView;
