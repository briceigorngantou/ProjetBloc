import React , {useState} from 'react';
import './registration.css';
import validator from 'validator';

export default function Registration() {

    // controle du username
    const [User , setUser]=useState("");
    const [ErrorUser , setErrorUser]=useState(false)
    function handlUser(event){
        let user_temp=event.target.value;
        setUser(user_temp);
        ( user_temp.length < 6 || validator.isEmpty(user_temp) )? setErrorUser(true): setErrorUser(false)
    }
    // Controle de l'email
    const [Email , setEmail]=useState("")
    const [ErrorEmail , setErrorEmail]=useState(false)
    function handlEmail (event){
        let Email_temp=event.target.value;
        setEmail(Email_temp);
        !validator.isEmail(Email_temp) ? setErrorEmail (true): setErrorEmail (false)
    }
    // Controle du champ date de naissance
    const [Date , setDate]=useState("")
    const [ErrorDate , setErrorDate]=useState(false)
    function handlDate (event){
        let Date_temp=event.target.value;
        setDate(Date_temp);
        !validator.isDate(Date_temp) ? setErrorDate (true): setErrorDate (false)
    }
    // controle du champ pays
    const [Pays , setPays]=useState("")
    const [ErrorPays , setErrorPays]=useState(false)
    function handlPays (event){
        let pays_temp=event.target.value;
        setPays (pays_temp);
        validator.isEmpty(pays_temp) ? setErrorPays (true): setErrorPays (false)
    }
    // controle du champ ville
    const [Ville , setVille]=useState("")
    const [ErrorVille , setErrorVille]=useState(false)
    function handlVille (event){
        let ville_temp=event.target.value;
        setVille (ville_temp);
        validator.isEmpty(ville_temp)  ? setErrorVille (true): setErrorVille (false)
    }
    // controle du champ profession
    const [Profession , setProfession]=useState("")
    const [ErrorProfession , setErrorProfession]=useState(false)
    function handlProfession(event){
        let profession_temp=event.target.value;
        setProfession (profession_temp);
        validator.isEmpty(profession_temp)  ? setErrorProfession(true): setErrorProfession(false)
    }

    const [Pass1 , setPass1]=useState("")
    const [ErrorPass1 , setErrorPass1]=useState(false)
    function handlPass1(event){
        let pass1_temp=event.target.value;
        setPass1 (pass1_temp);
        validator.isEmpty(pass1_temp) || pass1_temp.length < 8 ? setErrorPass1(true): setErrorPass1(false)
    }

    const [Pass2 , setPass2]=useState("")
    const [ErrorPass2 , setErrorPass2]=useState(false)
    function handlPass2(event){
        let pass2_temp=event.target.value;
        setPass2 (pass2_temp);
        validator.isEmpty(pass2_temp) || pass2_temp!== Pass1 ? setErrorPass2(true) : setErrorPass2(false)
    }

    function validation(){
        ErrorUser || ErrorEmail || ErrorDate || ErrorPays || ErrorVille || ErrorProfession || ErrorPass1 || ErrorPass2 ? alert("Merci de renseigner tous les champs"): alert("Formulaire OK!!")
    }
    return (
        <div className="registration">
            <div className="regis">
                <h4 className="regis-title"> REGISTRATION </h4>
                <label className="regis-label">Username : </label>
                <input type="text" onChange={(e)=>handlUser(e)} className="regis-input form-control" />
                {
                    ErrorUser ? (<small className="form-text"> Champ non valide (doit contenir au moins 6 caracteres)</small>): null
                }
                <label className="regis-label">Email : </label>
                <input type="email" onChange={(e)=>handlEmail(e)}  className="form-control regis-input" />
                {
                    ErrorEmail ? (<small className="form-text">Champ non valide </small>): null
                }
                <label className="regis-label">Date Naissance : </label>
                <input type="date" onChange={(e)=>handlDate(e)} className="form-control regis-input" />
                {
                    ErrorDate ? (<small className="form-text">Champ non valide </small>): null
                }
                <label className="regis-label">Pays de residence : </label>
                <input type="text" onChange={(e)=>handlPays(e)}  className="form-control regis-input"/>
                {
                    ErrorPays ? (<small className="form-text">Champ non valide </small>): null
                }
                <label className="regis-label">Ville de residence : </label>
                <input type="text" onChange={(e)=>handlVille(e)}  className="form-control regis-input" />
                {
                    ErrorVille ? (<small className="form-text">Champ non valide </small>): null
                }

                <label className="regis-label">Profession : </label>
                <input type="text" onChange={(e)=>handlProfession(e)}  className="form-control regis-input"/>
                {
                    ErrorProfession ? (<small className="form-text">Champ non valide (doit contenir au moins 6 caracteres) </small>): null
                }

                <label className="regis-label">Password : </label>
                <input type="password" onChange={(e)=>handlPass1(e)} className="form-control regis-input"/>
                {
                    ErrorPass1 ? (<small className="form-text">Champ non valide </small>): null
                }

                <label className="regis-label">Confirm Password : </label>
                <input type="password" onChange={(e)=>handlPass2(e)} className="form-control regis-input" />
                {
                    ErrorPass2 ? (<small className="form-text">Champ non valide </small>): null
                }

                <button type="submit" onClick={validation} className="regis-bouton form-control btn-primary">Resgister</button>
            </div>
        </div>
    )
}
