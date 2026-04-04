import { createContext, useContext, useState } from "react"

const BulbContext = createContext();
function BulbProvider({children}){
  //in this case the <lightBulb /> is the children
   const [bulbOn,setBulbOn] = useState(true);
   return <BulbContext.Provider value={{
      bulbOn : bulbOn,
      setBulbOn : setBulbOn
    }}>
      {children}
    </BulbContext.Provider>
}

function App(){
  return <div>
    <BulbProvider>
      <LightBulb />
    </BulbProvider>
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