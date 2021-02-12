
import React, { Fragment, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Answer from './Answer'
import Question from './Question'

const Quize = () => {
   const [Questions, setQuestion] = useState(null)
   const [Counts, setCout] = useState(0)
   const [Scores, setScore] = useState(0)

   console.log(Questions);
   useEffect(() => {
      const getApi = () => {

         fetch(`https://opentdb.com/api.php?amount=5&category=${Math.floor(Math.random() * (32 - 10 + 1)) + 10}&difficulty=medium&type=multiple`)
            .then(res => res.json()).then((result) => {
               setQuestion(result.results)
            }).catch((error) => {
               console.log(error);
            })

      }
      if (!Questions) {
         getApi();
      }

   }, [Questions, Counts, Scores]);
   if (!Questions) return (
      <Fragment>
         <div className="text-center pt-3 pb-3">

            <Spinner animation="border" role="status" variant='info' >

            </Spinner>
         </div>
      </Fragment>
   )
   const answers = [...Questions[Counts].incorrect_answers, Questions[Counts].correct_answer]
   const results = answers.sort(() => Math.random() - 0.5)
   const CheckAnswer = (answer) => {
      if (answer === Questions[Counts].correct_answer) {
         setScore(Scores + 1)
      } else {
         setScore(Scores - .5)
      }
      if (Counts < Questions.length - 1) {
         setCout(Counts + 1);
      } else {

      }

   }

   console.log(Scores)

   return (
      <div>
         <div className="card-body">
            <Question question={Questions[Counts].question} />
            <div className="card-text">
               <h4>Category- {Questions[Counts].category}</h4>
               <div className="btn-group btn-group-vertical toggle w-100 " data-toggle='button'>
                  {
                     results.map((answer, index) => <Answer InPutDisable={Counts === Questions.length - 1} key={index} answer={answer} onAnswer={(answer) => CheckAnswer(answer)}></Answer>)
                  }

               </div>
            </div>
         </div>
         <div className="card-footer pb-5">
            <button disabled={Counts === Questions.length - 1} onClick={() => setCout(Counts + 1) & setScore(Scores - .5)} className='btn btn-secondary float-right'>Next</button>
            {/* <button onClick={(max, min) => (Math.floor(Math.random() * (32 - 10 + 1)) + 10)}>Random</button> */}
         </div>

      </div >
   )
}



export default Quize
