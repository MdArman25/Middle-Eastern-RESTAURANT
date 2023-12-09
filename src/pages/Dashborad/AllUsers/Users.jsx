
// import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers";
import BackToTop from "../../../Hooks/usetop";

const Users = () => {
  const axiosSecure = useAxios();
  const [users,refetch] =useUsers()
//   const { data: users, refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/Users");
//     //   console.log(res.data,data)
//       return res.data;
//     },
//   });
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const HandleMakeAdmin = (user) => {
    axiosSecure.patch(`users/admin/${user?._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user?.name} is an Admin Now `,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-5">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users {users?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              // console.log(user),
              <tr key={user._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {" "}
                  {user?.role ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => HandleMakeAdmin(user)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaUsers className="text-red-600"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user?._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <BackToTop></BackToTop>
    </div>
  );
};

export default Users;
