import React from "react";
import style from "./style/formComponent.module.scss";
import PropTypes from "prop-types";

function FormComponent({ placeholder }) {
    return (
        <form className={style.form}>
            <div className={style.real}>
                <div className={style.abs}>
                    <svg
                        className={style.svg}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className={style.input}
                    placeholder={placeholder}
                />
            </div>
        </form>
    );
}

FormComponent.propTypes = {
    placeholder: PropTypes.string
};

export default FormComponent;
