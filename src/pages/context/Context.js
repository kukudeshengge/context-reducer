import React, {useState, createContext, useContext} from 'react';

const TestContext = createContext({});

//页面
const Context = () => {
    const [count, setCount] = useState(0);
    const [now, setNow] = useState(Date.now());

    return (
        <div>
            <h1>context</h1>
            <TestContext.Provider value={{count, setCount, now, setNow}}>
                <ParentComOne/>
                <ParentComTwo/>
            </TestContext.Provider>
        </div>
    );
};


//父组件1
const ParentComOne = () => {
    const {now} = useContext(TestContext);
    return <div>
        <h3>ParentComOne----{now}</h3>
        <SonCom/>
    </div>
}

//父组件2
const ParentComTwo = () => {
    const {setNow} = useContext(TestContext);
    return <div onClick={() => setNow(Date.now())}>
        <h3>ParentComTwo</h3>
    </div>
}

//子组件
const SonCom = () => {
    const {count, setCount} = useContext(TestContext);
    return <div onClick={() => setCount(count + 1)}>
        <h3>SonCom---{count}</h3>
    </div>
}


export default Context;
