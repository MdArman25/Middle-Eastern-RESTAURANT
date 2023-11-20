/* eslint-disable no-unused-vars */
import {useQuery} from '@tanstack/react-query';
import Context from './useContext';
import useAxios from './useAxios';
const useCart = () => {
    const {user}=Context()
    const axiosSecure =useAxios()
    // console.log("uaera in carts",user);
   const {data,refetch}= useQuery({
    queryKey:['Carts',user?.email],
    queryFn:async()=>{
const res = await axiosSecure.get(`/Carts?email=${user?.email}`)
return res.data;

    }
   })
    return ( [data,refetch])
};

export default useCart;