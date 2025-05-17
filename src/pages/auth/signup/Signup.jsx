const Signup = () => {
  return (
    <div className="max-w-[500px] mx-auto mt-[100px] shadow-2xl p-5 rounded-2xl ">
      <p className="text-center text-3xl font-semibold">SignUp Here...</p>
      {/* This is the form section */}
      <form className="mt-10">
        {/* This is the email section */}
        <div className="flex flex-col gap-3">
          <label className="text-base">Email</label>
          <input
            className="border border-gray-200 py-3.5 px-3.5 rounded-[10px]"
            placeholder="Email here..."
            type="email"
          />
        </div>
        {/* This is the password section */}
        <div className="flex flex-col gap-3 mt-3.5">
          <label className="text-base">Password</label>
          <input
            className="border border-gray-200 py-3.5 px-3.5 rounded-[10px]"
            placeholder="Password"
            type="password"
          />
        </div>
        {/* This is the submit button */}
        <div className="mt-3 flex justify-center">
          <button
            className="bg-blue-400 border text-white px-10 py-2.5 rounded-[10px] cursor-pointer hover:bg-white hover:border border-blue-400 hover:text-blue-400 duration-300 ease-in-out transition-all"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
