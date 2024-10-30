import PropTypes from "prop-types";
import Special from "../Special/Special";

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Sheikh Jabed</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

Myself.propTypes = {
    asset: PropTypes.string
}

export default Myself;