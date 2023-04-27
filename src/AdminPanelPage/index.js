import {Link} from "react-router-dom";
import Button from "../Button";
import {useEffect, useState} from "react";
import LoginDisplay from "../LoginDisplay";
import {useNavigate} from "react-router";

const AdminPanelPage = ({adminLoggedIn}) => {

    const [activeLogins, setActiveLogins] = useState([])
    const navigate = useNavigate()


    if(!adminLoggedIn) {
        navigate('/')
    }

        useEffect(() => {
            const getSignIns = async () => {
                let res = await fetch("http://127.0.0.1:4004/activeSignIns")
                let activeLogins = await res.json()
                setActiveLogins(activeLogins)
            }
            getSignIns()

        }, [])

    return (
        <>
            <h1 className="text-5xl flex justify-center py-10">Visitors</h1>
            <section className="bg-gray-100 mx-10 px-64 justify-center">
                <table className="table-fixed w-full text-left px-20 py-10">
                    <thead>
                        <tr className="text-3xl py-2">
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Name</th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Company</th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Check In Time</th>
                            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Sign Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activeLogins.data?.map((login, index) => <LoginDisplay key={index} login={login} />)}
                    </tbody>
                </table>
            </section>
            <div className="flex justify-center py-5">
                <Link to="/"><Button buttonText="Sign Out"/></Link>
            </div>
        </>
    )
}

export default AdminPanelPage;
