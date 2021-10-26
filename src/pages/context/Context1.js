import React, {useState, useImperativeHandle, useRef, forwardRef} from 'react';

//页面
const Context1 = () => {
    const [count, setCount] = useState(0);
    const ref = useRef();  //定义引用用来获取ParentComOne向外暴露的方法
    return (
        <div>
            <h1>context</h1>
            {/*传递count和setCount*/}
            <ParentComOne ref={ref} count={count} setCount={setCount}/>
            {/*获取到setNow方法后传递给ParentComTwo组件*/}
            <ParentComTwo setNow={ref.current?.setNow} />
        </div>
    );
};


//父组件1
const ParentComOne = forwardRef((props, ref) => {
    const [now, setNow] = useState(Date.now());
    //使用useImperativeHandle将setNow方法暴露
    useImperativeHandle(ref, () => {
        return {
            setNow
        }
    })

    return <div>
        <h3>ParentComOne----{now}</h3>
        {/*传递count和setCount*/}
        <SonCom {...props}/>
    </div>
})

//父组件2
const ParentComTwo = ({setNow}) => {
    return <div onClick={() => setNow(Date.now())}>
        <h3>ParentComTwo</h3>
    </div>
}

//子组件
const SonCom = (props) => {
    const {count, setCount} = props;
    // 调用组件组件传递的值和方法去更改视图
    return <div onClick={() => setCount(count + 1)}>
        <h3>SonCom---{count}</h3>
    </div>
}


export default Context1;
