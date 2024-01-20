import React, { useEffect } from "react";
import Routes from "./Routes";
import TopNav from "./components/Topnav";
import { fetchUserDetails, fetchUserEmails } from "./api/UserAPI.js";
import { useDispatch } from 'react-redux';
import { setUserDetails, setEmails } from './utils/appSlice.js';

const Layout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const userDetails = fetchUserDetails();
        dispatch(setUserDetails(userDetails));
    }, []);

    useEffect(() => {
        const emails = fetchUserEmails();
        dispatch(setEmails(emails));
    }, []);

    return (
        <div className="h-screen w-screen">
            <TopNav />
            <Routes />
            {/* <Footer /> */}
        </div>
    )
};

export default Layout;