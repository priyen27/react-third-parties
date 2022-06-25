import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Login';
import * as actions from '../../redux/actions';
import { showNotification } from '../../../../shared/Notifications';

import './login.scss';

const LoginContainer = ({ signIn }) => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (values) => {
        console.log(">>>values", values);
        signIn(values.email, values.password)
        .then((result) => {
            if (result) {
                showNotification('Login Successfully', 'success', 5000);
                reset();
            }
        })
        .catch(() => showNotification('Enter valid Credentials', 'error'));
    }
    return (
        <Login
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
         />
    )
}

const mapStateToProps = (state) => ({
    // todoList: state.todo.todoList
});

const mapDispatchToProps = (dispatch) => ({
    signIn: (email, password) => dispatch(actions.signIn(email, password)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(LoginContainer));