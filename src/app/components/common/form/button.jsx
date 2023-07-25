import React from "react";
import PropTypes from "prop-types";

function Button({ label, onClick, children, style, type }) {
    return (
        <button onClick={onClick} className={style} type={type}>
            {label || children}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node], PropTypes.node)
};

export default Button;
