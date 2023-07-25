import React from "react";
import UserCard from "../../ui/userCard";
import SideBar from "../../ui/sideBar";
import Breadcrumbs from "../../common/form/breadcrumbs";

function UsersPage() {
    return (
        <div className="container mt-3">
            <Breadcrumbs label={"Page"} content={"User"} />
            <div className="d-flex w-100">
                <SideBar />
                <UserCard />
            </div>
        </div>
    );
}

export default UsersPage;
