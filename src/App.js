import React from "react";
import ComCriaOpcoes from "./components/ComCriaOpcoes";
import ComEditaOpcoes from "./components/ComEditaOpcoes";
import ComPegaMenu from "./components/ComPegaMenu";

import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    Laurels,
    SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
        <ComPegaMenu />
        <ComEditaOpcoes />
        <ComCriaOpcoes />
    </div>
);

export default App;
