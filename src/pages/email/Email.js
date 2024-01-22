import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import EmailList from "./EmailList.js";
import { setEmails } from "../../utils/Actions.js";

const Email = () => {
    
    const dispatch = useDispatch();
    const emailList = useSelector(store => store.app.emails);
    const deleteEmail = (toBeDeleted) => {
        const remainingEmails = emailList.filter((email) => !toBeDeleted.includes(email["id"]));
        dispatch(setEmails(remainingEmails))
    }

    return (
        <EmailList emailList={emailList} deleteEmail={deleteEmail} />
    )
};

export default Email;