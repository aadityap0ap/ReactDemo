import { createContext, useContext, useState } from "react"

const BulbContext = createContext();

function App(){
  const [bulbOn,setBulbOn] = useState(true);

  return <div>
    <BulbContext.Provider value={{
      bulbOn : bulbOn,
      setBulbOn : setBulbOn
    }}>
    <LightBulb />
    </BulbContext.Provider>
   
  </div>
}

function LightBulb(){
  
  //bulbOn is a prop in the Bulb state componenet
  //bulbOn,setBulbOn are props to the toggle State component
  return <div>
    <BulbState />
    <ToggleBulbState/>
  </div>
}

function BulbState(){
  const {bulbOn} = useContext(BulbContext);
  return <div>
    {bulbOn ? "Bulb ON" : "Bulb Off"}
  </div>
}

function ToggleBulbState(){
  const {bulbOn,setBulbOn} = useContext(BulbContext);
  function changeState(){
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={changeState}>Toggle Bulb</button>
  </div>
}
export default App;