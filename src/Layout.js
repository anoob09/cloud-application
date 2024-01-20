import React from "react";
import Routes from "./Routes";
import TopNav from "./components/Topnav";

const Layout = () => {
    return (
        <div className="">
            <TopNav />
            <Routes />
            {/* <Footer /> */}
        </div>
    )
};

export default Layout;