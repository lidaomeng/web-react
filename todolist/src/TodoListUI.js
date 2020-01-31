import React from "react";
import { Input, Button, List } from 'antd';

/*
无状态组件不UI组件性能更好！
 */
const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder={'todo info'}
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type={"primary"} onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={props.list}
                /*
                此处是难点，不好理解
                 */
                renderItem={(item,index) => (
                    <List.Item
                        onClick={ (index) => {props.handleItemDelete(index)} }>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
};

export default TodoListUI;
