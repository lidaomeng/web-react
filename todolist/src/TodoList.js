import React from "react";
import {connect} from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

/*
1.无状态组件 -> 2.UI组件 -> 3.容器组件
 */
const TodoList = (props) => {
    const { inputValue, list, changeInputValue, handleClick, handleItemDelete } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li
                                key={index} onClick={() => {handleItemDelete(index)}}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

/*
属性
 */
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

/*
方法
 */
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = getAddItemAction();
            dispatch(action);
        },
        handleItemDelete(index) {
            const action = getDeleteItemAction(index);
            dispatch(action);
        }
    }
};

/*
导出容器组件
 */
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
