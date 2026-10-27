import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer : "CSS",
    answerIndex:1 ,
  },
  {
    question: "Which language is used to create the structure of a webpage?",
    options: ["CSS", "HTML", "C++", "Java"],
    answer: "HTML",
    answerIndex:1 ,

  },
  {
    question: "Which library is used to build user interfaces?",
    options: ["React", "Django", "Laravel", "Spring"],
    answer: "React",
    answerIndex:0 ,
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "define"],
    answer: "const",
    answerIndex:2 ,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "##", "<!--", "**"],
    answer: "//",
    answerIndex:0 ,
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [obj,setObj]=useState(questions [0])
  const [result,setResult]=useState([])
  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    let obj = {
        currentQuestion:question[currentQuestion]
    }
    let obj2={
        question:questions[currentQuestion].question ,
         answer : questions[currentQuestion].answer,selectedAnswer:selectedAnswer 
    }
     let result1=[...result,obj2]
    setResult(result1)
   
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setObj( questions[currentQuestion + 1])
      setSelectedAnswer("")
    } else {
      setShowResult(true);
    }
    
  };
 console.log(result)
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setObj([])
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setResult([])
  };

  return (
    <div className="app">
      <div className="quiz-container">

        {!showResult ? (
          <>
            <h1>Quiz App</h1>

            <p className="question-number">
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <h2>{question.question}</h2>

            <div className="options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={
                    `${option===selectedAnswer?(selectedAnswer===obj.answer && obj.answerIndex===index)?"option correct":"option incorrect":"option"}`

                  }
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== ""}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              className="next-btn"
              onClick={nextQuestion}
              disabled={selectedAnswer === ""}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </>
        ) : (
          <div className="result">
            <h1>Quiz Completed!</h1>

            <h2>
              Your Score: {score} / {questions.length}
            </h2>

            <h2> Quiz Results</h2>
            {result.map((item,index)=>(
                <div key={index}>
                    {index+1}.{index.question}
                    Correct Answer:{item.answer}
                    Your Answer:{item.selectedAnswer}
            </div>
            ))}
            <button className="restart-btn" onClick={restartQuiz}>
              Restart Quiz
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;