import React, { Component } from "react";
import {connect} from 'react-redux';

class TodoList extends Component{
    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <li
                                    key={index} onClick={() => {this.props.handleItemDelete(index)}}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

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
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_list_item'
            };
            dispatch(action);
        },
        handleItemDelete(index) {
            const action = {
                type: 'delete_list_item',
                index
            };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
