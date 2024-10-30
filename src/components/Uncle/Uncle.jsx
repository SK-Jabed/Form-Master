import PropTypes from "prop-types";
import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={"Sins"} asset={asset}></Cousin>
                <Cousin name={"Daniels"}></Cousin>
            </section>
        </div>
    );
};

Uncle.propTypes = {
    asset: PropTypes.string
}

export default Uncle;