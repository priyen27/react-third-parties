import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ handleSubmit, onSubmit, register }) => {
    return (
       <div className="container">
           <div className="main-form">
           <form onSubmit={handleSubmit(onSubmit)}>
                <input name="email" type="text" placeholder="Enter email" ref={register} />
                <input name="password" type="password" placeholder="Enter Password" ref={register}/>
                <button type="submit">
                    Login
                    </button>
                    <Link to="/app/signup" className="link">
                        New User?
                    </Link>
           </form>
           </div>
       </div>
    )
}

export default Login;