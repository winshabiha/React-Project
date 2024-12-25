import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const list = <>
    <li><NavLink to='/'>Home</NavLink ></li>
    <li><NavLink to='/apply'>Apply</NavLink ></li>
    <li><NavLink to='/blog'>Blog</NavLink ></li>
    </>
    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl bg-gradient-to-r from-indigo-500">Career Network</Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {list} 
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-indigo-500">Button</a >
            </div>
        </div>
    );
};

export default Header;