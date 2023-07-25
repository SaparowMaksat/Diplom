import React, { useEffect, useState } from "react";
import InputForm from "../../common/form/inputForm";
import SideGroup from "../../common/form/saideGroup";
// import { Link } from "react-router-dom";
import API from "../../../api";
// import Button from "../../common/form/button";
import Breadcrumbs from "../../common/form/breadcrumbs";
import { paginate } from "../../../utils/paginate.js";
import Pagination from "../../common/form/pagination";
import "./style.css";
import ProductCard from "../../ui/productCard/productCard";

function MainPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [cards, setCards] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const countPage = cards.length;
    const pageSize = 2;

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleInputValueChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    useEffect(() => {
        setCards(API.basket.fetchAll());
    }, []);

    const cardProductPage = paginate(cards, currentPage, pageSize);

    if (pageSize === 1) return null;

    return (
        <>
            <Breadcrumbs content="Главное" />
            <InputForm
                style="form-control"
                placeholder="Введите наименование товара..."
                value={inputValue}
                onChange={handleInputValueChange}
            />
            <div className="d-flex mt-3 w-100">
                <section className="w-25 rounded">
                    <SideGroup />
                </section>
                <section className="w-75 ms-2 rounded">
                    <div className="d-flex justify-content-end w-100">
                        <p className="fw-bold mx-2 text-secondary">
                            Сортировка по стоимости
                        </p>
                        <InputForm style="form-control w-25" placeholder="от" />
                        <InputForm
                            style="form-control w-25 ms-2"
                            placeholder="до"
                        />
                    </div>
                    {cardProductPage.map((card) => (
                        <ProductCard
                            key={card._id}
                            container="d-flex my-3 ps-2 rounded w-100"
                            src={card.image}
                            style="image"
                            styleLink="link-underline-light text-secondary fw-bold"
                            {...card}
                        />
                    ))}
                    <div className="d-flex my-3 justify-content-center">
                        <Pagination
                            itemsCount={countPage}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </section>
            </div>
        </>
    );
}

export default MainPage;
