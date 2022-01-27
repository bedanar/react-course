import React from "react";

function pickFromSytheticKey <T extends HTMLElement> () {
    return <K extends keyof T> (key: K) => 
        <E extends ((t: T[K]) => void)>(fn: E) => 
            (e: React.SyntheticEvent <T>) => fn(e.currentTarget[key])
        
}

export const getValue = pickFromSytheticKey<HTMLInputElement>()('value')
export const getChecked = pickFromSytheticKey<HTMLInputElement>()('checked')