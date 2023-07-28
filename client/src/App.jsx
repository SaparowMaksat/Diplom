import React from "react";
import { useRoutes } from "react-router-dom";
import NavBar from "./app/components/ui/navBar/navBar";
import routes from "./routes";

function App() {
    const element = useRoutes(routes());
    return (
        <div className="container-fluid">
            <NavBar />
            {element}
        </div>
    );
}

export default App;
