import React from 'react';
import './settings.css';
import RightPage from '../../Components/RightPage/RightPage';
import SettingUser from '../../Components/SettingUser/SettingUser';

export default function Settings() {
    return (
        <>
            <div className="settings">
                <SettingUser/>
                <RightPage/>
            </div>
            <div className="col-sm">
                <p>
                    &copy;{new Date().getFullYear()} | FernandBlog | Tous droits reserves | Privacy
            </p>
            </div>
        </>
    )
}
