import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';

const initialState = {count: 0, now: Date.now()};

const reducer = (state, action) => {
    switch (action.type) {
        case 'now':
            state.now = Date.now();
            return {...state};
        case 'add':
            state.count++;
            return {...state};
        default :
            throw Error();
    }
};

const Reducer = () => {
    const [state, dispath] = useReducer(reducer,initialState)
    return (
        <div>
            <h1>reducer</h1>
            <Link to={'/test'}>去test页面</Link>
            <h3 onClick={() => dispath({type: 'now'})}>{state.now}</h3>
            <h3 onClick={() => dispath({type: 'add'})}>{state.count}</h3>
        </div>
    );
};

export default Reducer;
