import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import SignUp from './SignUp';
import { reset } from 'redux-form';
import { showNotification } from '../../../../shared/Notifications';

const SignUpContainer = ({ signUp }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        const userData = {
            name: values.name,
            email: values.email,
            password: values.password,
        }
        signUp(userData)
        .then((result) => {
            if (result) {
                showNotification('Sign up successfully', 'success', 5000);
                reset();
            }
        })
        .catch(() => showNotification('Something went Wrong', 'error'));
    }

    return (
        <SignUp
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
    signUp: (userData) => dispatch(actions.signUp(userData)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(SignUpContainer));