import Nav from "../Nav";
import {useState} from "react";
import {useNavigate} from "react-router";

const SignOutPage = ({name, setName, company, setCompany, setLoginTime}) => {

    const navigate = useNavigate()
    const handleNameChange = (e) => {
        setName(e.target.value)
    }


    const handleSubmit = async (e) => {

    }

    return (
        <>
            <Nav />
            <section className="px-40 py-20 bg-gray-100 mx-10">
                <form action="/" method="PUT" onSubmit={handleSubmit}>
                    <label className="text-5xl">Name *</label><br></br>
                    <input onChange={handleNameChange} type="text" className="flex justify-center mt-5 mb-10 p-5 h-14 w-full border-solid border-2 border-black"/>
                    <button type="submit" className="bg-black text-white px-10 mt-10 py-5 text-xl tracking-widest hover:bg-white hover:text-black rounded" disabled={name !== '' ? false : true}>Sign Out</button>
                </form>
                <footer className="fixed bottom py-10 flex text-2xl">
                    <p>* These fields are mandatory</p>
                </footer>
            </section>
        </>
    )
}

export default SignOutPage;
