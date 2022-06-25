import React from 'react'

const SignUp = ({ handleSubmit, onSubmit, register}) => {
    return (
        <div className="container">
           <div className="signup-form">
           <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" type="text" placeholder="Enter Name" ref={register} />
                <input name="email" type="text" placeholder="Enter email" ref={register} />
                <input name="password" type="password" placeholder="Enter Password" ref={register}/>
                <button type="submit">
                    Sign Up
                    </button>
           </form>
           </div>
       </div>
    )
}

export default SignUp;
