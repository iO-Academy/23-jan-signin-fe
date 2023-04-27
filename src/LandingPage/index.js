import {Link} from "react-router-dom";
import Button from "../Button";
import Header from "../Header";

const LandingPage = () => {

    return (
        <section className="flex flex-wrap h-screen justify-center items-center">
            <div className="w-8/12">
                <div className="w-full p-10 text-center shadow-lg bg-gray-100">
                    <Header headerText="Woodchuck Office"/>
                </div>
                <div className="px-64 flex justify-between mt-5">
                    <Link to="/Login"><Button buttonText="Sign In"/></Link>
                    <Link to="/Logout"><Button buttonText="Sign Out"/></Link>
                </div>
                <footer className="fixed right-10 bottom-10 ">
                    <Link to="/AdminLogin"><Button buttonText="Admin Login"/></Link>
                </footer>
            </div>
        </section>
    )
}

export default LandingPage;
