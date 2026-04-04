import { useState } from "react"

function App(){
  return <div>
    <LightBulb />
  </div>
}

function LightBulb(){
  const [bulbOn,setBulbOn] = useState(true);
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