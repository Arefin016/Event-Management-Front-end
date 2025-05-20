import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useViewEvents = () => {
  const axiosPublic = useAxiosPublic();

  const { data: viewEvent = [] } = useQuery({
    queryKey: ["viewEvents"],
    queryFn: async () => {
      const res = await axiosPublic.get("/create-event");
      return res.data;
    },
  });
  return [viewEvent];
};

export default useViewEvents;
