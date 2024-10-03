import axios from "axios";
import { languageMap } from "../data/boilerplate";
import { toast } from "react-hot-toast"

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode, currentInput, fileName) => {
    const toastId = toast.loading("Executing...");
    try {
        const response = await API.post("/execute", {
            language: language,
            version: languageMap[language].version,
            files: [
                {
                    name: language === "java" ? languageMap[language].fileName : fileName || languageMap[language].fileName,
                    content: sourceCode,
                },
            ],
            stdin: currentInput,
        });
        toast.dismiss(toastId);
        return response.data;
    } catch (error) {
        console.log(error);
        toast.error(error.message);
        toast.dismiss(toastId)
    }

};