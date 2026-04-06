import { useEffect, useState } from "react";
import { useFtech } from "./hooks/useFetch";

function App(){
 const { finalData } = useFtech("https://jsonplaceholder.typicode.com/posts/1");
  return (
    <div>
      {JSON.stringify(finalData)};
    </div>
  )
}
export default App;