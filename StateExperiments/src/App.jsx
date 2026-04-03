function App(){
  return <div>
    <LightBulb />
  </div>
}

function LightBulb(){
  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState(){
  return <div>

  </div>
}

function ToggleBulbState(){
  return <div>
    <button>Toggle Bulb</button>
  </div>
}
export default App;