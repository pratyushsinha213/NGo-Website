import { Link } from 'react-router-dom';
import NGOLogo from '../assets/NGOlogo.svg'

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-slate-500 sticky w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600 p-5">
            <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto text-white space-x-6">
                <li>
                    <Link to="/">
                        <img src={NGOLogo} alt='NGO Logo' />
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-gray-700 dark:text-white hover:font-bold hover:text-slate-800 hover:border-white transition duration-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about-us" className="text-gray-700 dark:text-white hover:font-bold hover:text-slate-800 hover:border-white transition duration-200">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="text-gray-700 dark:text-white hover:font-bold hover:text-slate-800 hover:border-white transition duration-200">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/get-involved" className="text-gray-700 dark:text-white hover:font-bold hover:text-slate-800 hover:border-white transition duration-200">
                        Get Involved
                    </Link>
                </li>
                <li>
                    <Link to="/events" className="text-gray-700 dark:text-white hover:font-bold hover:text-slate-800 hover:border-white transition duration-200">
                        Events
                    </Link>
                </li>
                <li>
                    <Link to="/blog" className="text-gray-700 dark:text-white hover:font-bold hover:text-slate-800 hover:border-white transition duration-200">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/contact-us" className="text-gray-700 dark:text-white hover:font-bold hover:text-slate-800 hover:border-white transition duration-200">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
