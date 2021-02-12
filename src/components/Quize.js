import React, { useEffect, useState } from 'react'
import Answer from './Answer'
import Question from './Question'

const Quize = () => {
   const [Questions, setQuestion] = useState(null)
   console.log(Questions);
   useEffect(() => {
      const getApi = () => {
         if (!Questions) {
            fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple').then(res => res.json()).then((result) => {
               setQuestion(result.results)
            })
         }
      }
      getApi();

   }, [Questions]);
   const ansers = [2, 4, 5, 7]
   const result = ansers.map(answer => <Answer answer={answer} />)
   return (
      <div>
         <div className="card-body">
            <Question />
            <div className="card-text">
               <div className="btn-group btn-group-vertical toggle " data-toggle='button'>
                  {result.sort(() => Math.random() - 0.5)}
               </div>
            </div>
         </div>

      </div>
   )
}

export default Quize
