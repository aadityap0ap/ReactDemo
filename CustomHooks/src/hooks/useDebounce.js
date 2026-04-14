import { useRef } from "react";

export function useDebounce(originalFn){
    const currentClock = useRef();

    const fn = ()=>{
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalFn,500);
    }

    return fn;
}