import { createSlice } from '@reduxjs/toolkit';

// Initial state for the modal
const initialState = {
    show: false,
    modalType: "",
    identifiers: {
        folderId: "",
        cardId: "",
    }
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.show = true;
            state.modalType = action.payload.modalType;
            state.identifiers.folderId = action.payload.folderId;
            state.identifiers.cardId = action.payload.cardId;
        },
        closeModal: (state) => {
            state.show = false;
            state.modalType = "";
            state.identifiers.folderId = "";
            state.identifiers.cardId = "";
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
