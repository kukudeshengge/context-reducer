import {createContext} from 'react';

export const initialState = {
    //列表数据
    list: [...Array.from({length: 3}).keys()]
};

const actionFunc = {
    //增加一项
    add(state, {value, callback}) {
        //判断如果无内容给提示并return
        if (value.trim() === '') {
            alert('请输入内容')
            return;
        }
        //push一条
        state.list.push(value);
        //添加成功的回调函数
        callback();
    },
    //删除某一项
    del(state, id) {
        state.list = state.list.filter(item => item !== id);
    }
}


export const reducer = (state, {type, payload}) => {
    //浅拷贝数据
    const newState = {...state};
    //actionFunc对有应方法才去执行对应方法
    actionFunc[type] && actionFunc[type](newState, payload);
    return newState;
};

export const StoreContext = createContext();
