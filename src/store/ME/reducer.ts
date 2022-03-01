import { MeRequestAction, MeRequestFailAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_FAILURE, ME_REQUEST_SUCCESS } from './actions';
import { Reducer } from 'react';
import {IUserData} from '../../hooks/useUserData'
export type MeState = {
    loading: boolean,
    error: string,
    data: IUserData
}
type MeActions = MeRequestAction | 
MeRequestSuccessAction | 
MeRequestFailAction

export const meReducer: Reducer<MeState, MeActions> = (state, action) => {
    switch(action.type) {
        case ME_REQUEST:
            return {
                ...state, 
                loading: true
            }
        case ME_REQUEST_FAILURE:
            return {
                ...state, 
                error: action.error,
                loading: false
            }
        case ME_REQUEST_SUCCESS :
            return {
                ...state,
                data: action.data,
                loading: false
            }
        default: return state
    }
}