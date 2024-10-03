import React, { useState } from "react";
import { BiEditAlt, BiExport, BiFullscreen, BiImport } from "react-icons/bi";
import { themeOptions } from "../../data/themeOptions";
import { languageMap } from "../../data/boilerplate";
import { languageOptions } from "../../data/selectOption";
import Select from "react-select";
import CodeEditor from "./CodeEditor";
import { useDispatch } from "react-redux";
import { openModal } from "../../slice/modalSlice";

const EditorContainer = ({
  title,
  currentLanguage,
  setCurrentLanguage,
  currentCode,
  setCurrentCode,
  folderId,
  cardId,
  saveCode,
  runCode,
  getFile,
  isFullScreen,
  setIsFullScreen,
  value,
  setValue,
}) => {
  const dispatch = useDispatch();
  const [currentTheme, setCurrentTheme] = useState({
    value: "vs-dark",
    label: "VsCode Dark",
  });
  const [language, setLanguage] = useState(() => {
    for (let i = 0; i < languageOptions.length; i++) {
      if (languageOptions[i].value === currentLanguage) {
        return languageOptions[i];
      }
    }
    return languageOptions[0];
  });

  const handleThemeChange = (selectedOption) => {
    setCurrentTheme(selectedOption);
  };

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
    setCurrentLanguage(selectedOption.value);
    setCurrentCode(languageMap[selectedOption.value].defaultCode);
  };

  const handleUpdateFile = () => {
    dispatch(
      openModal({
        show: true,
        modalType: 5,
        folderId: folderId,
        cardId: cardId,
      })
    );
  };
  return (
    <div
      className={`flex flex-col w-full ${
        isFullScreen ? "min-h-screen" : "min-h-[calc(100vh-4.5rem)]"
      }`}
    >
      {!isFullScreen && (
        <div className="bg-white flex justify-between items-center  gap-1 p-2">
          <div className="flex items-center">
            <div className="flex items-center  gap-4 mr-[2.3rem] text-[1.3rem]">
              <h3 className="text-lg">{title}</h3>
              <BiEditAlt
                onClick={handleUpdateFile}
                className="cursor-pointer"
              />
            </div>
            <button
              onClick={saveCode}
              className="px-2 py-[0.7rem] w-[6.2rem] bg-[#0097d7] border-none rounded-full font-bold cursor-pointer"
            >
              Save code
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Select
              options={languageOptions}
              value={language}
              onChange={handleLanguageChange}
              className="w-[8rem]"
            />
            <Select
              options={themeOptions}
              value={currentTheme}
              onChange={handleThemeChange}
              className="w-[10rem]"
            />
          </div>
        </div>
      )}
      <div className="h-[90vh]">
        <CodeEditor
          currentLanguage={currentLanguage}
          currentTheme={currentTheme.value}
          currentCode={currentCode}
          value={value}
          setValue={setValue}
        />
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2 p-2 h-[4rem]">
        <button
          onClick={() => setIsFullScreen((isFullScreen) => !isFullScreen)}
          className="text-[1.2rem] border-none flex items-center gap-[0.7rem] text-black bg-transparent"
        >
          <BiFullscreen /> {isFullScreen ? "Minimize Screen" : "Full Screen"}
        </button>

        <label
          htmlFor="codefile"
          className="text-[1.2rem] border-none flex items-center gap-[0.7rem] text-black cursor-pointer"
        >
          <input
            type="file"
            accept="."
            id="codefile"
            onChange={(e) => getFile(e, setValue)}
            className="hidden"
          />
          <BiImport /> Import Code
        </label>

        <a
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(value)}`}
          download="code.txt"
          className="text-[1.2rem] border-none flex items-center gap-[0.7rem] text-black cursor-pointer"
        >
          <BiExport /> Export Code
        </a>
        <button
          className="text-[1.2rem] border-none flex items-center gap-[0.7rem] text-black px-4 py-[0.6rem] bg-[#0097d7] rounded-full font-bold cursor-pointer"
          onClick={runCode}
        >
          Run Code
        </button>
      </div>
    </div>
  );
};

export default EditorContainer;
