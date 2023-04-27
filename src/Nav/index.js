import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <div className="px-5 py-5 flex justify-end">
            <div className="px-5 py-5 flex justify-end text-4xl h-24"><Link to="/">&lt;&lt;Back to Homepage</Link></div>
        </div>
    )
}

export default Nav;
