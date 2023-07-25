import React from "react";
import { Outlet } from "react-router-dom";
import MainPage from "../components/page/mainPage/mainPage";

function Main() {
    return (
        <div className="container-fluid mt-3">
            <MainPage />
            <Outlet />
        </div>
    );
}

export default Main;
