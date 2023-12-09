import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUsers = () => {
    const axiosSecure = useAxios()
    const { data: users, refetch, isLoading} = useQuery({
        queryKey: ["Users"],
        // enabled:!isLoading,
        queryFn: async () => {
          const res = await axiosSecure.get("/Users");
          console.log(res.data)
        return res.data
        },
      });
    return ([users,refetch,isLoading])
};

export default useUsers;