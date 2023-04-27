import Nav from "../Nav";

const SignedOutPage = ({name, company, loginTime, logoutTime}) => {

    return (
        <>
            <Nav />
            <section className="bg-gray-100 mx-10">
                <h1 className="text-5xl flex justify-center py-10">Thank you for signing out</h1>
                <div className="px-64 mx-10 flex justify-center text-9xl">
                    <p className="px-10" name={name}>{name}</p>
                </div>
                <div className="px-64 mx-10 flex justify-center text-7xl">
                    <p className="py-5" company={company}>{company}</p>
                </div>
                <div className="py-10 flex justify-center text-6xl">
                    <p>{loginTime}-logout</p>
                </div>
            </section>
        </>
    )
}

export default SignedOutPage;
