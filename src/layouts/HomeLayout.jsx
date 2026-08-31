import Footer from "../components/Footer";
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../redux/slices/authSlice";

function HomeLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state) => state?.auth?.role);

    function chageWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function closeDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 0;
    }

    async function onLogout(e) {
        e.preventDefault();
        const response = await dispatch(logout());
        if (response?.payload?.data) {
            navigate("/");
        }
    }

    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-full">
                <input id='my-drawer' type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer">
                        <FiMenu onClick={chageWidth} size={"32px"} className="font-bold text-white m-4 cursor-pointer" />
                    </label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={closeDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        {isLoggedIn && role === "ADMIN" && (
                            <>
                                <li>
                                    <Link to='/admin/dashboard'>Admin Dashboard</Link>
                                </li>
                                <li>
                                    <Link to='/course/create'>Create Course</Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/courses'>Courses</Link>
                        </li>
                        <li>
                            <Link to='/doubtsupport'>Ask Doubt</Link>
                        </li>

                        {!isLoggedIn ? (
                            <li className="absolute bottom-4 w-[90%] left-[5%]">
                                <div className="w-full flex items-center justify-between gap-2 p-0">
                                    <Link 
                                        to='/signin' 
                                        className="btn btn-primary px-4 py-2 font-semibold rounded-md w-1/2 text-center text-white"
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        to='/signup' 
                                        className="btn btn-secondary px-4 py-2 font-semibold rounded-md w-1/2 text-center text-white"
                                    >
                                        Signup
                                    </Link>
                                </div>
                            </li>
                        ) : (
                            <li className="absolute bottom-4 w-[90%] left-[5%]">
                                <div className="w-full flex items-center justify-between gap-2 p-0">
                                    <Link 
                                        to='/user/profile' 
                                        className="btn btn-primary px-4 py-2 font-semibold rounded-md w-1/2 text-center text-white"
                                    >
                                        Profile
                                    </Link>
                                    <button 
                                        onClick={onLogout} 
                                        className="btn btn-secondary px-4 py-2 font-semibold rounded-md w-1/2 text-center text-white"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>  
            {children}
            <Footer />         
        </div>
    );
}

export default HomeLayout;