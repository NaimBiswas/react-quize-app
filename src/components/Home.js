import React, { useState } from 'react'
import Quize from './Quize'

const Home = () => {
   const [finish, setFinish] = useState(false)
   const [Results, setResults] = useState()
   var con = Results
   if (finish) {
      return <div className=""><h3>Results:- <span className={con <= 0 ? 'text-danger' : 'text-info'}>{Results}</span></h3></div >
   }
   return (
      <div>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="card bg-dark">
                     <div className="card-header">
                        <h3>Welcome To Our React Quize</h3>
                     </div>
                     <Quize onResults={(results) => setResults(results)} onFinish={(finish) => setFinish(finish)}></Quize>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
