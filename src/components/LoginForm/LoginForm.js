import React, { useState } from "react";

import "./LoginForm.css";

import { withRouter } from "react-router-dom";

function LoginForm(props) {
    return (
        <form id="login" action="none">
            <h1 id="ff-proof" class="ribbon">
                COVID-19 Vaccination &nbsp;&nbsp;
            </h1>

            <fieldset id="inputs">
                <input id="username" type="text" placeholder="Username" />
                <input id="password" type="password" placeholder="Password" />
            </fieldset>
            <fieldset id="actions">
                <input type="submit" id="submit" value="Login" />
                <p class="option">
                    Do not have an account? |<a href="#">Sign Up</a>
                </p>
            </fieldset>
        </form>
    );
}
export default withRouter(LoginForm);
