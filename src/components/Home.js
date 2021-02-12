import React, { useState } from 'react'
import Quize from './Quize'

const Home = () => {
   const [finish, setFinish] = useState(false)
   if (finish) {
      return <div className="">Results</div>
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
                     <Quize onFinish={(finish) => setFinish(finish)}></Quize>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
