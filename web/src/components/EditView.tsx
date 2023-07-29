import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import {motion} from "framer-motion";

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
    <motion.div
    initial={{y:-200}}
    animate={{y:0}}
    transition={{ duration: 0.5 }}
    className="bg-dark3 overflow-hidden z-0">
      <Editor
        height="65vh"
        defaultLanguage="java"
        theme={`${isDarkMode ? "vs-dark" : "light"}`}
        defaultValue={defaultValue}
      />
    </motion.div>
  );
};

export default EditView;
