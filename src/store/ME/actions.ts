import { ThunkAction } from 'redux-thunk';
import { ActionCreator, Action } from "redux"
import { meReducer } from "./reducer"
import { RootState } from '../store';
import axios from 'axios'

export const ME_REQUEST = 'ME_REQUEST'
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS'
export const ME_REQUEST_FAILURE = 'ME_REQUEST_FAILURE'

interface IUserData{
    name?: string,
    userIcon?: string
}

export type MeRequestAction = {
    type: typeof ME_REQUEST,
}
export type MeRequestSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS,
    data: IUserData
}
export type MeRequestFailAction = {
    type: typeof ME_REQUEST_FAILURE,
    error: string
}

export const meRequestAC: ActionCreator<MeRequestAction> = (data: IUserData) => ({
    type: ME_REQUEST,
    data
})
export const meRequestFailureAC: ActionCreator<MeRequestFailAction> = (error: string) => ({
    type: ME_REQUEST_FAILURE,
    error
})
export const meRequestSuccessAC: ActionCreator<MeRequestSuccessAction> = (data) => ({
    type: ME_REQUEST_SUCCESS,
    data
})
export const meRequestAsync  = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequestAC)
        axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: {Authorization: `bearer ${getState().token}`}
        })
        .then((response) => {
        const userData = response.data
        dispatch(meRequestSuccessAC({name: userData.name, userIcon: userData.icon_img}))
        })
        .catch((error) => {
            dispatch(meRequestFailureAC(String(error)))
        })
}