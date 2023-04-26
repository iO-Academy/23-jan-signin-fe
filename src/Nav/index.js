import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <div className="px-5 py-5 flex justify-end">
            <a onClick className="text-4xl h-24"><Link to="/">&lt;&lt;Back to Homepage</Link></a>
        </div>
    )
}

export default Nav;
