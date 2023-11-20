import {useQuery} from '@tanstack/react-query';
import Context from './useContext';
import useAxios from './useAxios';


const useAdmin = () => {
    const {user}=Context()
    // const [admin,setAdmin]=useState()
    const axiosSecure = useAxios()
    // console.log(user);
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        // console.log()
        queryKey: ["requestAdmin",user?.email],
//         queryFn: () =>
//         fetch(`http://localhost:5000/admin/${user?.email}`,{credentials:'include'}).then(res=>res.json())
//     .then(data=>{
//         console.log(data);
// return data
//     }
//     )
queryFn: async () => {
    const res = await axiosSecure.get(`/admin/${user?.email}`);
    console.log(res.data);
    return res.data;
}

})
    return [isAdmin, isAdminLoading]
};

export default useAdmin;