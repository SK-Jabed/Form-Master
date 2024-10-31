import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css"


// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext("Gold");
// eslint-disable-next-line react-refresh/only-export-components
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const asset = "Diamond Ring";
    const [money, setMoney] = useState(1000);

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Uncle asset={asset}></Uncle>
                        <Dad asset={asset}></Dad>
                        <Aunty></Aunty>
                    </section> 
                </AssetContext.Provider>           
            </MoneyContext.Provider>
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