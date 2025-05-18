import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <section className="container mx-auto mt-2.5">
      <div className="flex justify-between">
        <p className="text-2xl text-blue-400 font-semibold">My Event</p>

        <Link to={"/event"}>Event</Link>

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
