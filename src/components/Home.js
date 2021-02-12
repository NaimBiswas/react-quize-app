import React from 'react'
import Quize from './Quize'

const Home = () => {
   return (
      <div>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="card bg-dark">
                     <div className="card-header">
                        <h3>Welcome To Our React Quize</h3>
                     </div>
                     <Quize></Quize>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
