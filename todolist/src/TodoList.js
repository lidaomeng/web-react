import React, {Component, Fragment} from "react";
import TodoItem from './TodoItem';
import axios from 'axios';

import './style.css';

/*
    纸上得来终觉浅，绝知此事要躬行。
 */
class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                {/*页面渲染*/}
                <div>
                    <label htmlFor="tips">请输入内容：</label>
                    <input
                        id={'tips'}
                        className={'input'}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(fuck) => {this.fuck = fuck}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    item={item}
                    index={index}
                    handleItemDelete={this.handleItemDelete}
                />
            )
        });
    }

    handleInputChange(e) {
        // const value = e.target.value;
        /*
        ref可以直接操作Dom
         */
        const value = this.fuck.value;
        // 对象
        this.setState(() => (
            {
                inputValue: value
            }
        ));
    }

    handleBtnClick() {
        this.setState((prevState) => (
            {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        ), () => {
            /*
            应该在回调函数中做统计
             */
            console.log(this.ul.querySelectorAll('div').length)
        });
        // console.log(this.ul.querySelectorAll('div').length)
    }

    // 函数
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {
                list
            }
        });
    }

    /*
    在此处获取axios数据并展示
     */
    componentDidMount() {
        axios.get('/api/todolist')
            .then((res) => {
                this.setState(() => ({
                    list: [...res.data]
                }));
            })
            .catch(() => {console.log('axios fail!')});
    }
}

export default TodoList;
