import { tokenContext } from './../shared/Context/context';
import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'

interface IUserData{
    name?: string,
    userIcon?: string
}

export function useUserData () {
    const [data, setData] = useState<IUserData>({})
    const token = useContext(tokenContext)

    useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: {Authorization: `bearer ${token}`}
        })
        .then((response) => {
        const userData = response.data
        setData({name: userData.name, userIcon: userData.icon_img})
        })
        .catch(console.log)
    }, [token])
    return [data]
}