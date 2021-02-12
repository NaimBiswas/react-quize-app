import React, { Fragment } from 'react'

const Answer = ({ answer }) => {
   return (
      <Fragment>
         <label htmlFor="1" className='btn btn-lg btn-secondary mt-2 mr-1 '>
            <input type="radio" name='option' id='1' className='mr-3' />
            {answer}
         </label>
      </Fragment>
   )
}

export default Answer
