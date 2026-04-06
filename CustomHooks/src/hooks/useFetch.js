import { useEffect, useState } from "react";



export function useFtech(url){
    const [finalData,setFinalDate] = useState({});

    async function getDetails() {
       const response = await  fetch(url);
       const json = await response.json();
       setFinalDate(json);
    }

    useEffect(() => {
        getDetails();
    },[])

    return{
        finalData
    }
}
