const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
        console.log("Form Submitted");
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

export default SimpleForm;