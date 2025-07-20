// import { useState } from "react";
import { useState } from "react";
import { CreateQuestionContext } from "./CreateQuestionContext";
import axios from "axios";

export function AIQuestionContext(props){

    const URL = "http://127.0.0.1:5001/question/askquestion";

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

        try {
            setLoading(true);
            setBlurGenerated(true);
            const response = await axios.post(URL,questionDetails,{ withCredentials: true });
            if(!response){
                console.log("Failed to generate questions.");
            }

            console.log(response.data);
            setGeneratedQuestions(response.data?.questions);
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

