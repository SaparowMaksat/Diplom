import React, { useState } from "react";
import Breadcrumbs from "../../common/form/breadcrumbs";
import InputForm from "../../common/form/inputForm";
import Button from "../../common/form/button";
import ProductList from "./productList";

function CreateProduct() {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    return (
        <div className="mt-3">
            <Breadcrumbs content={"Добавить"} label={"Редактировать"} />
            <div className="d-flex mt-2">
                <div className="w-25 border border-light-subtle rounded m-2">
                    <h3>Добавить</h3>
                    <form onClick={handleSubmit}>
                        <InputForm
                            id={"test"}
                            name={"catig"}
                            value={inputValue}
                            onChange={handleChange}
                            margin={"mt-2"}
                            label={"Котегории"}
                            style={"d-block form-control"}
                        />
                        {/* d-block form-control */}
                        <InputForm
                            margin={"mt-2"}
                            label={"Стоимость"}
                            style={"d-block form-control"}
                            placeholder={"Введите сумму"}
                        />
                        <div className="mt-2">
                            <label className="form-label">
                                Краткое описание
                            </label>
                            <textarea
                                className="form-control"
                                rows="3"
                            ></textarea>
                        </div>
                        <InputForm
                            label={"Выберите фото"}
                            margin={"mt-2 mb-5"}
                            type={"file"}
                        />
                        <Button
                            label={"Опубликовать"}
                            style={"btn btn-primary w-100 mt-5"}
                        />
                    </form>
                </div>
                <div className="w-75 border border-light-subtle rounded m-2">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;
