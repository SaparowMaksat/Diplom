import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../form/button";

function BasketCounter({ id, value, label, onDelete }) {
    const [count, setCount] = useState(value);
    const formatCount = () => {
        return count === 0 ? "empty" : count;
    };

    const getBadgeClasses = () => {
        let classes = "badge p-2 m-2 ";
        classes += count === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);
    };

    const handleDecrement = () => {
        setCount((prevState) => prevState - 1);
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                <h4>{label}</h4>
                <div>
                    <div className={getBadgeClasses()}>{formatCount()}</div>
                    <Button
                        style="btn btn-primary btn-sm m-2"
                        onClick={handleIncrement}
                    >
                        +
                    </Button>
                    {count > 0 ? (
                        <Button
                            style="btn btn-primary btn-sm m-2"
                            onClick={handleDecrement}
                        >
                            -
                        </Button>
                    ) : (
                        <Button
                            style="btn btn-primary btn-sm m-2"
                            label="-"
                            disabled
                        />
                    )}
                    <Button style="btn btn-danger" onClick={onDelete}>
                        <i className="bi bi-trash3-fill"></i>
                    </Button>
                </div>
            </div>
        </>
    );
}

BasketCounter.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onDelete: PropTypes.func,
    value: PropTypes.number
};

export default BasketCounter;
