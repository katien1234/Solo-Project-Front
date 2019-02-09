import React, { Component } from "react";
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


class Login extends Component {

    state = {
        email: "",
        password: "",
        //signedIn: ""
    };

    updateAccount = async (e) => {
        e.preventDefault();

        const requestbody = {
            email: e.target.elements.email.value,
            username: e.target.elements.username.value,
            password: e.target.elements.password.value
        }
        const api_call = await fetch('katie4113.uksouth.cloudapp.azure.com/QuizAPI/api/account/updateAccount/' + requestbody.email, {
            method: 'PUT',
            body: JSON.stringify(requestbody)

        });
        try {
            const response = await api_call.json();
            console.log(response);
            toast(response.message);
        }
        catch (error) {
            console.log("Error please try again");
        }
    }


    deleteAccount = async (e) => {
        e.preventDefault();
        const requestbody = {
            email: e.target.elements.email.value,

        }
        const api_call = await fetch('katie4113.uksouth.cloudapp.azure.com/QuizAPI/api/account/deleteAccount/' + requestbody, {
            method: 'DELETE',
        });
        try {
            const response = await api_call.json();
            console.log(response);
            toast(response.message);
        }
        catch (error) {
            console.log("Error please try again");
        }
    }



    createAccount = async (e) => {
        e.preventDefault();
        const requestbody = {
            email: e.target.elements.email.value,
            username: e.target.elements.username.value,
            password: e.target.elements.password.value
        }
        const api_call = await fetch('katie4113.uksouth.cloudapp.azure.com/QuizAPI/api/account/createAccount', {
            method: 'POST',
            body: JSON.stringify(requestbody)
        });
        try {
            const response = await api_call.json();
            console.log(response);
            toast(response.message);
        }
        catch (error) {
            console.log("Error please try again");
        }
    }


    verifyAccount = async (e) => {
        e.preventDefault();
        const requestbody = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        const api_call = await fetch('katie4113.uksouth.cloudapp.azure.com/QuizAPI/api/account/verifyAccount', {
            method: 'POST',
            body: JSON.stringify(requestbody)

        });
        try {
            const response = await api_call.json();
            console.log(response);
            toast(response.message);
            //localStorage.setItem("signedIn", requestbody.email);

        }
        catch (error) {
            console.log("Error please try again");
        }
    }

    render() {
        return (
            <div>
                <br /><br />
                <div clasName="TitleBox">
                    <h1 className="TitleLogin"> Login or Sign Up </h1>
                </div>
                <div className="flex-container">
                    <form className="UpdateAccount" onSubmit={this.updateAccount}>
                        <input name="email" type="text" placeholder="Enter email address here" required /><br /><br />
                        <input name="username" type="text" placeholder="Enter username here" required /><br /><br />
                        <input name="password" type="password" placeholder="Enter password here" required /><br /><br />
                        <button>Update account</button>
                    </form>
                    <form className="LoginBox" onSubmit={this.verifyAccount}>
                        <input name="email" type="text" placeholder="Enter email address here" required /><br /><br />
                        <input name="password" type="password" placeholder="Enter password here" required /><br /><br />
                        <button>Login</button>
                    </form>
                    <form className="SignUp" onSubmit={this.createAccount}>
                        <input name="email" type="text" placeholder="Enter email address here" required /><br /><br />
                        <input name="username" type="text" placeholder="Enter username here" required /><br /><br />
                        <input name="password" type="password" placeholder="Enter password here" required /><br /><br />
                        <button>Create account</button>
                    </form>
                    <form className="Delete" onSubmit={this.deleteAccount}>
                        <input name="email" type="text" placeholder="Enter email address here" required /><br /><br />
                        <button>Delete account</button>
                    </form>
                </div>
                <ToastContainer />
            </div>
        )
    }



}
export default Login;