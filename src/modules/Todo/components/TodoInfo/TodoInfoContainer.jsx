import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import TodoInfo from './TodoInfo';
import * as actions from '../../redux/action';

const TodoInfoContainer = ({ getTodoData, todoList }) => {

    const [todo,setTodo] = React.useState('');

    const handleChange = (event) => {
        setTodo(event.target.value)
    };

    const submitForm = (event) => {
        getTodoData(todo);
        setTodo('');
        event.preventDefault();
    };

    return (
        <TodoInfo submitForm={submitForm} todo={todo} handleChange={handleChange} todoList={todoList} />
    )
}

TodoInfoContainer.propTypes = {
    getTodoData: PropTypes.func,
    todoList: PropTypes.instanceOf(Array),
};

TodoInfoContainer.defaultProps = {
    getTodoData: () => {},
    todoList: [],
};

const mapStateToProps = (state) => ({
    todoList: state.todo.todoList
});

const mapDispatchToProps = (dispatch) => ({
    getTodoData: (data) => dispatch(actions.getTodoData(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(TodoInfoContainer));
  