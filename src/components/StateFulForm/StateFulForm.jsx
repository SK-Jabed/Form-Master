

const StateFulForm = () => {
    const handleSubmit = e => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br /><br />
                <input type="email" name="email" id="" />
                <br /><br />
                <input type="password" name="number" id="" />
                <br /><br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFulForm;