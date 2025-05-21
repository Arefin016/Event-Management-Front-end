const Home = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Event Management System
          </h1>
          <p className="text-lg mb-8">
            Manage your events efficiently and effortlessly. Create, update, and
            track all your events in one place.
          </p>
          <button className="bg-blue-600 border text-white font-semibold px-8 py-3 rounded-lg transition hover:bg-white hover:text-blue-400 cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Event Banner"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
