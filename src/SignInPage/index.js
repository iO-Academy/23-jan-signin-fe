import Button from "../Button";

const SignInPage = () => {

    return (
        <>
            <form action="/action_page.php">
                <label>Name *</label><br></br>
                <input type="text" id="name" name="name" value="John" className="flex justify-center"/>
                <label>Company</label>
                <input type="text" id="company" name="company" value="Doe" className="bg-white border-solid"/>
                <Button buttonText="Sign In"/>
            </form>
            <p>* These fields are mandatory</p>
        </>
    )
}

export default SignInPage;