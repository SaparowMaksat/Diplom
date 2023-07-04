import React from "react";
import style from "./style/main/main.module.scss";
import Aside from "./components/ui/aside/aside";
import FormComponent from "./components/ui/form/formComponent";
import HeaderComponent from "./components/ui/header/headerComponent";
import MainContent from "./components/ui/mainContent/mainContent";

function App() {
    return (
        <>
            <div className={style.container}>
                <HeaderComponent />
                <FormComponent placeholder="Поисковая строка (по названию)" />
                <Aside />
                <MainContent />
            </div>
        </>
    );
}

export default App;
