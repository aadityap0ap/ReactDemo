import { useEffect, useState } from "react";
import { useFtech } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounce";



function App(){
  // const [currentPost,SetCurrentPost ] = useState(1);
  // const { finalData ,loading } = useFtech("https://jsonplaceholder.typicode.com/posts/1" + currentPost);
  
  // if(loading){
  //   return <div>
  //     Loading......
  //   </div>
  // }

  // return (
  //   <div>
  //     <button onClick={() => SetCurrentPost(1)}>1</button>
  //     <button onClick={() => SetCurrentPost(2)}>2</button>
  //     <button onClick={() => SetCurrentPost(3)}>3</button>
  //     {JSON.stringify(finalData)};
  //   </div>
  // )

  // const [state,setState] = useState(0);
  // const prev = usePrev(state);

  // return (
  //   <div>
  //     <p>{state}</p>
  //     <button
  //     onClick={()=>{
  //       setState((curr) => curr + 1)
  //     }}
  //     >click me</button>
  //     <p>The prev state was{prev}</p>
  //   </div>
  // )

  //useDebounce
  function sendDataToBackEnd(){
    fetch("api.amazon.com/search");
  }

  const debouncedFn = useDebounce(sendDataToBackEnd);

  return (
    <div>
      <input type="text" onChange={debouncedFn}></input>
    </div>
  )
}
export default App;