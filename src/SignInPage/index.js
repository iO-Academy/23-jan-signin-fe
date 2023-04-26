import Button from "../Button";
import Nav from "../Nav";
import {Link} from "react-router-dom";
import {useState} from "react";

const SignInPage = () => {

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setCompany(e.target.value)
    }

    const handleCompanyChange = (e) => {
        console.log(e.target.value)
        setCompany(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch("http://127.0.0.1:4004/signin", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    company: company,
                }),
            })
            let resJson = await res.json();
            if (res.status === 200) {
                setName(name)
                setCompany(company)
                setMessage("yay")
            } else {
                setMessage("no")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Nav />
            <section className="px-40 py-20">
                <form action="/" method="POST" onSubmit={handleSubmit}>
                    <label className="text-5xl">Name *</label><br></br>
                    <input onChange={handleNameChange} type="text" className="flex justify-center h-14 w-full border-solid border-2 border-black"/>
                    <label className="text-5xl">Company</label><br></br>
                    <input onChange={handleCompanyChange} type="text" className="flex justify-center border-solid h-14 w-full border-solid border-2 border-black"/>

                    {/*<Link to="/SignedIn">*/}
                    <button type="submit" className="bg-black text-white px-10 py-5 text-xl tracking-widest hover:bg-white hover:text-black rounded">Sign In</button>
                    {/*</Link>*/}
                </form>
                <footer className="py-64 px-10 flex justify-center">
                    <p>* These fields are mandatory</p>
                </footer>
            </section>
        </>
    )
}

export default SignInPage;