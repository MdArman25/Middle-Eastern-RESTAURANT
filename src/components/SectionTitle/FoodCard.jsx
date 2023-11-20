import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Context from "../../Hooks/useContext";
import Swal from "sweetalert2";

import { axiosSecure } from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";
const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = Context();
  const location = useLocation();
  const navigate = useNavigate();
  const [,refetch]=useCart()
  // console.log(refetch);
  const handleAddCart = (food) => {
    console.log(food);
    if (user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
        recipe,
      };
      axiosSecure.post("/Addcart", cartItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "please Login to add to this cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl text-center">
        <p className="bg-gray-600 w-10 rounded absolute text-white right-10 top-1 ">
          {price}
        </p>
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title  mx-auto">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddCart(item)}
              style={{ borderRadius: "8px" }}
              className="btn btn-ghost border-b-[#BB8506] text-[#BB8506] bg-[#E8E8E8] "
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
