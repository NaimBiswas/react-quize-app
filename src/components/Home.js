import React from 'react'
import Quize from './Quize'

const Home = () => {
   return (
      <div>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="card bg-dark col-lg-12" >
                     <div className="card-body">
                        <h2 className="card-title">Hellow world</h2>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">
                           <Quize></Quize>
                        </p>

                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
