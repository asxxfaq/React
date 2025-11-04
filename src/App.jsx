import './App.css'
// import Basic from './Basic'
// import CallingFunction from './embeding-expression/CallingFunction'
// import Conditional from './embeding-expression/conditional'
// import Welcome from './embeding-expression/Welcome'

// function App() {

//   return (
//     // <>
//     // {/* embeding expression */}
//     // {/* <Basic/> */}<Welcome/>
//     // </>
//     // <CallingFunction/>
//    <Conditional/>
//   )
// }


// -------------ClassComponents---------

import React, { Component } from 'react'
import BasicClass from './ClassComponents/BasicClass'
import Counter from './ClassComponents/Counter'
import Mounting from './ClassComponents/LifeCycleMethods/Mounting'
import Update from './ClassComponents/LifeCycleMethods/Update'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <BasicClass/> */}
        {/* <Counter/> */}


      {/* -----Life Cycle Methods--------- */}

      {/* <Mounting/> */}
      <Update/>



      </div>
    )
  }
}


// export default App
