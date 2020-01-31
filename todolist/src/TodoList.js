import React, { Component} from "react";
import 'antd/dist/antd.css';
import store from "./store";
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);

        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        /*
        axios获取后台接口数据
         */
        axios.get('/api/todolist').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        })
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    /*
    监听store变化并实时同步数据
     */
    handleStoreChange() {
        this.setState(store.getState());
    }
}

export default TodoList;
