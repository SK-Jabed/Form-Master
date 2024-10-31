import PropTypes from "prop-types";
import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext);

    return (
        <div>
            <h2>Special Person</h2>
            <p>Has arrived: {asset}</p>
            <p>Also arrived: {gift}</p>
        </div>
    );
};

Special.propTypes = {
    asset: PropTypes.string
}

export default Special;