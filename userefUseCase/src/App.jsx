//import { useState } from "react";

import { useRef, useState } from "react";

// function App(){

//   // State to store the count value (this affects UI, so state is correct)
//   const [currentCount, setCurrentCount] = useState(0);

//   // We should NOT use a normal variable like this:
//   // let timer = 0;
//   // Reason:
//   // - It will reset on every re-render
//   // - We will lose the reference to the interval ID

//   // Using state to store timer ID (works, but not optimal)
//   const [timer, setTimer] = useState(0);

//   function StartClock(){
//     let val = setInterval(function(){
//       setCurrentCount(currentCount => currentCount + 1);
//     }, 1000);

//     // This causes an EXTRA re-render
//     // because we are updating state (timer)
//     // even though UI does NOT depend on it
//     setTimer(val);
//   }

//   function StopClock(){

//     // Stops the interval using stored ID
//     clearInterval(timer);
//   }

//   return (
//     <div>
//       {currentCount}
//       <br />
//       <button onClick={StartClock}>Start</button>

//       
//       <button onClick={StopClock}>Stop</button>
//     </div>
//   );
// }

// export default App;

function App(){
   const [currCount,setCurrCount] = useState(0);
   const timerRef = useRef();
   function StartClock(){
    timerRef.current = setInterval(function(){
      setCurrCount(currCount => currCount + 1);
    },2000);
   } 

   function StopClock(){
    clearInterval(timerRef.current);
   }

  return( 
  <div>
  {currCount}
  <br />
  <button onClick={StartClock}>Start</button>
  <button onClick={StopClock}>Stop</button>
  </div>
  );
}

export default App;


