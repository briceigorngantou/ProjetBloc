import React, { useState } from 'react'
import './contact.css';
import validator from 'validator';

export default function Contact() {

    const [User, setUser] = useState("");
    const [ErrorUser ,setErrorUser]=useState(false);
    function handlUser(event){
        let user_temp=event.target.value;
        setUser(user_temp);
        user_temp.length < 6  || validator.isEmpty(user_temp) ? setErrorUser(true): setErrorUser(false)
    }

    const [Msg, setMsg] = useState("");
    const [ErrorMsg ,setErrorMsg]=useState(false);
    function handlMessage (event){
        let Msg_temp=event.target.value;
        setMsg(Msg_temp);
        Msg_temp.length < 50 || validator.isEmpty(Msg_temp) ? setErrorMsg (true): setErrorMsg (false)
    }

    const [Email, setEmail] = useState("");
    const [ErrorEmail ,setErrorEmail]=useState(false);
    function handlEmail (event){
        let Email_temp=event.target.value;
        setEmail(Email_temp);
        !validator.isEmail(Email_temp) || validator.isEmpty(Email_temp) ? setErrorEmail (true): setErrorEmail (false)
    }

    function validation(){
        ErrorUser || ErrorEmail || ErrorMsg ? alert("Merci de renseigner tous les champs"): alert("Formulaire OK!!")
    }
    return (
    <>
        <div className="contact">
            <h3 className="contact-title"><h1>Contacter nous</h1> nous serons ravis d'avoir de vous nouvelles</h3>
            <div className="form-contact">
                <label className="login-label contact-label">Username</label>
                <input type="text" className="form-control login-input contact-input" onChange={(e)=>handlUser(e)} placeholder="Entrez votre Username"/>
                {
                    ErrorUser ? (<small class="form-text">Champ non valide (doit contenir au moins 6 caracteres) </small>)
                    : null
                }
                <label className="login-label contact-label">Email</label>
                <input type="Email" className="login-input form-control contact-input" onChange={(e)=>handlEmail(e)} placeholder="Entrez votre Email"/>
                {
                    ErrorEmail ? (<small class="form-text">Champ non valide </small>)
                    : null
                }
                <label className="login-label contact-label">Message</label>
                <textarea rows="15" className="login-input form-control contact-input" onChange={(e)=>handlMessage(e)}  placeholder="Entrez votre Message"/>
                {
                    ErrorMsg ? (<small class="form-text">Champ non valide (doit contenir au moins 50 caracteres) </small>)
                    : null
                }
                <button type="submit" onClick={validation}  className="bouton-Contact form-control btn-primary">Envoyer</button>
            </div>
        </div>
        <div className="col-sm">
            <p>
                &copy;{new Date().getFullYear()} | FernandBlog | Tous droits reserves | Privacy
            </p>
        </div>
    </>
    )
}
