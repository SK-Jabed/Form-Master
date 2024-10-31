import PropTypes from "prop-types";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

Dad.propTypes = {
    asset: PropTypes.string
}

export default Dad;