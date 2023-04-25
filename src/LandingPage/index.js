import {Link} from "react-router-dom";
import Button from "../Button";
import Header from "../Header";

const LandingPage = () => {

    return (
        <section >
            <Header headerText="Woodchuck Office"/>
            <div className="px-64 flex justify-between">
                <Link to="/Login"><Button buttonText="Sign In"/></Link>
                <Button buttonText="Sign Out"/>
            </div>
            <footer className="py-64 px-10 flex justify-end">
                <Link to="/AdminLogin"><Button buttonText="Admin Login"/></Link>
            </footer>
        </section>
    )
}

export default LandingPage;
