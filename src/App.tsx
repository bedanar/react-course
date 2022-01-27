import React, { useState } from "react";
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
// const LIST = [
//     {value: 'some'},
//     {value: 'food'},
//     {value: 'function'}
// ].map(generateId)


function AppComponent() {
    // const [isVisible, setIsVisible] = React.useState(false);
    // const [title, setTitle] = React.useState('')
    // const [isVisible] = useIsMounted()

    // const handleItemClick = (id: string) => {
    //     setList(list.filter((item) => item.id !== id))
    // }

    // const handleAdd = () => {
    //     setList(list.concat(generateId({text: generateRandomString()})))
    // }

    // const [list, setList] = useState(LIST)
    return(
        <Layout>
           <Header />
           <Content>
               <CardsList />
               {/* <button onClick={() => setIsVisible(!isVisible)}>Change me!</button> */}
               {/* <input type="text" onChange={getValue(setTitle)} />
               {isVisible && <MyHooks title={title} id="11" />}
               <button onClick={handleAdd}>add</button>
               <GenericList list={list.map(merge({onClick: handleItemClick}))}/> */}
               <Dropdown onOpen={() => console.log('opened')} onClose={() => console.log('closed')} isOpen={false} button={<button>Test</button>}>
                    <ul>
                        <li>i</li>
                    </ul>
               </Dropdown>
           </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent />)