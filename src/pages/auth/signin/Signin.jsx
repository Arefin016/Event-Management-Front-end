const Signin = () => {
  return (
    <div className="max-w-[500px] mx-auto mt-5 shadow-2xl p-5 rounded-2xl">
      <p className="text-center text-3xl font-semibold">Login Here</p>
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
            type="email"
          />
        </div>
      </form>
    </div>
  );
};

export default Signin;
