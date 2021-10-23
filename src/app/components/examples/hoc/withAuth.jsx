import React from "react";

const withAuth = (Component) => (props) => {
    const isAuth = Boolean(localStorage.getItem("user"));
    const Login = () => {
        localStorage.setItem("user", JSON.stringify(true));
    };
    const LogOut = () => {
        localStorage.removeItem("user");
    };
    return <Component isAuth={isAuth} onLogin={Login} onLogOut={LogOut} />;
};

export default withAuth;
