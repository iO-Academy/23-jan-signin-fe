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
            <section className="bg-gray-100 mx-10  justify-center">
                {activeLogins.data?.map((login) => <LoginDisplay login={login} />)}
            </section>
            <div className="flex justify-center py-5">
                <Link to="/"><Button buttonText="Sign Out"/></Link>
            </div>
        </>
    )
}

export default AdminPanelPage;
