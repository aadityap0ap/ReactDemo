import { useEffect, useState } from "react";
import { usePostTitle } from "./hooks/useFetch";

function App(){
 const postTitle = usePostTitle();
 //a very good question ?
 //why are we creating hooks why cant we create a function of same name
 //the ans is we cant create a function which uses hooks underthe hood and we are using usestate and useeffect hooks in usePostTitle hook
 
  return (
    <div>
      {postTitle}
    </div>
  )
}
export default App;