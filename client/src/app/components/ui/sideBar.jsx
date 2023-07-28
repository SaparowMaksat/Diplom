import React from "react";
import "./style.css";
import SideGroup from "../common/form/saideGroup";
function SideBar() {
    return (
        <>
            <aside className="w-25 h-100 mx-3">
                <div className="mb-2 border border-light-subtle rounded p-2">
                    <div className="setting">
                        <i className="bi bi-gear "></i>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img
                            className="avatar my-3"
                            src="https://avatars.githubusercontent.com/u/102533562?s=400&u=74674d76359b71941a0147e0284688282e6e747d&v=4https://avatars.githubusercontent.com/u/102533562?s=96&v=4"
                            alt=""
                        />
                    </div>

                    <h3 className="text-center">Maksat Saparow</h3>
                </div>
                <SideGroup />
            </aside>
        </>
    );
}

export default SideBar;
