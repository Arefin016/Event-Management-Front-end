import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { ClipLoader } from "react-spinners";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { creatUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    creatUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("User profile info updated");
          // create user information in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            photo: data.photoURL,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("User added to the database");
              reset();
              toast.success("User Created Successfully");
              navigate("/");
            }
            setLoading(false);
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="max-w-[500px] mx-auto mt-11 shadow-2xl p-5 rounded-2xl ">
      <p className="text-center text-3xl font-semibold">Sign Up Here...</p>
      {/* This is the form section */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        {/* This is the name section */}
        <div className="relative w-full mt-6">
          <input
            type="text"
            placeholder=" "
            id="name"
            {...register("name", { required: true })}
            className="peer w-full border border-gray-300 py-3.5 px-3.5 rounded-[10px] focus:outline-none focus:border-blue-500"
          />
          <label
            htmlFor="name"
            className="absolute left-3.5 -top-2.5 bg-white px-1 text-gray-500 text-sm transition-all 
             peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Name
          </label>
          {errors.name && (
            <span className="text-red-600 font-medium">Name is required</span>
          )}
        </div>
        {/* This is the Photo URL section */}
        <div className="relative w-full mt-6">
          <input
            type="text"
            placeholder=" "
            id="name"
            {...register("photoURL", { required: true })}
            className="peer w-full border border-gray-300 py-3.5 px-3.5 rounded-[10px] focus:outline-none focus:border-blue-500"
          />
          <label
            htmlFor="name"
            className="absolute left-3.5 -top-2.5 bg-white px-1 text-gray-500 text-sm transition-all 
             peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Photo URL
          </label>
          {errors.photoURL && (
            <span className="text-red-600 font-medium">
              Photo URL is required
            </span>
          )}
        </div>
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
          {/* Input wrapper with fixed height */}
          <div className="relative w-full h-[60px]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
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
          </div>
          {/* Error message */}
          {errors.password?.type === "required" && (
            <p className="text-red-600 font-medium">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600 font-medium">
              Password must be 6 characters
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-600 font-medium">
              Password must be less than 20 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600 font-medium">
              Password must have one Uppercase, one Lowercase, one Number and
              one Special characters
            </p>
          )}
        </div>
        {/* This is the submit button */}
        <div className="flex justify-center mt-2.5">
          <button
            className="bg-blue-400 border text-white px-10 py-2.5 rounded-[10px] cursor-pointer hover:bg-white hover:border border-blue-400 hover:text-blue-400 duration-300 ease-in-out transition-all flex justify-center items-center gap-2"
            type="submit"
            disabled={loading}
          >
            {loading ? <ClipLoader color="#3b82f6" size={20} /> : "SignUp"}
          </button>
        </div>
      </form>
      <p className="text-center my-3.5 text-base">
        <small>
          Already have an account?{" "}
          <Link className="text-blue-400 underline" to={"/auth/signin"}>
            Sign In
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Signup;
