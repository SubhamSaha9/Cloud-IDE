import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';
import { languageMap } from "../data/boilerplate";

const initialItems = [
    {
        id: uuid(),
        title: "DSA",
        files: [
            {
                id: uuid(),
                title: "Stack Implementation",
                language: "cpp",
                code: languageMap["cpp"].defaultCode,
            },
            {
                id: uuid(),
                title: "Array",
                language: "java",
                code: languageMap["java"].defaultCode,
            },
        ]
    }
];

const initialState = {
    folders: localStorage.getItem("folders") ? JSON.parse(localStorage.getItem("folders")) : initialItems
}

const fileslice = createSlice({
    name: 'codeplay',
    initialState: initialState,
    reducers: {
        addFolder: (state, action) => {
            const folderName = action.payload;
            // state.folders[uuid()] = { title: folderName, files: {} };
            state.folders.push({
                id: uuid(),
                title: folderName,
                files: []
            });
            localStorage.setItem("folders", JSON.stringify(state.folders));
        },
        deleteFolder: (state, action) => {
            const { folderId } = action.payload;
            state.folders = state.folders.filter((folder) => folder.id !== folderId);
            localStorage.setItem("folders", JSON.stringify(state.folders));
        },
        addFiles: (state, action) => {
            const { folderId, cardTitle, language } = action.payload;
            const folder = state.folders.find((folder) => folder.id === folderId);
            if (folder) {
                folder.files.push({
                    id: uuid(),
                    title: cardTitle,
                    language: language,
                    code: languageMap[language].defaultCode,
                });
            }
            localStorage.setItem("folders", JSON.stringify(state.folders));
        },
        deleteCard: (state, action) => {
            const { folderId, cardId } = action.payload;
            const folder = state.folders.find((folder) => folder.id === folderId);
            if (folder) {
                folder.files = folder.files.filter(file => file.id !== cardId);
            }
            localStorage.setItem("folders", JSON.stringify(state.folders));
        },
        editFolderTitle: (state, action) => {
            const { folderId, folderTitle } = action.payload;
            state.folders.filter((folder) => folder.id === folderId)[0].title = folderTitle;
            localStorage.setItem("folders", JSON.stringify(state.folders));
        },
        editPlaygroundTitle: (state, action) => {
            const { folderId, cardId, playgroundTitle } = action.payload;
            const folder = state.folders.find(folder => folder.id === folderId);
            if (folder) {
                const file = folder.files.find(file => file.id === cardId);
                if (file) {
                    file.title = playgroundTitle;
                }
            }
            localStorage.setItem("folders", JSON.stringify(state.folders));
        },
        savePlayground: (state, action) => {
            const { folderId, cardId, newCode, newLanguage } = action.payload;
            const folder = state.folders.find((folder) => folder.id === folderId);
            if (folder) {
                const file = folder.files.find(file => file.id === cardId);
                if (file) {
                    file.code = newCode;
                    file.language = newLanguage
                }
            }
            localStorage.setItem("folders", JSON.stringify(state.folders));
        },
        addPlaygroundAndFolder: (state, action) => {
            const { folderName, FileName, cardLanguage } = action.payload;
            state.folders.push({
                id: uuid(),
                title: folderName,
                files: [
                    {
                        id: uuid(),
                        title: FileName,
                        language: cardLanguage,
                        code: languageMap[cardLanguage].defaultCode,
                    }
                ]
            });
            localStorage.setItem("folders", JSON.stringify(state.folders));
        },
    }
});

export const {
    addFolder,
    deleteFolder,
    addFiles,
    deleteCard,
    editFolderTitle,
    editPlaygroundTitle,
    savePlayground,
    addPlaygroundAndFolder,
} = fileslice.actions;

export default fileslice.reducer;
