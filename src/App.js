import React from "react";
import ComCriaOpcoes from "./components/ComCriaOpcoes";
import ComEditaOpcoes from "./components/ComEditaOpcoes";
import ComPegaMenu from "./components/ComPegaMenu";
import { ComLogin } from "./pages/Login/ComLogin";
import { BrowserRouter } from 'react-router-dom';
import Main from "./pages/Home/index";
import Routes from "./Routes"



const App = () => (
    <div>
        <ComLogin />
    </div>


);

export default App;
