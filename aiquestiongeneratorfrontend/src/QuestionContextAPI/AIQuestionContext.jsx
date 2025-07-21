// import { useState } from "react";
import { useState } from "react";
import { CreateQuestionContext } from "./CreateQuestionContext";
import axios from "axios";
import { showErrorToast, showSuccessToast } from "../utils/Toastify";

export function AIQuestionContext(props){

    const URL = import.meta.env.VITE_BackendURL;

    const [questionDetails,setQuestionDetails] = useState({
        typeOfQuestion : "",
        subjectName : "",
        standard : "",
        numberOfQuestions : ""
    });

    const [loading , setLoading] = useState(false);
    const [generatedQuestions , setGeneratedQuestions] = useState([]);
    const [blurGenerated , setBlurGenerated] = useState(false);
    // const DetailsForQuestions = {
    //     typeOfQuestion : typeOfQuestion,
    //     subjectName:subjectName,
    //     standard:standard,
    //     numberOfQuestions:numberOfQuestions
    // }

    // async function generateQuestion(){
    //     const generate = await axios.get(URL,DetailsForQuestions,{ withCredentials: true });
    // }

    async function generateQuestions(){
        console.log(questionDetails);
        if(parseInt(questionDetails.numberOfQuestions) <= 0 || isNaN(questionDetails.numberOfQuestions)){
            showErrorToast("Please enter a valid number");
            return;
        }

        try {
            setLoading(true);
            setBlurGenerated(true);
            const response = await axios.post(URL,questionDetails,{ withCredentials: true });
            if(!response){
                console.log("Failed to generate questions.");
            }

            console.log(response.data);
            setGeneratedQuestions(response.data?.questions);
            showSuccessToast("Questions generated successfully..");
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
        finally{
            setLoading(false);
            setBlurGenerated(false);
        }
    }
    
    return (
        <>
            <CreateQuestionContext.Provider value={{questionDetails,setQuestionDetails,generateQuestions,setLoading,loading ,generatedQuestions,blurGenerated}}>
                {props.children}
            </CreateQuestionContext.Provider>
        </>
    )
}

