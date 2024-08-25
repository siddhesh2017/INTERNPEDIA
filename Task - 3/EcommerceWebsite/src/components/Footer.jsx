import React from 'react';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            {/* <h1>{user.name}</h1> */}
        </div>
    )
}

export default Footer;