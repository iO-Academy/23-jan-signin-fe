import Nav from "../Nav";
import {useState} from "react";
import {useNavigate} from "react-router";

const AdminLoginPage = ({setAdminLoggedIn}) => {

    const [code,setcode] = useState([])
    const [inputFirst, setInputFirst] = useState('')
    const [inputSecond, setInputSecond] = useState('')
    const [inputThird, setInputThird] = useState('')
    const [inputFourth, setInputFourth] = useState('')
    const navigate = useNavigate()

    const handleInputFirst = (e) => {
        setInputFirst(e.target.value)
        code.splice(0, 1, e.target.value);
        confirmCode()
    }

    const handleInputSecond = (e) => {
        setInputSecond(e.target.value)
        code.splice(1, 1, e.target.value)
        confirmCode()
    }

    const handleInputThird = (e) => {
        setInputThird(e.target.value)
        code.splice(2, 1, e.target.value)
        confirmCode()
    }

    const handleInputFourth = (e) => {
        setInputFourth(e.target.value)
        code.splice(3, 1, e.target.value)
        confirmCode()
    }

    const confirmCode = async () => {
        if (code.length === 4) {

            let res = await fetch("http://127.0.0.1:4004/verify", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    code:Number(code.join(""))
                }),
            })

            let resJson = await res.json()

            if (resJson.data[0].authenticated) {
                setAdminLoggedIn(true)
                navigate("/AdminPanel")
            } else {
                setInputFirst('')
                setInputSecond('')
                setInputThird('')
                setInputFourth('')
                setcode([])
            }
        }
    }

    return (
        <>
            <Nav />
            <section className="bg-gray-100 mx-10 py-20">
                <div className="flex justify-center py-5">
                    <p className="text-5xl">Enter 4 digit passcode</p>
                </div>
                <div className="flex justify-center">
                    <form className="py-5">
                        <input onChange={handleInputFirst} value={inputFirst} type="password" maxLength="1" className="border-solid border-2 border-black rounded-lg h-60 w-44 mx-2 px-xl text-9xl text-center align-middle" />
                        <input onChange={handleInputSecond} value={inputSecond} type="password" maxLength="1" className="border-solid border-2 border-black rounded-lg h-60 w-44 mx-2 px-10 text-9xl text-center align-middle" disabled={inputFirst !== '' ? false : true} />
                        <input onChange={handleInputThird} value={inputThird} type="password" maxLength="1" className="border-solid border-2 border-black rounded-lg h-60 w-44 mx-2 px-10 text-9xl text-center align-middle" disabled={inputSecond !== '' ? false : true} />
                        <input onChange={handleInputFourth} value={inputFourth} type="password" maxLength="1" className="border-solid border-2 border-black rounded-lg h-60 w-44 mx-2 px-10 text-9xl text-center align-middle" disabled={inputThird !== '' ? false : true} />
                    </form>
                </div>
            </section>
        </>
    )
}

export default AdminLoginPage;
