import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css"

const AssetContext = createContext("Gold");

const Grandpa = () => {
    const asset = "Diamond Ring";

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Uncle asset={asset}></Uncle>
                    <Dad asset={asset}></Dad>
                    <Aunty></Aunty>
                </section> 
            </AssetContext.Provider>           
        </div>
    );
};

export default Grandpa;


/*
* Context API:
* 01. Create a context and Export it.
* 02. Add Provider for the context with a value. Value could be anything.
* 03. useContext to access value in the context API.
*/