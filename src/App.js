import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Codespace from "./pages/Codespace";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/folder/:folderId/codespace/:cardId" element={<Codespace />} />
      </Routes>
    </>
  );
};

export default App;
