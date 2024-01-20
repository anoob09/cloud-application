import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import EmailList from "./EmailList.js";
import { setEmails } from "../../utils/appSlice.js";

const Email = () => {
    
    const dispatch = useDispatch();
    const emailList = useSelector(store => store.app.emails);
    const deleteEmail = (toBeDeleted) => {
        const remainingEmails = emailList.filter((email, index) => !toBeDeleted.includes(email["id"]));
        dispatch(setEmails(remainingEmails))
    }

    return (
        <EmailList emailList={emailList} deleteEmail={deleteEmail} />
    )
};

export default Email;