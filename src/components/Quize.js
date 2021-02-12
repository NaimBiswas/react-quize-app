import React from 'react'
import Answer from './Answer'
import Question from './Question'

const Quize = () => {
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
