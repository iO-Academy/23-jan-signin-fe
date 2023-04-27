
const LoginDisplay = ({login}) => {

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
                navigate('/SignedIn')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
    <table className="table-fixed w-full text-left px-20 py-10">
        <tbody>
        <tr className="text-3xl py-2">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{login.name}</th>
            <td className="px-6 py-4" key={login.company}>{login.company}</td>
            <td className="px-6 py-4" key={login.checkInTime}>{login.checkInTime}</td>
            <td className="flex items-baseline"><button className="bg-red-50 text-black px-10 py-5 mt-5 mb-5 text-xl hover:bg-red-500 hover:text-black rounded">Manual Sign Out</button></td>
        </tr>
        </tbody>
    </table>
    )
}

export default LoginDisplay;

