import React, { useState } from "react";
import Breadcrumbs from "../../common/form/breadcrumbs";
import InputForm from "../../common/form/inputForm";
import ProductCard from "../../ui/productCard/productCard";
// import BasketCounter from "../../basket/basketCounter";
import API from "../../../api";
import Checkout from "../../ui/productCard/checkout";

function BasketPage() {
    const [cards, setCards] = useState(API.basket.fetchAll());
    const handleRemove = (_id) => {
        setCards(cards.filter((card) => card.id !== _id));
    };

    const summaryPrice = () => {
        const newSummary = cards.reduce((a, b) => {
            return a + b.price;
        }, 0);
        return newSummary;
    };

    return (
        <div className="container-fluid">
            <Breadcrumbs content={"Корзина"} label={"Оформление заказа"} />
            <InputForm
                placeholder={"Введите наименование товара..."}
                style={"d-block form-control"}
            />
            <div className="row mt-3">
                <div className="col-8">
                    {cards.map((card) => (
                        <ProductCard
                            container={
                                "d-flex w-full border border-light-subtle m-1 p-2 rounded"
                            }
                            style={"w-25"}
                            key={card._id}
                            src={card.image}
                            count={card.value}
                            onRemove={() => handleRemove(card._id)}
                            {...card}
                        />
                    ))}
                </div>
                <div className="col-4">
                    <Checkout
                        container={
                            "d-flex justify-content-center align-items-center h-100 border border-light-subtle p-2 rounded"
                        }
                        summary={summaryPrice()}
                    />
                </div>
            </div>
            {/* {counters.map((count) => (
                <BasketCounter
                    key={count._id}
                    onDelete={() => handleDelete(count._id)}
                    label={count.label}
                    {...count}
                />
            ))} */}
        </div>
    );
}

export default BasketPage;
