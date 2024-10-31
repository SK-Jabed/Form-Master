import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Sister = () => {
    const [money] = useContext(MoneyContext);
    
    return (
        <div>
            <h2>Sister</h2>
            <p>Money: {money + 1000}</p>
        </div>
    );
};

export default Sister;