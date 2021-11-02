import React from 'react';
import "../css/AdminLogin.css";

function AdminLogin() {
    return (
        <div className="container">
            <h1>Login as Admin</h1>
            <div className="formContainer container">
                <form className="form">

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class=" passwordBox form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        <div className="buttonContainer container">
                            <button type="submit" class="loginButton btn btn-primary">Login</button>
                            <button type="button" class="btn btn-secondary">SignUp</button>
                        </div>
                    </div>


                </form>
            </div>



        </div>
    )
}

export default AdminLogin;
