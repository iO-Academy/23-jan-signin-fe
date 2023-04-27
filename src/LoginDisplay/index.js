import {useEffect, useState} from "react";

const LoginDisplay = ({login}) => {

    const [ id , setId ] = useState('')

    // useEffect(() => {
    //     async function updateVisitor() {
    //         const manualSignOut = {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //             id: id,
    //         }),
    //     }
    //
    //         const response = await fetch('http://127.0.0.1:4004/activeSignIns', manualSignOut);
    //         const data = await response.json();
    //         setId(data.id);
    //     }
    //
    //     updateVisitor()
    // }, [])


    return (
    <table className="table-fixed w-full text-left px-20 py-10">
        <tbody>
        <tr className="text-3xl py-2">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{login.name}</th>
            <td className="px-6 py-4">{login.company}</td>
            <td className="px-6 py-4">{login.checkInTime}</td>
            <td className="flex items-baseline"><button className="bg-red-50 text-black px-10 py-5 mt-5 mb-5 text-xl hover:bg-red-500 hover:text-black rounded">Manual Sign Out</button></td>
        </tr>
        </tbody>
    </table>
    )
}

export default LoginDisplay;

