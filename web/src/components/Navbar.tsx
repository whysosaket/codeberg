import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      setDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
  return (
    <>
      <header className="header z-10 sticky top-0 bg-slate-100 dark:bg-dark1 dark:text-white shadow-md flex items-center justify-between px-8 py-02">
        {/* logo */}
        <Link to="/" className="md:w-3/12 w-4/12 p-2 flex justify-start my-auto">
          {/* <img className="fill-blue-400" height={50} width={30} src="/logo.svg" /> */}
          <Logo className={`${isDarkMode ? "fill-white" : "fill-blue-500"}`} />
          <span
            className={`${
              isDarkMode ? "text-white" : "text-blue-400"
            } my-auto font-bold`}
          >
            <span className="dark:text-blue-500">CODE</span>
            <span className="dark:text-white">berg</span>
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
          <Link to="/login" className="dark:bg-dark3 dark:hover:bg-dark4 bg-slate-200 hover:bg-slate-300 dark:text-white rounded-lg shadow-md px-4 py-2 font-semibold">
            Login
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
