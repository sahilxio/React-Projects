import React, { useState } from 'react'



const questions = [

  {

    question: "Which language runs in a web browser?",

    answers: [

      { text: "Python", correct: false },

      { text: "Java", correct: false },

      { text: "C", correct: false },

      { text: "JavaScript", correct: true }

    ]

  },

  {

    question: "What does CSS stand for?",

    answers: [

      { text: "Cascading Style Sheets", correct: true },

      { text: "Computer Style Sheets", correct: false },

      { text: "Colorful Style Sheets", correct: false },

      { text: "Creative Style System", correct: false }

    ]

  },

  {

    question: "What does HTML stand for?",

    answers: [

      { text: "Hyper Text Markup Language", correct: true },

      { text: "Hyperlinks and Text Markup Language", correct: false },

      { text: "Home Tool Markup Language", correct: false },

      { text: "Hyper Transfer Machine Language", correct: false }

    ]

  },

  {

    question: "What year was JavaScript launched?",

    answers: [

      { text: "1996", correct: false },

      { text: "1995", correct: true },

      { text: "1994", correct: false },

      { text: "2000", correct: false }

    ]

  }

];


const App = () => {



  const [questionIndex, setQuestionIndex] = useState(0)

  const [score, setScore] = useState(0)

  const [selectedAnswer, setSelectedAnswer] = useState(null)



  const isFinished = questionIndex >= questions.length



  return (



    <div className='p-5 bg-white w-96 mx-auto rounded-xl '>



      {!isFinished ? (



        <>



          <h1 className='text-black text-center font-semibold mb-5'>{questions[questionIndex].question}</h1>

          <div className='flex flex-col gap-3'>

            {questions[questionIndex].answers.map((answer, index) => {



              let buttonColor = 'bg-blue-500 text-white'



              if (selectedAnswer !== null) {

                if (answer.correct) {

                  buttonColor = 'bg-green-500 text-white'

                } else if (selectedAnswer === index) {

                  buttonColor = 'bg-red-500 text-white'

                }

              }



              return (



                <button

                  onClick={() => {

                    setSelectedAnswer(index)



                    if (answer.correct) {

                      setScore(prev => prev + 1)

                    }

                  }}



                  disabled={selectedAnswer !== null}

                  className={`${buttonColor} p-3 rounded-lg`}

                >

                  {answer.text}

                </button>

              )

            })}

          </div>



          <button

            onClick={() => {

              setQuestionIndex(questionIndex + 1)

              setSelectedAnswer(null)

            }}



            disabled={selectedAnswer === null}

            className='bg-emerald-400 mt-10 p-3 rounded-xl disabled:bg-emerald-200'

          >Next</button>

        </>

      ) :

        (

          <>

            <h1 className='font-xl text-black text-center font-semibold'>Quiz Finished 🥳</h1>

            <h3 className='text-green-500 font-lg text-center font-semibold mt-4'> Your Score: {score}/{questions.length}</h3>

            <div className='flex flex-col mt-4 '>



              <button

                onClick={() => {

                  setQuestionIndex(0)

                  setScore(0)

                  setSelectedAnswer(null)

                }}

                className='p-3 bg-blue-500 rounded-lg'

              >

                Play Again

              </button>

            </div>

          </>

        )}



    </div>

  )

}



export default App