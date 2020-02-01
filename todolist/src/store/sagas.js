import {put, takeEvery} from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators'
import axios from 'axios';

/*
Generator核心异步处理函数
 */
function* getInitList() {
    try{
        const res = yield axios.get('/api/todolist');
        const action = initListAction(res.data);
        yield put(action);
    }catch (e) {
        console.log('[getInitList] /api/todolist 请求网络失败！')
    }
}

/*
监听处理
 */
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;