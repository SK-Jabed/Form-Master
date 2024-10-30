import { useState } from "react";


const StateFulForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be 6 characters or longer");
        }
        else {
            setError("");
            console.log(name, email, password);
        };
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name"/>
                <br /><br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br /><br />
                <input onChange={handlePasswordChange} type="password" name="number" id="" required />
                <br /><br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;