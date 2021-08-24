import React , {useState} from 'react';
import './registration.css';

export default function Registration() {

    const [User , setUser]=useState("")
    const [ErrorUser , setErrorUser]=useState(false)
    function handlUser(event){
        setUser(event.target.value);
        User.length < 5 ? setErrorUser(true): setErrorUser(false)
    }
    const [Email , setEmail]=useState("")
    const [ErrorEmail , setErrorEmail]=useState(false)
    function handlEmail (event){
        setEmail(event.target.value);
        Email.length < 6 ? setErrorEmail (true): setErrorEmail (false)
    }

    const [Date , setDate]=useState("")
    const [ErrorDate , setErrorDate]=useState(false)
    function handlDate (event){
        setDate (event.target.value);
        Date.length < 10 ? setErrorDate (true): setErrorDate (false)
    }

    const [Pays , setPays]=useState("")
    const [ErrorPays , setErrorPays]=useState(false)
    function handlPays (event){
        setPays (event.target.value);
        Pays.length < 3 ? setErrorPays (true): setErrorPays (false)
    }

    const [Ville , setVille]=useState("")
    const [ErrorVille , setErrorVille]=useState(false)
    function handlVille (event){
        setVille (event.target.value);
        Ville.length < 3 ? setErrorVille (true): setErrorVille (false)
    }

    const [Profession , setProfession]=useState("")
    const [ErrorProfession , setErrorProfession]=useState(false)
    function handlProfession(event){
        setProfession(event.target.value);
        Profession.length < 5 ? setErrorProfession(true): setErrorProfession(false)
    }

    const [Pass1 , setPass1]=useState("")
    const [ErrorPass1 , setErrorPass1]=useState(false)
    function handlPass1(event){
        setPass1(event.target.value);
        Pass1.length < 7 ? setErrorPass1(true): setErrorPass1(false)
    }

    const [Pass2 , setPass2]=useState("")
    const [ErrorPass2 , setErrorPass2]=useState(false)
    function handlPass2(event){
        setPass2(event.target.value);
        Pass2 !== Pass1 ? setErrorPass2(true) : setErrorPass2(false)
    }

    function validation(){
        ErrorUser && ErrorEmail && ErrorDate && ErrorPays && ErrorVille & ErrorProfession && ErrorPass1 && ErrorPass2 ? alert("Merci de renseigner tous les champs"): alert("Formulaire OK!!")
    }
    return (
        <div className="registration">
            <div className="regis">
                <h4 className="regis-title"> REGISTRATION </h4>
                <label className="regis-label">Username : </label>
                <input type="text" onChange={(e)=>handlUser(e)} className="regis-input" />
                {
                    ErrorUser ? (<small className="form-text"> Champ non valide (doit contenir au moins 6 caracteres)</small>): null
                }
                <label className="regis-label">Email : </label>
                <input type="email" onChange={(e)=>handlEmail(e)}  className="regis-input" />
                {
                    ErrorEmail ? (<small className="form-text">Champ non valide </small>): null
                }
                <label className="regis-label">Date Naissance : </label>
                <input type="date" onChange={(e)=>handlDate(e)} className="regis-input" />
                {
                    ErrorDate ? (<small className="form-text">Champ non valide </small>): null
                }
                <label className="regis-label">Pays de residence : </label>
                <input type="text" onChange={(e)=>handlPays(e)}  className="regis-input"/>
                {
                    ErrorPays ? (<small className="form-text">Champ non valide </small>): null
                }
                <label className="regis-label">Ville de residence : </label>
                <input type="text" onChange={(e)=>handlVille(e)}  className="regis-input" />
                {
                    ErrorVille ? (<small className="form-text">Champ non valide </small>): null
                }

                <label className="regis-label">Profession : </label>
                <input type="text" onChange={(e)=>handlProfession(e)}  className="regis-input"/>
                {
                    ErrorProfession ? (<small className="form-text">Champ non valide (doit contenir au moins 6 caracteres) </small>): null
                }

                <label className="regis-label">Password : </label>
                <input type="password" onChange={(e)=>handlPass1(e)} className="regis-input"/>
                {
                    ErrorPass1 ? (<small className="form-text">Champ non valide </small>): null
                }

                <label className="regis-label">Confirm Password : </label>
                <input type="password" onChange={(e)=>handlPass2(e)} className="regis-input" />
                {
                    ErrorPass2 ? (<small className="form-text">Champ non valide </small>): null
                }

                <button type="submit" onClick={validation} className="regis-bouton btn-primary">Resgister</button>
            </div>
        </div>
    )
}
