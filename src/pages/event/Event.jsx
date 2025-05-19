import { Link } from "react-router";
import useViewEvents from "../../hooks/useViewEvents";

const Event = () => {
  const [viewEvent] = useViewEvents();
  return (
    <section>
      <div>
        <p className="text-center text-3xl font-semibold ">View All Event </p>

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {viewEvent.map((view, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 ease-in-out cursor-pointer"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-2">
                {view.name}
              </h2>
              <p className="text-gray-600 mb-3">{view.description}</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>Date: {view.date}</p>
                <p>Time: {view.time}</p>
                <p>Location: {view.location}</p>
              </div>
              <div className="mt-5">
                <Link
                  to="/create-event"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Create Event
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
