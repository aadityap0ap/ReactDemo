import { useState } from "react"

function App(){
  const [bulbOn,setBulbOn] = useState(true);

  return <div>
    <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function LightBulb({bulbOn,setBulbOn}){
  
  //bulbOn is a prop in the Bulb state componenet
  //bulbOn,setBulbOn are props to the toggle State component
  return <div>
    <BulbState bulbOn = {bulbOn}/>
    <ToggleBulbState bulbOn={bulbOn} 
    setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}){
  return <div>
    {bulbOn ? "Bulb ON" : "Bulb Off"}
  </div>
}

function ToggleBulbState({bulbOn,setBulbOn}){
  function changeState(){
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={changeState}>Toggle Bulb</button>
  </div>
}
export default App;