import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={"David"}></Cousin>
                <Cousin name={"Khalifa"}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;