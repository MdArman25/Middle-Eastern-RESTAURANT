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
        <div className="mt-10">
            {
                tittle&& <Cover img={img} tittle={tittle}></Cover> 
            }
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                <br />
                <Link to={`/shop/${tittle}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD </button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default FoodCard;
