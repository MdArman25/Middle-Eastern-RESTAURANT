import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const AxiosPublic = useAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // const [loding, setloding] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menus")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setloding(false);
  //     });
  // }, []);
  const {
    data: menu,
    isPending: loding,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await AxiosPublic.get("/menus");
      console.log(data);
      return data;
    },
  });
  return [menu, loding, refetch];
};
export default useMenu;
