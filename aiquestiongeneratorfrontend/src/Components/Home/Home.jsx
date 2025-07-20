import { useContext,  } from "react";
import { CreateQuestionContext } from "../../QuestionContextAPI/CreateQuestionContext";
import { ThreeDots } from 'react-loader-spinner';
import GeneratedQuestions from "../GeneratedQuestions/GeneratedQuestions";

const Home = ()=>{

    const context = useContext(CreateQuestionContext);
    
    const { generateQuestions , questionDetails,setQuestionDetails , loading ,generatedQuestions}= context;
    

    function formatOfQuestion(format){
        console.log(format);

        setQuestionDetails(prev =>({
            ...prev,
            typeOfQuestion:format
        }));
    }

    
    return (
        <>
            <div className=" bg-amber-200  p-10">
                <div className="flex flex-col items-center">
                    <p className="md:text-4xl text-2xl font-bold text-center ">Welcome to AiQuestionGenerator</p>
                    <p className="md:text-2xl text-center mt-2">What kind of question do you want to create!</p>
                </div>
                <div className="flex justify-center mt-[10vh]">
                    <button className="bg-amber-950 text-white mx-1 px-1 rounded cursor-pointer" onClick={()=>formatOfQuestion("MCQ")}>MCQ's</button>
                    <button className="bg-amber-950 text-white mx-1 px-1 rounded cursor-pointer" onClick={()=>formatOfQuestion("subjective")}>Subjective</button>
                    <button className="bg-amber-950 text-white mx-1 px-1 rounded cursor-pointer" onClick={()=>formatOfQuestion("True/False")}>True/False</button>
                </div>


                {questionDetails.typeOfQuestion && <>
                    <div className=" md:flex  md:flex-col   items-center border-2  mt-2 rounded-2xl p-2 bg-amber-300">
                        <p className="text-black-50 font-bold md:text-2xl text-center">Generate {questionDetails.typeOfQuestion} question</p>
                        
                        <div className="grid justify-center items-center text-center mt-4">

                            <label className="text-sm font-semibold">Subject:</label>
                            <input 
                            type="text"
                             placeholder="Subject" 
                             className="rounded border-1 md:m-2 m-1 px-2 w-[150px] md:w-auto"
                             onChange={(e) =>setQuestionDetails(prev=>({
                                ...prev,
                                subjectName:e.target.value
                             }))}
                             required
                             
                              />


                            <label className="text-sm font-semibold">Grade:</label>
                            <input 
                            type="text" 
                            placeholder="Grade" 
                            className="rounded border-1 md:m-2 m-1 px-2 w-[150px] md:w-auto"
                            onChange={(e)=>setQuestionDetails(prev=>({
                                ...prev,
                                standard:e.target.value
                            }))}
                            required
                            
                            />


                            <label className="text-sm font-semibold">Number of Questions:</label>
                            <input 
                            type="text" 
                            placeholder="Total Number" 
                            className="rounded border-1 md:m-2 m-1 px-2 w-[150px] md:w-auto"
                            onChange={(e)=>setQuestionDetails(prev=>({
                                ...prev,
                                numberOfQuestions:e.target.value
                            }))}
                            required
                            
                            />
                        </div>

                        <div className="m-2  h-5 p-1">
                        {
                            loading && <ThreeDots 
                                            height="10" 
                                            width="80" 
                                            radius="9"
                                            color="black" 
                                            ariaLabel="three-dots-loading"
                                            visible={true}
                                            />
                                        }
                        </div>
                        <button className="bg-amber-950 text-white m-2 px-1 rounded cursor-pointer text-center"
                         onClick={()=>generateQuestions()}>Generate</button>
                        
                    </div>
                </>}
            </div>
            <div>
                {generatedQuestions.length > 0 && <GeneratedQuestions />}
            </div>
            
        </>
    )
}
export default Home;