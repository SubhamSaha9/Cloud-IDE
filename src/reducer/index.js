import { combineReducers } from "@reduxjs/toolkit";
import playgroundSlice from "../slice/playgroundSlice";
import modalSlice from "../slice/modalSlice";

const rootReducer = combineReducers({
    codeplay: playgroundSlice,
    modal: modalSlice,
});

export default rootReducer;