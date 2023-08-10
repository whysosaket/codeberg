import { Link } from "react-router-dom";
import Logo from "../assets/logo";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { selectUser, logout } from "@/features/user/UserSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(user.isLogged);
  }, [user.isLogged]);
  return (
    <>
      <header className="header z-10 sticky top-0 bg-slate-100 dark:bg-dark1 dark:text-white shadow-md flex items-center justify-between px-8 py-02">
        {/* logo */}
        <Link
          to="/"
          className="md:w-3/12 w-6/12 p-2 flex justify-start my-auto"
        >
          {/* <img className="fill-blue-400" height={50} width={30} src="/logo.svg" /> */}
          <Logo />
          <span className={`my-auto font-bold`}>
            <span className="text-blue-500">CODE</span>
            <span className="text-white bg-blue-500 dark:bg-transparent dark:text-white">
              berg
            </span>
          </span>
        </Link>
        {/* navigation */}
        <nav className="nav font-semibold text-lg hidden md:block">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>
        {/* buttons -*/}
        <div className="w-6/12  md:w-3/12 flex justify-end">
          {!user.isLogged ? (
            <Link
              to="/login"
              className="dark:bg-dark3 dark:hover:bg-dark4 bg-slate-200 hover:bg-slate-300 dark:text-white rounded-lg shadow-md px-4 py-2 font-semibold"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
              className="dark:bg-dark3 dark:hover:bg-dark4 bg-slate-200 hover:bg-slate-300 dark:text-white rounded-lg shadow-md px-4 py-2 font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
