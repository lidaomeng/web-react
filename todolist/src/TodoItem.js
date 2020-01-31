import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    /*
    判断是否需要更新子组件
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.item !== this.props.item;
    }

    render() {
        const { item, test } = this.props;
        return (
            <div onClick={this.handleClick}>
                {test} - {item}
            </div>
        )
    }

    handleClick() {
        const { handleItemDelete, index } = this.props;
        handleItemDelete(index);
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    index: PropTypes.number,
    handleItemDelete: PropTypes.func
};

TodoItem.defaultProps = {
    test: '$'
};

export default TodoItem;
