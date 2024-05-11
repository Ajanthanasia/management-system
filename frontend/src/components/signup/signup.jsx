import React from 'react';
import { useForm } from 'react-hook-form';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data.username);
        console.log(data.email);
        console.log(data.password);
    };

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="">
                        Create your user Account
                    </label>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="">User name</label>
                            <input type="text" className='form-control' name="username" {...register("username", { required: true })} />
                            {errors.username && <p>Username is required</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <p>Email is required and must be valid</p>}
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  {...register("password", { required: true })}>
                            </input>
                            {errors.password && <p>Password is required</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default Signup;