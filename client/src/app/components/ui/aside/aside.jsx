import React from "react";
import style from "./style/aside.module.scss";
import NavTextField from "../../common/form/navField/navTextField";

function Aside() {
    return (
        <div className={style.aside}>
            <ul className={style.ul_container}>
                <NavTextField style={style.aside_link} />
            </ul>
        </div>
    );
}

export default Aside;
