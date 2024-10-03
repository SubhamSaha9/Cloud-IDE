import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/codespace/Navbar";
import EditorContainer from "../components/codespace/EditorContainer";
import InputConsole from "../components/codespace/InputConsole";
import OutputConsole from "../components/codespace/OutputConsole";
import { useDispatch, useSelector } from "react-redux";
import { executeCode } from "../services/api";
import { savePlayground } from "../slice/playgroundSlice";
import Modal from "../components/common/Modal";

const Codespace = () => {
  const { folderId, cardId } = useParams();
  const dispatch = useDispatch();

  const { show } = useSelector((state) => state.modal);
  const { folders } = useSelector((state) => state.codeplay);
  const folder = folders.find((folder) => folder.id === folderId);
  const file = folder?.files?.find((file) => file.id === cardId);

  const [currentInput, setCurrentInput] = useState("");
  const [currentOutput, setCurrentOutput] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentCode, setCurrentCode] = useState(file?.code);
  const [currentLanguage, setCurrentLanguage] = useState(file?.language);
  const [value, setValue] = useState("");

  const runCode = async () => {
    const output = await executeCode(
      currentLanguage,
      value,
      currentInput,
      file?.title
    );
    setCurrentOutput(output.run);
  };

  const saveCode = () => {
    dispatch(
      savePlayground({
        folderId,
        cardId,
        newCode: value,
        newLanguage: currentLanguage,
      })
    );
  };

  const getFile = (e, setState) => {
    const input = e.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0], setState);
    }
  };

  const placeFileContent = (file, setState) => {
    readFileContent(file)
      .then((content) => {
        setState(content);
      })
      .catch((error) => console.log(error));
  };

  function readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

  return (
    <div>
      <Navbar isFullScreen={isFullScreen} />
      <div className="grid grid-cols-[2fr_1fr]">
        <EditorContainer
          setIsFullScreen={setIsFullScreen}
          isFullScreen={isFullScreen}
          currentCode={currentCode}
          setCurrentCode={setCurrentCode}
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
          value={value}
          setValue={setValue}
          runCode={runCode}
          title={file?.title}
          saveCode={saveCode}
          folderId={folderId}
          cardId={cardId}
          getFile={getFile}
        />
        <div className="grid w-full grid-rows-2 grid-cols-1">
          <InputConsole
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
            getFile={getFile}
          />
          <OutputConsole currentOutput={currentOutput} />
        </div>
      </div>
      {show && <Modal />}
    </div>
  );
};

export default Codespace;
