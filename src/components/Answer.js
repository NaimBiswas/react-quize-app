import React, { Fragment } from 'react'

const Answer = ({ answer, onAnswer, InPutDisable }) => {
   return (
      <Fragment>
         <label className='btn btn-lg btn-secondary mt-2 mr-1 '>
            <input disabled={InPutDisable} type="radio" name='option' className='mr-3' onClick={() => onAnswer(answer)} />
            <span dangerouslySetInnerHTML={{ __html: answer }} ></span>
         </label>
      </Fragment>
   )
}

export default Answer
