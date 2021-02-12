import React from 'react'

const Question = ({ question }) => {
   return (
      <div>
         <h4 className='card-text bg-danger pb-2 pt-2 pl-2 pr-2 '><span dangerouslySetInnerHTML={{ __html: question }}></span></h4>
      </div>
   )
}

export default Question
