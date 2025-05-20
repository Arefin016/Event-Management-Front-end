import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCreateEvents from "../../hooks/useCreateEvents";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
const [createEvent, refetch] = useCreateEvents();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = [
    {
      path: "/event",
      title: "All Events",
    },
    {
      path: "/create-event",
      title: "Create Event",
    },
    {
      path: "/save-event",
      title: (
        <div className="relative">
          <FaCartPlus className="text-xl text-blue-500" />
          <span className="absolute -top-3 -right-3.5 bg-red-600 text-white text-xs font-bold px-1.5 rounded-full">
            {createEvent.length}
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="container mx-auto mt-2.5">
      <div className="flex justify-between">
        <p className="text-2xl text-blue-400 font-semibold">My Event</p>

        <ul className="hidden xl:flex items-center gap-6">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-400 font-semibold" : "text-gray-600"
                  } hover:text-blue-400 transition`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {user ? (
          <>
            <div className="space-x-1.5">
              <span>{user?.displayName}</span>
              <button
                onClick={handleLogOut}
                className="bg-blue-400 border border-blue-400 rounded-[60px] px-10 py-2.5 cursor-pointer text-white font-medium hover:bg-white hover:border-blue-400 hover:text-blue-400 transition-all ease-in-out duration-300"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link
              to={"auth/signin"}
              className="bg-blue-400 border border-blue-400 rounded-[60px] px-10 py-2.5 cursor-pointer text-white font-medium hover:bg-white hover:border-blue-400 hover:text-blue-400 transition-all ease-in-out duration-300"
            >
              LogIn
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Navbar;
