import Nav from "../Nav";
import {useState} from "react";
import {useNavigate} from "react-router";

const SignInPage = ({name, setName, company, setCompany, setLoginTime}) => {


    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleCompanyChange = (e) => {
        setCompany(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch("http://127.0.0.1:4004/signin", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    company: company,
                }),
            })

            let resJson = await res.json()
            if (res.status === 200) {
                let loginTime = resJson.data[0].checkInTime
                setLoginTime(loginTime)
                setMessage("success")
                navigate('/SignedIn')
            } else {
                setMessage("unsuccessful")
            }
        } catch (err) {
            console.log(err)

        }
    }

    return (
        <>
            <Nav />
            <section className="px-40 py-20 bg-gray-100 mx-10">
                <form action="/" method="POST" onSubmit={handleSubmit}>
                    <label className="text-5xl">Name *</label><br></br>
                    <input onChange={handleNameChange} type="text" className="flex justify-center mt-5 mb-10 p-5 h-14 w-full border-solid border-2 border-black"/>
                    <label className="text-5xl">Company</label><br></br>
                    <input onChange={handleCompanyChange} type="text" className="flex justify-center mt-5 p-5 border-solid h-14 w-full border-solid border-2 border-black"/>
                    <button type="submit" className="bg-black text-white px-10 mt-10 py-5 text-xl tracking-widest hover:bg-white hover:text-black rounded" disabled={name !== '' ? false : true}>Sign In</button>
                </form>
                <footer className="fixed bottom py-10 flex text-2xl">
                    <p>* These fields are mandatory</p>
                </footer>
            </section>
        </>
    )
}

export default SignInPage;