import React from 'react'
import Answer from './Answer'
import Question from './Question'

const Quize = () => {
   return (
      <div>
         <div className="card-body">
            <Question />
            <div className="card-text">
               <div className="btn-group btn-group-vertical toggle w-100" data-toggle='button'>
                  <Answer />
               </div>
            </div>
         </div>

      </div>
   )
}

export default Quize
