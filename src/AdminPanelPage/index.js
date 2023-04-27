import {Link} from "react-router-dom";
import Button from "../Button";
import {useEffect, useState} from "react";
import LoginDisplay from "../LoginDisplay";

const AdminPanelPage = ({key}) => {

    const [activeLogins, setActiveLogins] = useState([])

    useEffect( () => {
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

                {activeLogins.data?.map((login) => <LoginDisplay key={key} login={login} />)}
            </section>
            <div className="flex justify-center py-5">
                <Link to="/"><Button buttonText="Sign Out"/></Link>
            </div>
        </>
    )
}

export default AdminPanelPage;
