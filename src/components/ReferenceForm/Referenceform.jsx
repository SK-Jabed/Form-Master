import { useEffect, useRef } from "react";


const ReferenceForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name"/>
                <br /><br />
                <input ref={emailRef} type="email" defaultValue={"jabedbd2295@gmail.com"} name="email" id="" />
                <br /><br />
                <input ref={passwordRef} type="password" name="number" id="" />
                <br /><br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReferenceForm;