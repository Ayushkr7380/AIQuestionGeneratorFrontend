import { useContext,  } from "react";
import { CreateQuestionContext } from "../../QuestionContextAPI/CreateQuestionContext";

const Home = ()=>{

    const context = useContext(CreateQuestionContext);
    
    const { generateQuestions , questionDetails,setQuestionDetails}= context;
    

    function formatOfQuestion(format){
        console.log(format);

        setQuestionDetails(prev =>({
            ...prev,
            typeOfQuestion:format
        }));
    }

    
    return (
        <>
            <div className=" bg-amber-200 mt-[25vh] p-10">
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold">Welcome to AiQuestionGenerator</p>
                    <p className="text-2xl">What kind of question do you want to create!</p>
                </div>
                <div className="flex justify-center mt-[10vh]">
                    <button className="bg-amber-950 text-white mx-1 px-1 rounded cursor-pointer" onClick={()=>formatOfQuestion("MCQ")}>MCQ's</button>
                    <button className="bg-amber-950 text-white mx-1 px-1 rounded cursor-pointer" onClick={()=>formatOfQuestion("subjective")}>Subjective</button>
                    <button className="bg-amber-950 text-white mx-1 px-1 rounded cursor-pointer" onClick={()=>formatOfQuestion("True/False")}>True/False</button>
                </div>


                {questionDetails.typeOfQuestion && <>
                    <div className=" md:flex  md:flex-col   items-center border-2  mt-2 rounded-2xl p-2 bg-amber-300">
                        <p className="text-black-50 text-2xl">Generate {questionDetails.typeOfQuestion} question</p>
                        
                        <div className="">

                            <label className="text-sm font-semibold">Subject:</label>
                            <input 
                            type="text"
                             placeholder="Subject" 
                             className="border-1 md:m-2 m-1 px-2 w-[150px] md:w-auto"
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
                            className="border-1 md:m-2 m-1 px-2 w-[150px] md:w-auto"
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
                            className="border-1 md:m-2 m-1 px-2 w-[150px] md:w-auto"
                            onChange={(e)=>setQuestionDetails(prev=>({
                                ...prev,
                                numberOfQuestions:e.target.value
                            }))}
                            required
                            />
                        </div>
                        <button className="bg-amber-950 text-white m-2 px-1 rounded cursor-pointer text-center"
                         onClick={()=>generateQuestions()}>Generate</button>
                        
                    </div>
                </>}
            </div>
        </>
    )
}
export default Home;