import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../common/form/button";

function ProductCard({
    src,
    info,
    style,
    styleLink,
    label,
    container,
    desc,
    price,
    onClick,
    toLink
}) {
    return (
        <div className={container}>
            <img src={src} className={style} alt={info} />
            <div className="w-75 px-2">
                <Link to={toLink} className={styleLink}>
                    {label}
                </Link>
                <p className="mt-3">{desc}</p>
                <p className="fw-bold">{`${price} ₽`}</p>
            </div>
            <div className="d-flex justify-content-end align-items-end">
                <Button
                    onClick={onClick}
                    label="открыть"
                    style="btn btn-primary m-2"
                />
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    src: PropTypes.string,
    info: PropTypes.string,
    style: PropTypes.string,
    styleLink: PropTypes.string,
    label: PropTypes.string,
    container: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    onClick: PropTypes.func,
    toLink: PropTypes.string
};

export default ProductCard;
