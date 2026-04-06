import { useEffect, useState } from "react";
import { useFtech } from "./hooks/useFetch";

function App(){
  const [currentPost,SetCurrentPost ] = useState(1);
  const { finalData ,loading } = useFtech("https://jsonplaceholder.typicode.com/posts/1" + currentPost);
  
  if(loading){
    return <div>
      Loading......
    </div>
  }

  return (
    <div>
      <button onClick={() => SetCurrentPost(1)}>1</button>
      <button onClick={() => SetCurrentPost(2)}>2</button>
      <button onClick={() => SetCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)};
    </div>
  )
}
export default App;