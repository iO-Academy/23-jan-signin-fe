import Button from "../Button";

const SignInPage = () => {

    return (
        <section className="px-40 py-20">
            <form action="/">
                <label className="text-5xl">Name *</label><br></br>
                <input type="text" id="name" name="name" value="Enter your name here" className="flex justify-center h-14 w-full"/>
                <label className="text-5xl">Company</label><br></br>
                <input type="text" id="company" name="company" className="bg-white border-solid h-14 w-full"/><br></br>
                <Button buttonText="Sign In"/>
            </form>

            <footer className="py-64 px-10 flex justify-center">
                <p>* These fields are mandatory</p>
            </footer>

        </section>
    )
}

export default SignInPage;