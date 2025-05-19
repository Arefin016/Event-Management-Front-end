import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCreatEvents = (data) => {
    const newEvent = {
      name: data.eventName,
      date: data.date,
      time: data.time,
      location: data.location,
      description: data.description,
    };
    console.log(newEvent);

    fetch("http://localhost:5000/create-event", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Create Event Successfully");
          reset();
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-center text-blue-400 mb-6 mt-2.5">
        Create New Event
      </h2>

      <form
        onSubmit={handleSubmit(handleCreatEvents)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Event Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Event Name
          </label>
          <input
            {...register("eventName", { required: "Event name is required" })}
            placeholder="Enter event name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.eventName && (
            <p className="text-red-500 text-sm">{errors.eventName.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Time</label>
          <input
            type="time"
            {...register("time", { required: "Time is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Location
          </label>
          <input
            {...register("location", { required: "Location is required" })}
            placeholder="Enter location"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
            })}
            rows="4"
            placeholder="Write event description..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
