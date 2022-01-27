import React from "react";

export function MyHooks({title, id}: {title: string, id?: string}) {
    const items = 1000
    const multiplier = 5
    const result = React.useMemo(
        () => calculate(items, multiplier), [items, multiplier]
    )
    // React.useEffect(() => {
    //     console.log('componentDidMount')
    //     console.log('componentWillUpdate')
    // })
    // React.useEffect(() => {
    //     console.log('componentDidMount')
    //     return () => {
    //         console.log('componentWillUnmount')
    //     }
    // }, [])
    // React.useEffect(() => {
    //     console.log('will recieve props', title)
    // }, [title])
    // useeffect наблюдает за тайтл
    const [isMounted] = useIsMounted()

    React.useEffect(() => {
        console.log('changed', isMounted)
    }, [isMounted])
    return (
        <div style={{width: window.innerWidth}}>{title} {id} {result}</div>
    )
}

export function useIsMounted () {
    const [isMounted, setIsMounted] = React.useState(false)
    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return [isMounted]
}
function calculate(items: number, multiplier: number) {
    return new Array(items).fill(1).reduce((a, v) => a* multiplier)
}
