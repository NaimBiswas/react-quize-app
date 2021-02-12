import React, { Fragment, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import Answer from './Answer'
import Question from './Question'

const Quize = () => {
   const [Questions, setQuestion] = useState(null)
   const [Counts, setCout] = useState(0)
   console.log(Questions);
   useEffect(() => {
      const getApi = () => {

         fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple').then(res => res.json()).then((result) => {
            setQuestion(result.results)
         })

      }
      if (!Questions) {
         getApi();
      }

   }, [Questions, Counts]);
   if (!Questions) return (
      <Fragment>
         <div className="text-center pt-3 pb-3">

            <Spinner animation="border" role="status" variant='info' >

            </Spinner>
         </div>
      </Fragment>
   )
   const answers = [...Questions[Counts].incorrect_answers, Questions[Counts].correct_answer]
   console.log(answers);
   console.log(Counts);
   return (
      <div>
         <div className="card-body">
            <Question question={Questions[Counts].question} />
            <div className="card-text">
               <div className="btn-group btn-group-vertical toggle w-100 " data-toggle='button'>
                  {
                     answers.map((answer, index) => <Answer key={index} answer={answer}></Answer>)
                  }
               </div>
            </div>
         </div>
         <div className="card-footer pb-5">
            <button onClick={() => setCout(Counts + 1)} className='btn btn-secondary float-right'>Next</button>
         </div>

      </div>
   )
}

export default Quize
