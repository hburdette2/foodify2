import React, { Component } from 'react';

import styles from './SignupForm.module.css';

class SignupForm extends Component {
    state = this.getInitialState();

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        //we pass the data from state to a service module
        //the service module would make an AJAX call to 
        //our server and create a new record in the database
        //now we clear our form
        this.setState(this.getInitialState());
    }

    getInitialState() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConf: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend>Signup Form</legend>
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="passwordConfirmation">Password Confirmation</label>
                    <input
                        id="passwordConf"
                        name="passwordConf"
                        type="password"
                        value={this.state.passwordConf}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default SignupForm;