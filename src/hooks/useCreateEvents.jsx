import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCreateEvents = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: creatEvent = [] } = useQuery({
    queryKey: ["createEvent", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/specefic-event?email=${user.email}`);
      return res.data;
    },
  });
  return [creatEvent, refetch];
};

export default useCreateEvents;
