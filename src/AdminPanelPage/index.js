import {Link} from "react-router-dom";
import Button from "../Button";

const AdminPanelPage = () => {

    return (
        <section >
           <li>John</li><Button buttonText="Sign Out"/>
            <Link to="/"><Button buttonText="Sign Out"/></Link>
        </section>
    )
}

export default AdminPanelPage;
