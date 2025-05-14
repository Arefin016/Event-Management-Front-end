import { Link } from "react-router";

const Navbar = () => {
  return (
    <section className="container mx-auto mt-2.5">
      <div className="flex justify-between">
        <p className="text-2xl text-blue-400 font-semibold">My Event</p>
        <Link
          to={"auth/signup"}
          className="bg-blue-400 border border-blue-400 rounded-[60px] px-10 py-2.5 text-white font-medium hover:bg-white hover:border-blue-400 hover:text-blue-400 transition-all ease-in-out duration-300"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
