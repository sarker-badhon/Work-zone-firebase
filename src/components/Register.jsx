import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const Register = () => {

    const {createUser}=useContext(AuthContext)
    console.log(createUser);
const handlerlRegister =(event)=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);

    createUser(email,password)
    .then((result)=>{
        const logedUser = result.user
        console.log(logedUser);
        form.reset('')
    })
    .catch((error)=>{
        // const errorMessage=error.message
        // console.log(errorMessage);
    })
}



    return (
        <div>
            <Form onSubmit={handlerlRegister} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register Please</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register </button>
                            </div>

                        </div>
                        <p><small>
                            <Link className="label-text-alt link link-hover text-white" to="/login">Already have an Account</Link>
                        </small></p>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Register;