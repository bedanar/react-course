import { useDispatch, useSelector } from 'react-redux';
import { tokenContext } from './../shared/Context/context';
import React, {useEffect, useState} from 'react'
import {RootState} from '../store/store'
import {meRequestAC, meRequestSuccessAC, meRequestFailureAC, meRequestAsync} from '../store/ME/actions'
export interface IUserData{
    name?: string,
    userIcon?: string
}

export function useUserData () {
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const loading = useSelector<RootState, boolean>(state => state.me.loading)
    const token = useSelector<RootState>(state => state.token)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!token) return;
        dispatch(meRequestAsync)
    }, [token])
    return {data, loading}
}