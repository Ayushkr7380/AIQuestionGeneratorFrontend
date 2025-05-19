const Home = ()=>{
    return (
        <>
            <div>
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold">Welcome to AiQuestionGenerator</p>
                    <p className="text-2xl">What kind of question do you want to create!</p>
                </div>
                <div>
                    <button>MCQ's</button>
                    <button>Subjective</button>
                    <button>True/False</button>
                </div>

            </div>
        </>
    )
}
export default Home;