import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../utils/appSlice.js';

const Email = () => {
    const dispatch = useDispatch();
    const toggleMenuBar = () => {
        dispatch(toggleMenu("sdasd"))
    }
    const isMenu = useSelector(store => store.app.isMenuOpen);
    return (
        <div>
            {isMenu} email
            <button onClick={()=>toggleMenuBar()}>click here</button>
        </div>
    )
};

export default Email;