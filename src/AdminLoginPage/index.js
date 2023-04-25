import Nav from "../Nav";
import {useState} from "react";

const AdminLoginPage = () => {

    const approvedCode = ['4', '0', '0', '4']
    let strRegex = /^\d+$/

    const [code, setCode] = useState([])
    const [inputFirst, setInputFirst] = useState('')
    const [inputSecond, setInputSecond] = useState('')
    const [inputThird, setInputThird] = useState('')
    const [inputFourth, setInputFourth] = useState('')

    const handleInputFirst = (e) => {
        setInputFirst(e.target.value)
        // if(!strRegex.test(inputFirst)) {
        //     console.log('invalid character')
        // } else {
        code.splice(0, 1, e.target.value);
        setCode(code)
        console.log(code)
    }

    const handleInputSecond = (e) => {
        setInputSecond(e.target.value)
        code.splice(1, 1, e.target.value)
        console.log(code)
    }

    const handleInputThird = (e) => {
        setInputThird(e.target.value)
        code.splice(2, 1, e.target.value)
        console.log(code)
    }

    const handleInputFourth = (e) => {
        setInputFourth(e.target.value)
        code.splice(3, 1, e.target.value)
        console.log(code)

    }

    if(inputFourth !== '') {
        if(approvedCode.toString() === code.toString()) {
            console.log('next page')
        } else {
            console.log('incorrect password')
            setInputFirst('')
            setInputSecond('')
            setInputThird('')
            setInputFourth('')
        }
    }

    return (
        <>
            <Nav />
            <section >
                <div className="px-64">
                    <p>Enter 4 digit passcode</p>
                </div>
                <div className="px-64">
                    <form className="">
                        <input onChange={handleInputFirst} value={inputFirst} type="password" maxLength="1" className="border-solid border-2 border-sky-500" />
                        <input onChange={handleInputSecond} value={inputSecond} type="password" maxLength="1" className="border-solid border-2 border-sky-500" disabled={inputFirst !== '' ? false : true} />
                        <input onChange={handleInputThird} value={inputThird} type="password" maxLength="1" className="border-solid border-2 border-sky-500" disabled={inputSecond !== '' ? false : true} />
                        <input onChange={handleInputFourth} value={inputFourth} type="password" maxLength="1" className="border-solid border-2 border-sky-500" disabled={inputThird !== '' ? false : true} />
                    </form>
                </div>
            </section>
        </>
    )
}

export default AdminLoginPage;
