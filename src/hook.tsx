import { useState } from "react";

export function useLocalStorage(key:string, defaultValue:string){
    const getInitialValue = ()=> localStorage.getItem(key) ?? defaultValue
    const [ value, setValue ] = useState(getInitialValue)

    const setAndStoreValue = (newValue:string) =>{
        setValue(newValue)
        return localStorage.setItem(key, newValue)
    }

    return [ value, setAndStoreValue ] as any
}