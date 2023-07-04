import React from "react";
import style from "./style/mainContent.module.scss";
import FavoritCard from "./fovoritCard/favoritCard";
import ProductCard from "./productCard/productCard";
import FormComponent from "../form/formComponent";

function MainContent() {
    return (
        <div className={style.main__content}>
            <div className={style.main__content_container}>
                <FormComponent placeholder="Функции сортировки (по стоимости)" />
                <FavoritCard />
                <div className={style.product__card_container}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default MainContent;
