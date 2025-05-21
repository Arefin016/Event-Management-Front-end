import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    singIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-[500px] mx-auto mt-[100px] shadow-2xl p-5 rounded-2xl ">
      <p className="text-center text-3xl font-semibold">Login Here</p>
      {/* This is the form section */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        {/* This is the email section */}
        <div className="relative w-full mt-6">
          <input
            type="email"
            placeholder=" "
            id="email"
            {...register("email", { required: true })}
            className="peer w-full border border-gray-300 py-3.5 px-3.5 rounded-[10px] focus:outline-none focus:border-blue-500"
          />
          <label
            htmlFor="email"
            className="absolute left-3.5 -top-2.5 bg-white px-1 text-gray-500 text-sm transition-all 
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
               peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Email
          </label>
          {errors.email && (
            <span className="text-red-600 font-medium">Email is required</span>
          )}
        </div>
        {/* This is the password section */}
        <div className="relative w-full mt-6">
          <div className="relative w-full h-[60px]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              id="password"
              {...register("password", { required: true })}
              className="peer w-full border border-gray-300 py-3.5 px-3.5 pr-10 rounded-[10px] focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="password"
              className="absolute left-3.5 -top-2.5 bg-white px-1 text-gray-500 text-sm transition-all 
                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
            >
              Password
            </label>
            <div
              className="absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
            {errors.password && (
              <span className="text-red-600 font-medium">
                Password is required
              </span>
            )}
          </div>
        </div>
        {/* This is the submit button */}
        <div className="flex justify-center mt-2.5">
          <button
            className="bg-blue-400 border text-white px-10 py-2.5 rounded-[10px] cursor-pointer hover:bg-white hover:border border-blue-400 hover:text-blue-400 duration-300 ease-in-out transition-all flex justify-center items-center gap-2"
            type="submit"
            disabled={loading}
          >
            {loading && <ClipLoader color="#3b82f6" size={20} />}{" "}
            {/* spinner color and size */}
            {!loading && "Login"}
          </button>
        </div>
      </form>
      <p className="text-center my-3.5 text-base">
        <small>
          New Here?{" "}
          <Link className="text-blue-400 underline" to={"/auth/signup"}>
            Create an account
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Signin;
