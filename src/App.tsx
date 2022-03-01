import React, { useEffect, useState } from "react";
import {hot} from 'react-hot-loader/root'
import './main.global.css'
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import {CardsList} from './shared/CardsList'
import { MyHooks } from "../hooks";
import {getValue} from './utils/react/pickFromSyntheticEvents'
import {useIsMounted} from '../hooks'
import {GenericList} from './shared/GenericList'
import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";
import {merge} from "./utils/JS/merge"
import { Dropdown } from "./shared/Dropdown";
import { useToken } from "./hooks/useToken";
import {tokenContext} from './shared/Context/context'
import {userContext, UserContextProvier} from './shared/Context/userContext'
import { commentContext } from "./shared/Context/commentContext";
import { AnyAction, applyMiddleware, createStore,Action,  ActionCreator, Reducer, Middleware } from "redux";
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { rootReducer, RootState, setToken } from "./store/store";
import thunk, { ThunkAction } from 'redux-thunk'

const timeout = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch({type: 'ACTION_START'})
}
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))
function AppComponent() {
    const  [token] = useToken() 
    const [commentValue, setCommentValue] = useState('')
    const CommentProvider = commentContext.Provider
    const TokenProvider = tokenContext.Provider
    useEffect(() => {
        const token = localStorage.getItem('token') || window.__token__
        store.dispatch(setToken(token))
        if (token){
            localStorage.setItem('token', token)
        }
    })
    return(
        <Provider store={store}>
                <CommentProvider value={{
                    value: commentValue,
                    onChange: setCommentValue
                }}>
                    <UserContextProvier>
                        <Layout>
                            <Header />
                            <Content>
                                <CardsList />
                                <Dropdown onOpen={() => console.log('opened')} 
                                        onClose={() => console.log('closed')} 
                                        isOpen={false} 
                                        button={<button>Test</button>}>
                                        <ul>
                                            <li>i</li>
                                        </ul>
                                </Dropdown>
                            </Content>
                        </Layout>
                    </UserContextProvier>
                </CommentProvider>
        </Provider>
    )
}

export const App = hot(() => <AppComponent />)