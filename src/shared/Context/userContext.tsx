import React, { createContext } from "react";
import {useUserData}from '../../hooks/useUserData'

export interface IUserContextData{
    name?: string,
    userIcon?: string
}
export const userContext = createContext<IUserContextData>({})

export function UserContextProvier({children}: {children: React.ReactNode}){
    const [data] = useUserData()
    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}