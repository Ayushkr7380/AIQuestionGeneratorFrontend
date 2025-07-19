// import { useState } from "react";
import { useState } from "react";
import { CreateQuestionContext } from "./CreateQuestionContext";

export function AIQuestionContext(props){

    const URL = "http://127.0.0.1:5001/question/askquestion";

    const [questionDetails,setQuestionDetails] = useState({
        typeOfQuestion : "",
        subjectName : "",
        standard : "",
        numberOfQuestions : ""
    });

    // const DetailsForQuestions = {
    //     typeOfQuestion : typeOfQuestion,
    //     subjectName:subjectName,
    //     standard:standard,
    //     numberOfQuestions:numberOfQuestions
    // }

    // async function generateQuestion(){
    //     const generate = await axios.get(URL,DetailsForQuestions,{ withCredentials: true });
    // }

    function generateQuestions(){
        console.log(questionDetails);
    }
    
    return (
        <>
            <CreateQuestionContext.Provider value={{questionDetails,setQuestionDetails,generateQuestions}}>
                {props.children}
            </CreateQuestionContext.Provider>
        </>
    )
}

