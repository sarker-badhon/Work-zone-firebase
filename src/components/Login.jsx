import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { Form, Link } from 'react-router-dom';

const Login = () => {
    const { signIn,signInWithGoogle,signInWithGitHub } = useContext(AuthContext)


    const handlerlLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
            .then((result) => {
                const logedUser = result.user
                console.log(logedUser);
                form.reset('')
            })
            .catch((error) => {
                const errorMessage = error.message
                console.log(errorMessage);
            })
    }

    const googleSignIn =()=>{
        signInWithGoogle()
        .then((result) => {
            const logedUser = result.user
            console.log(logedUser);
          
        })
        .catch((error) => {
            const errorMessage = error.message
            console.log(errorMessage);
        })
    }

    const githubSignIn =()=>{
        signInWithGitHub()
        .then((result) => {
            const logedUser = result.user
            console.log(logedUser);
         
        })
        .catch((error) => {
            const errorMessage = error.message
            console.log(errorMessage);
        })
    }
    return (
        <div>
            <Form onSubmit={handlerlLogin} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <div className=" mt-6">
                                    <button onClick={googleSignIn} className="btn btn-primary">Google</button>
                                </div>
                                <div className=" mt-6">
                                    <button onClick={githubSignIn} className="btn btn-primary">github</button>
                                </div>
                            </div>
                            <p><small>
                                <Link className="label-text-alt link link-hover text-white" to="/register">Please register</Link>
                            </small></p>

                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Login;