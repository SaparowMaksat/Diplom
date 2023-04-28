import React from "react";
import style from "./style/favoritCard.module.scss";

function FavoritCard() {
    return (
        <div className={style.container}>
            <div className={style.image_box}>
                <div className={style.image_animation}>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0506/5421/6368/products/iPhone14ProDeepPurple-4.jpg?v=1678355638"
                        className={style.image}
                        alt="..."
                    />
                </div>
                <button className={style.btn}></button>
            </div>
        </div>
    );
}

export default FavoritCard;
