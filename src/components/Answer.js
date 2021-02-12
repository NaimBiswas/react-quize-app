import React, { Fragment } from 'react'

const Answer = ({ answer }) => {
   return (
      <Fragment>
         <label className='btn btn-lg btn-secondary mt-2 mr-1 '>
            <input type="radio" name='option' className='mr-3' />
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
         </label>
      </Fragment>
   )
}

export default Answer
