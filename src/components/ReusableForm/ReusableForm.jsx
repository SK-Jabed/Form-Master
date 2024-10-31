import PropTypes from "prop-types";


const ReusableForm = ({formTitle, handleSubmit, submitBtnText = "Submit", children}) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            <h2>{formTitle}</h2>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name"/>
                <br /><br />
                <input type="email" name="email" />
                <br /><br />
                <input type="password" name="password" />
                <br /><br />
                {/* <button>Submit</button> */}
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

ReusableForm.propTypes = {
    formTitle: PropTypes.string,
    handleSubmit: PropTypes.func, 
    children: PropTypes.string,
    submitBtnText: PropTypes.string
}

export default ReusableForm;