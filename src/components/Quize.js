import React, { useEffect, useState } from 'react'
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
   if (!Questions) return <p className='text-light text-muted'>Loading...</p>

   return (
      <div>
         <div className="card-body">
            <Question question={Questions[Counts].question} />
            <div className="card-text">
               <div className="btn-group btn-group-vertical toggle " data-toggle='button'>

               </div>
            </div>
         </div>

      </div>
   )
}

export default Quize
