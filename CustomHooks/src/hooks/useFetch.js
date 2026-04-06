import { useEffect, useState } from "react";



export function useFtech(url){
    const [finalData,setFinalDate] = useState({});
    const [loading,setLoading] = useState(true);

    async function getDetails() {
        setLoading(true);
       const response = await  fetch(url);
       const json = await response.json();
       setFinalDate(json);
       setLoading(false);
    }

    useEffect(() => {
        getDetails(); 
    },[url])

    //we are doing so inorder to maintain consistency...this will ensure that if anything changes than it will automatically uodate after 10 sec..
    //we are making a backend call after every 10 sec
    useEffect(() => {
    setInterval(getDetails, 10 * 1000);
}, []);

    return{
        finalData,
        loading
    }
}
