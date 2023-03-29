import React from "react";
import "./App.css";
import {Header} from "./components/Header";
import {MainSection} from "./components/MainSection";

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <MainSection />
        </div>
    );
}


export default App;
