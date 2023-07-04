import React from "react";
import style from "./style/headerComponent.module.scss";
import NavTextField from "../../common/form/navField/navTextField";

function HeaderComponent() {
    return (
        <div className={style.header}>
            <nav className="border-gray-200 bg-slate-400 rounded-lg">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <img
                        src="https://3mu.ru/wp-content/uploads/2014/11/nadpis-diplom-iz-serebra.png"
                        className="h-12 w-40 mr-3"
                        alt="diplom"
                    />

                    <div className="flex items-center">
                        <a
                            href="#"
                            className="font-semibold flex-initial w-36 text-indigo-100 text-xl hover:underline"
                        >
                            Регистрация
                        </a>
                    </div>
                </div>
            </nav>
            <nav className={style.nav_bottom}>
                <div className={style.d_width}>
                    <div className={style.d_flex}>
                        <ul className={style.ul_container}>
                            <NavTextField style={style.li_item} />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderComponent;
