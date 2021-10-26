import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ContextPage from './pages/context/Context'
import ReducerPage from './pages/reducer/Reducer'
import Test from "./pages/test/Test";
//引入我们刚刚定义的state、reducer、context
import {StoreContext, initialState, reducer} from './store';
import {useReducer} from 'react';


function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <HashRouter>
            <Switch>
                {/*！！！将state和dispatch传递给context，这样它下面的所有组件都可以去使用！！！*/}
                <StoreContext.Provider value={{state, dispatch}}>
                    <Route path={'/context'}><ContextPage/></Route>
                    <Route path={'/reducer'}><ReducerPage/></Route>
                    <Route path={'/test'}><Test/></Route>
                </StoreContext.Provider>
            </Switch>
        </HashRouter>
    );
}

export default App;
