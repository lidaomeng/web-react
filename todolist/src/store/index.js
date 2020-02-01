import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducer";
/*
redux-saga
 */
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleWare)
);

/*
启用saga中间件
 */
sagaMiddleWare.run(mySaga);

export default store;
