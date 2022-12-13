
import React, { useState } from "react";

import './Login.css';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [updateText, setUpdateText] = useState([]);

    const submit = (e) => {
        e.preventDefault();

        if (email && password) {
            const details = {
                email: email,
                password: password
            }

            setUpdateText([...updateText, details]);
            setEmail("");
            setPassword("");
            alert('Logged in successfully')
            localStorage.setItem('details', JSON.stringify(details));
        } else {
            alert('invalid details');
        }

    }

    return (
        <>
            <section className="form-Container">
                <form onSubmit={submit}>
                    <fieldset>
                        <div className="usernameDiv">
                            <label htmlFor="email" className="input-Label email-label">Email</label>
                            <input type="text" name="email" id="email" className='inputName' value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className="passwordDiv">
                            <label htmlFor="password" className="input-Label">Password</label>
                            <input type="password" name="password" id="password" className='inputName' value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <div className="btnDiv">
                            <button className="btn" type="submit">Login</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </>
    )
}