import React from 'react'
const CallingFunction = () => {

    function Greeting(name){
        return `hellooo, ${name}`;    
    }
    function GetGreeting(){
        return <h2>{Greeting("Mufeeda")}</h2>
    }

  return (
    <div>
      <GetGreeting/>
    </div>
  )
}

export default CallingFunction
