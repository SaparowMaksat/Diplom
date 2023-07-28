import React from "react";
import PropTypes from "prop-types";

function Breadcrumbs({ content, label }) {
    return (
        <>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">{content}</li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {label}
                    </li>
                </ol>
            </nav>
        </>
    );
}

Breadcrumbs.propTypes = {
    content: PropTypes.string,
    label: PropTypes.string
};

export default Breadcrumbs;
