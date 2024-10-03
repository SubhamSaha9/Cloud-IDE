import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { languageOptions } from "../../../data/selectOption";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../slice/modalSlice";
import { addFiles } from "../../../slice/playgroundSlice";

const NewPlayground = () => {
  const dispatch = useDispatch();

  const { identifiers } = useSelector((state) => state.modal);
  const folderId = identifiers.folderId;

  const [cardTitle, setCardTitle] = useState("");
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  const handleNewFile = () => {
    dispatch(addFiles({ folderId, cardTitle, language: language.value }));
    dispatch(closeModal());
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Create Card</h2>
        <div className="text-[2rem] cursor-pointer bg-transparent outline-none border-0">
          <IoCloseSharp onClick={() => dispatch(closeModal())} />
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap pt-6 gap-8">
        <input
          type="text"
          onChange={(e) => setCardTitle(e.target.value)}
          className="flex-grow h-8 border-1 bg-richblack-3 border border-[#bcbcbcb3] rounded px-2"
          value={cardTitle}
          placeholder="Enter File name"
        />
        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />
        <button
          onClick={handleNewFile}
          className="bg-[#241f21] h-10 text-white py-1 px-8 rounded"
        >
          Create Codeplay
        </button>
      </div>
    </div>
  );
};

export default NewPlayground;
