import React ,{useState} from 'react';
import './settinguser.css';
import IconUser from '../../ImageFernand/alex-knight-2EJCSULRwC8-unsplash.jpg';
import ImgDel from '../../ImageFernand/user_delete.png';
import IconImport from '../../ImageFernand/icons8_add_48px.png';

export default function SettingUser() {

    // On normalise graces aux states le formulaire en gerant les differents erreurs
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
        Pass1 === Pass2 ? setErrorPass2(true) : setErrorPass2(false)
    }
    function validation(){
        ErrorUser && ErrorEmail && ErrorPass1 && ErrorPass2 ? alert("Merci de renseigner tous les champs"): alert("Formulaire OK!!")
    }

    return(
        <>
            <div className="setting-info">
                <div className="setting-info-titre">
                    <span className="setting-info-update-titre">Update Your Account</span>
                    <span className="setting-info-delete-titre" onClick={()=> alert("Supression OK!!")}><img className="ImgDel" src={ImgDel} alt=""/> Delete Account</span>
                </div>
                <form className="setting-form">
                    <label className="profil"> Profile Picture </label>
                    <div className="setting-info-picture">
                        <img src={IconUser} name="MyProfil" alt="" className="setting-info-image"/>
                        <button className="btn setting-info-import">
                            <label for="fileInput" style={{ cursor :"pointer", margin:"10px"}} >
                                <img src={IconImport} alt="" /> Join a picture
                            </label>
                        </button>
                        <input type="file" onChange="document.MyProfil.src=this.value" id="fileInput" accept ={".png , .jpg, .jpeg, .svg"} style={{display: "none"}}/>
                    </div>
                    <div className="form">
                        <label className="form-label">Username : </label>
                        <input type="text" placeholder="Brice" onChange={(e)=>handlUser(e)}  className="form-input"/>
                        {
                            ErrorUser ? (<small className="form-text"> Champ non valide (doit contenir au moins 6 caracteres)</small>): null
                        }
                        <label className="form-label">Email : </label>
                        <input type="email" className="form-input" onChange={(e)=>handlEmail(e)} placeholder="ngantoubrice@gmail.com"/>
                        {
                            ErrorEmail ? (<small className="form-text">Champ non valide </small>): null
                        }
                        <label className="form-label">Password : </label>
                        <input type="password" onChange={(e)=>handlPass1(e)} className="form-input"/>
                        {
                            ErrorPass1 ? (<small className="form-text">Champ non valide </small>): null
                        }
                        <label className="form-label">Confirm Password : </label>
                        <input type="password" onChange={(e)=>handlPass2(e)} className="form-input" />
                        {
                            ErrorPass2 ? (<small className="form-text">Champ non valide </small>): null
                        }
                        <button type="submit" onClick={validation} className="bouton btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}
