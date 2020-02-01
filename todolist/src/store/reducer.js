import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    /*
    input事件
     */
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    /*
    添加list-item事件
     */
    if (action.type === ADD_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    /*
    删除list-item事件
     */
    if (action.type === DELETE_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}