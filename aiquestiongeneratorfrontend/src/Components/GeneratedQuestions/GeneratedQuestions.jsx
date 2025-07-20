import { useContext } from "react";
import { CreateQuestionContext } from "../../QuestionContextAPI/CreateQuestionContext";

const GeneratedQuestions = () => {
  const { generatedQuestions,blurGenerated } = useContext(CreateQuestionContext);

  return (
    <div className={`mt-6 transition duration-300 ${blurGenerated ? 'blur-sm pointer-events-none' : ''}`}>
  <h2 className="text-xl font-semibold text-center">Generated Questions:</h2>

  <div className="flex justify-center mt-4 p-2 ">
    <div className="flex flex-col items-start max-w-md px-4">
      {generatedQuestions.map((question, idx) => (
        <p key={idx} className="bg-white p-2 my-1 rounded shadow-md w-full ">
          <span className="font-bold">{question.questionNumber}</span>. {question.questionText}
        </p>
      ))}
    </div>
  </div>
</div>

  );
};

export default GeneratedQuestions;
