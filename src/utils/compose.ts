// import React from "react";
// import { getValue } from "./react/pickFromSyntheticEvents";
// import { stopPropagation } from "./react/stopPropagation";
// import { preventDefault } from "./react/preventDefault";

// function Input({value, onChange} : any) {
//     return (
//         <input value={value} onChange = {compose(onChange, getValue, stopPropagation, preventDefault)}/>
//     )
// }

// function compose <U> (...fns: Function[]) {
//     return <E,>(initialValue: any): U => 
//     fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
// }
// function pipe<U> (...fns: Function[]) {
//     return <E>(initialValue: any): U => 
//     fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
// }
// function pick <K extends string>(prop:K) {
//     return <O extends Record<K, any>>(obj: O) => obj[prop]
// }
// function isEqual <T>(left: T) {
//     return <E extends T>(right: E) => left === right
// }
// function cond(b: boolean) {
//     return !b
// }
// const createFilteredBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond)
// pick('value')({value: 1})
// const filterWithId = createFilteredBy('id')(22)
// const comments = [{id: 22, text: 'fuck'}, {id: 44, text: 'hello'}]
// const filteredComments = (id: number) => pipe(pick('id'), isEqual(id), cond)