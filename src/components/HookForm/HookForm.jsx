import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    // const nameState = useInputState("SKJ");

    const emailState = useInputState("jabedbd2295@gmail.com")

    const handleSubmit = e => {
        console.log("Form Data", emailState.value);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> */}
                <br /><br />
                <input {...emailState} type="email" name="email" id="" />
                <br /><br />
                <input type="password" name="password" id="" />
                <br /><br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;