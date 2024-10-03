import React, { useEffect } from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = ({
  currentLanguage,
  currentTheme,
  currentCode,
  value,
  setValue,
}) => {
  useEffect(() => {
    const handleValueChange = () => {
      setValue(currentCode);
    };
    handleValueChange();
  }, [currentCode]);
  return (
    <Editor
      options={{
        minimap: {
          enabled: true,
        },
        padding: {
          top: 10,
        },
      }}
      height="100%"
      theme={currentTheme}
      language={currentLanguage}
      defaultValue={currentCode}
      value={value}
      onChange={(value) => setValue(value)}
    />
  );
};

export default CodeEditor;
