import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {apiHost} from "./apiData";

export const RegisterForm = () => {
    const [form, setForm] = useState({username: "", email: "", password: "", repeatedPassword: ""})
    const [isRegistered, setIsRegistered] = useState(false)

    const setFormFields = e => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            };
        });
    }

    const submitForm = (e) => {
        e.preventDefault();

        const requestBody = JSON.stringify({
            username: form.username,
            email: form.email,
            password: form.password,
            repeatedPassword: form.repeatedPassword
        });

        fetch(`${apiHost}/rrs/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        })
            .then(response => {
                if (response.ok) {
                    setIsRegistered(true);
                } else {
                    throw new Error('Communication error: POST /api/orders/finalized');
                }
            })
            .catch(error => console.log(error))
        e.reset();
    }

    return (
        <>
            {isRegistered ? (
                <div className="text-center">
                    <p style={{color: 'green'}}>Rejestracja przebiegła pomyślnie.</p>
                    <hr/>
                    <Link to="/login" className="btn btn-primary">Zaloguj się!</Link>
                </div>) :
                (
                    <>
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Rejestracja nowego użytkownika</h1>
                        </div>
                        <form className="user" onSubmit={submitForm}>
                            <div className="form-group">
                                <input type="text"
                                       className="form-control form-control-user"
                                       placeholder="Wpisz login..."
                                       name="username"
                                       value={form.username}
                                       onChange={setFormFields}/>

                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className="form-control form-control-user"
                                       placeholder="Wpisz email..."
                                       name="email"
                                       value={form.email}
                                       onChange={setFormFields}/>

                            </div>
                            <div className="form-group">
                                <input type="password"
                                       className="form-control form-control-user"
                                       placeholder="Podaj hasło..."
                                       value={form.password}
                                       name="password"
                                       onChange={setFormFields}/>
                            </div>
                            <div className="form-group">
                                <input type="password"
                                       className="form-control form-control-user"
                                       placeholder="Powtórz hasło..."
                                       value={form.repeatedPassword}
                                       name="repeatedPassword"
                                       onChange={setFormFields}/>
                            </div>
                            <button className="btn btn-primary btn-user btn-block"
                                    style={{fontSize: '1.1rem'}}>Zarejestruj się
                            </button>
                        </form>
                        <hr/>
                        <div className="text-center">
                            <Link to="/login" className="small">Masz już konto? Zaloguj się!</Link>
                        </div>
                    </>
                )}
        </>
    );
}
