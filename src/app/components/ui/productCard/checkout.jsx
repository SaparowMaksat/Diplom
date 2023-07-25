import React from "react";
import PropTypes from "prop-types";
import Button from "../../common/form/button";

function Checkout({ container, summary }) {
    return (
        <div className={container}>
            <div className="w-100">
                <h6>{"Итоговая сумма: "}</h6>
                <h4>{summary}</h4>
                <Button
                    label={"Оформить заказ"}
                    style={"btn btn-outline-success w-100"}
                />
            </div>
        </div>
    );
}
Checkout.propTypes = {
    container: PropTypes.string,
    summary: PropTypes.number
};
export default Checkout;
