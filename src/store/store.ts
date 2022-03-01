import { MeState, meReducer } from './ME/reducer';
import { ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_FAILURE, MeRequestAction, MeRequestSuccessAction, MeRequestFailAction } from './ME/actions';
import { ActionCreator, Reducer,  } from "redux";

const UPDATE_COMMENT = 'UPDATE_COMMENT'
const SET_TOKEN = 'SET_TOKEN'

export  type RootState = {
    commentState: string,
    token: string,
    me: MeState
}
const initialState: RootState = {
     commentState: 'Hello',
     token: '',
     me: {
         loading: false,
         error: '',
         data: {}
     }
}
type UpdateCommentAC = {
    type: typeof UPDATE_COMMENT,
    text: string
}
export const updateComment: ActionCreator<UpdateCommentAC>= (text: string) => ({
    type: 'UPDATE_COMMENT',
    text
})
type SetTokenAC = {
    type: typeof SET_TOKEN,
    token: string
}
export const setToken: ActionCreator<SetTokenAC>= (token: string) => ({
    type: 'SET_TOKEN',
    token
})
type Action = UpdateCommentAC | 
            SetTokenAC | 
            MeRequestAction | 
            MeRequestSuccessAction | 
            MeRequestFailAction
export const rootReducer: Reducer<RootState, Action> = (state= initialState, action: any) => {
    switch (action.type) {
        case 'UPDATE_COMMENT':
            return {
                ...state, 
                commentState: action.text
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_FAILURE:
            return {
                ...state, 
                me: meReducer(state.me, action)
            }
        default:
            return state
    }
}