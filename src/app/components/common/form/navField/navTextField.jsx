import React from "react";
// import style from "./style/navTextField.module.scss";
import PropTypes from "prop-types";

function NavTextField({ style }) {
    return (
        <>
            <li>
                <a href="#" className={style}>
                    Все модели
                </a>
            </li>
            <li>
                <a href="#" className={style}>
                    Новинки
                </a>
            </li>
            <li>
                <a href="#" className={style}>
                    Смартфоны
                </a>
            </li>
            <li>
                <a href="#" className={style}>
                    Планшеты
                </a>
            </li>
            <li>
                <a href="#" className={style}>
                    Ноутбуки
                </a>
            </li>
        </>
    );
}

NavTextField.propTypes = {
    style: PropTypes.string
};

export default NavTextField;
