import React, {useContext, useRef} from 'react';
import {StoreContext} from '../../store';
import {Link} from 'react-router-dom';

const delStyles = {
    paddingLeft: 20,
    cursor: 'pointer'
}
const liStyles = {
    margin: '5px 0px'
}

const Test = () => {
    const {state: {list}, dispatch} = useContext(StoreContext);
    const inputRef = useRef();
    return (
        <div>
            <h1>test</h1>
            <Link to={'/reducer'}>去reducer页面</Link><br/>
            <input ref={inputRef} type="text"/>
            <button onClick={() => {
                dispatch({
                    type: 'add',
                    payload: {
                        value: inputRef.current?.value,
                        callback: () => {
                            inputRef.current.value = '';
                        }
                    }
                })
            }}>添加
            </button>
            <ul>
                {
                    list.map(item => {
                        return <li key={item} style={liStyles}>
                            <span>{item}</span>
                            <span
                                style={delStyles}
                                onClick={() => {
                                    dispatch({
                                        type: 'del',
                                        payload: item
                                    })
                                }
                                }>删除</span>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Test;
