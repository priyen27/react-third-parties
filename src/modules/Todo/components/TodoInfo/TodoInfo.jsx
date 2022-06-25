import React from 'react';
import PropTypes from 'prop-types';

const TodoInfo = ({ submitForm, handleChange, todoList, todo }) => {
    return (
        <>
        <form >
            <input name="todo" type="text" value={todo}  onChange={handleChange}  />
            <button type="submit" onClick={submitForm}>
                Click Me
            </button>
        </form>
        <span>Todo List</span>
        {todoList.map((item) => (
        <div>
            {item}
        </div>
        ))}
        </>
    )
}

TodoInfo.propTypes = {
    submitForm: PropTypes.func,
    handleChange: PropTypes.func,
    todoList: PropTypes.instanceOf(Array),
    todo: PropTypes.string,
};

TodoInfo.defaultProps = {
    submitForm: () => {}, 
    handleChange: () => {},
    todoList: [],
    todo: '',
};


export default TodoInfo;
