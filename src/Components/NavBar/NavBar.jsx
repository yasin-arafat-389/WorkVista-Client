import React from "react";
import { IconButton, Collapse } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import useAuth from "../../Hooks/useAuth";
import ProfileMenu from "./ProfileMenu";

export function NavBar() {
  let { user } = useAuth();

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className="flex items-center text-[16px] font-bold ">
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="flex items-center text-[16px] font-bold ">
        <NavLink to="/add-job">Add Job</NavLink>
      </div>

      <div className="flex items-center text-[16px] font-bold ">
        <NavLink to="/my-posted-jobs">My Posted Jobs</NavLink>
      </div>

      <div className="flex items-center text-[16px] font-bold ">
        <NavLink to="/my-bids">My Bids</NavLink>
      </div>

      <div className="flex items-center text-[16px] font-bold ">
        <NavLink to="/bid-requests">Bid Requests</NavLink>
      </div>
    </ul>
  );

  return (
    <nav className="w-full bg-[#eef1f3] shadow-xl px-4 py-2 lg:px-8 lg:py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img
          src="https://i.ibb.co/H75CRnK/workvista-logo-removebg-preview.png"
          className="w-[40%] md:w-[25%] lg:w-[18%]"
        />
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden md:hidden lg:flex items-center gap-x-1">
          {user ? (
            <ProfileMenu />
          ) : (
            <Link to="/login">
              <button className="loginButton">
                Sign In
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            {user ? (
              <ProfileMenu />
            ) : (
              <Link to="/login">
                <button className="loginButton">
                  Sign In
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            )}
          </div>
        </div>
      </Collapse>
    </nav>
  );
}
