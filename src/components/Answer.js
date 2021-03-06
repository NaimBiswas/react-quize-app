import React, { Fragment } from 'react'
import "../App.css"
const Answer = ({ answer, onAnswer }) => {
   return (
      <Fragment>
         <label className='btn btn-lg btn-secondary mt-2 mr-1 '>
            <input type='radio' name='option' className='mr-3' onClick={() => onAnswer(answer)} />
            <span dangerouslySetInnerHTML={{ __html: answer }} ></span>
         </label>
      </Fragment>
   )
}

export default Answer
