import React from "react";
import PropTypes from "prop-types";

function InputForm({
    label,
    htmlFor,
    id,
    name,
    type,
    value,
    style,
    placeholder,
    onChange
}) {
    return (
        <>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                className={style}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
}

InputForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.node], PropTypes.node),
    onChange: PropTypes.func,
    style: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    htmlFor: PropTypes.string
};

export default InputForm;
