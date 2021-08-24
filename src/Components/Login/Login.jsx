import React, { useState } from 'react';
import './login.css';
import { useHistory } from 'react-router';

export default function Login() {

    const [valuePass, setValuePass] = useState("");
    const [valueUser, setValueUser] = useState("");

    const [ErrorPass, setErrorPass] = useState(false);
    const [ErrorUser, setErrorUser] = useState(false);

    const handleUser=(event)=>{
        setValueUser(event.target.value);
       if(valueUser.length <5)
            setErrorUser(true)
        else
            setErrorUser(false)
    }
    const handlePass=(event)=>{
        setValuePass(event.target.value);
        if (valuePass.length <7)
            setErrorPass(true)
        else
            setErrorPass(false)
    }
    function validation(){
        ErrorUser && ErrorUser ? alert("Merci de renseigner tous les champs"): alert("Formulaire OK!!")
    }
    let history=useHistory();

    return (
        <div className="login">
            <div className="container">
                <h3 className="login-titre">LOGIN</h3>
                <label type="text" className="login-label">Username</label>
                <input type="text" name="user" onChange={(e)=>handleUser(e)} className="login-input"/>
                {
                    ErrorUser ? (<small class="form-text">Champ non valide (doit contenir au moins 6 caractere) </small>)
                    : null
                }
                <label type="text" className="login-label">Password</label>
                <input type="password" name="pass" onChange={(e)=>handlePass(e)} className="login-input"/>

                {
                    ErrorPass ? (<small class="form-text">Champ non valide (doit contenir au moins 8 caractere)</small>)
                    : null
                }

                <button type="submit" onClick={validation} className="bouton-login btn-primary">Login</button>
                <a href="" onClick={()=>{history.push('./Inscription')}} className="password-oublie"> J'ai oublie mon mot de passe </a>
            </div>
    </div>
    )
}
