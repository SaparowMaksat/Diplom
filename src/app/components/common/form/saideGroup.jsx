import React from "react";
import { Link } from "react-router-dom";

function SideGroup() {
    return (
        <>
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link
                            to="/"
                            className="hover link-underline-light fw-semibold text-uppercase"
                        >
                            <i className="bi bi-house-fill mx-2"></i>
                            Главное
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="auth/:userId/createProduct"
                            className="hover link-underline-light fw-semibold text-uppercase"
                        >
                            <i className="bi bi-file-earmark-plus mx-2"></i>
                            Добавить
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="/basket"
                            className="hover link-underline-light fw-semibold text-uppercase"
                        >
                            <i className="bi bi-basket3-fill mx-2"></i>
                            Корзина
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="/favorites"
                            className="hover link-underline-light fw-semibold text-uppercase"
                        >
                            <i className="bi bi-heart-fill mx-2"></i>
                            Избранное
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="auth/login"
                            className="hover link-underline-light fw-semibold text-uppercase"
                        >
                            <i className="bi bi-box-arrow-right mx-2"></i>
                            Войти
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link
                            to="/"
                            className="hover link-underline-light fw-semibold text-uppercase"
                        >
                            <i className="bi bi-box-arrow-left mx-2"></i>
                            Выйти
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SideGroup;
