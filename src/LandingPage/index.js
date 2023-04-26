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
                <div className="flex justify-between mt-5">
                    <Link to="/Login"><Button buttonText="Sign In"/></Link>
                    <Button buttonText="Sign Out"/>
                </div>
                <footer className="fixed right-5 bottom-5 ">
                    <Link to="/AdminLogin"><Button buttonText="Admin Login"/></Link>
                </footer>
            </div>
        </section>
    )
}

export default LandingPage;
