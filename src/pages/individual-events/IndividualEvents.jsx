import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCreateEvents from "../../hooks/useCreateEvents";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router";

const IndividualEvents = () => {
  const [createEvent, refetch] = useCreateEvents();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/specefic-event/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = createEvent.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(createEvent.length / itemsPerPage);

  return (
    <section className="mx-5 h-[100vh]">
      <h2 className="text-3xl font-semibold text-center mb-5">My Events</h2>
      {currentEvents.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No events found.
        </p>
      ) : (
        <>
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
              >
                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                  {event.name}
                </h2>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Location: {event.location}</p>
                </div>

                {event.email === user?.email && (
                  <div className="mt-4 flex gap-2">
                    <Link
                      to={`/update-event/${event._id}`}
                      className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination UI */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:bg-gray-200 cursor-pointer"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded border ${
                  currentPage === page ? "bg-blue-500 text-white" : ""
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:bg-gray-200 cursor-pointer"
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default IndividualEvents;
