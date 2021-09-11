import React, { useState } from 'react';
import './login.css';
import validator from 'validator';
import { useHistory } from 'react-router';

export default function Login() {

    const [valuePass, setValuePass] = useState("");
    const [valueUser, setValueUser] = useState("");

    const [ErrorPass, setErrorPass] = useState(false);
    const [ErrorUser, setErrorUser] = useState(false);

    // Validation du username
    const handleUser=(event)=>{
        let user_temp=event.target.value;
        setValueUser(user_temp);
       if(user_temp.length <6 || validator.isEmpty(user_temp))
            setErrorUser(true)
        else
            setErrorUser(false)
    }
    //validation du password
    const handlePass=(event)=>{
        let pass_temp=event.target.value;
        setValuePass(pass_temp);
        if (pass_temp.length <8 || validator.isEmpty(pass_temp))
            setErrorPass(true)
        else
            setErrorPass(false)
    }
    // Controle du formulaire
    function validation(){
        ErrorUser || ErrorPass ? alert("Merci de renseigner tous les champs"): alert("Formulaire OK!!")
    }
    let history=useHistory();

    return (
        <div className="login">
            <div className="container">
                <h3 className="login-titre">LOGIN</h3>
                <label type="text" className="login-label">Username</label>
                <input type="text" name="user" onChange={(e)=>handleUser(e)} className="form-control login-input"/>
                {
                    ErrorUser ? (<small class="form-text">Champ non valide (doit contenir au moins 6 caractere) </small>)
                    : null
                }
                <label type="text" className="login-label">Password</label>
                <input type="password" name="pass" onChange={(e)=>handlePass(e)} className="form-control login-input"/>
                {
                    ErrorPass ? (<small class="form-text">Champ non valide (doit contenir au moins 8 caractere)</small>)
                    : null
                }
                <button type="submit" onClick={validation} className="bouton-login form-control btn-primary">Login</button>
                <a href="" onClick={()=>{history.push('./Inscription')}}> J'ai oublie mon mot de passe </a>
            </div>
    </div>
    )
}
