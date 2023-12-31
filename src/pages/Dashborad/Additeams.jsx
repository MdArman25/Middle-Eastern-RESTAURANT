import { useForm } from "react-hook-form";

import { FaUtensils } from "react-icons/fa";

import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxios from "../../Hooks/useAxios";
import BackToTop from "../../Hooks/usetop";
import axios from "axios";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import axios from "axios";

// const image_hosting_key = import.meta.env.image_hosting_api;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=2096348e81bc39817643de553a77e7db`;
// const api_key ="2096348e81bc39817643de553a77e7db"

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
    // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const onSubmit = async (data) => {
    console.log(data.image);
    // image upload to imgbb and then get an url
    // const image = { image: data.image[0] };
    // console.log(image);
    // const formData = new FormData()
    // formData.append('image', image)
    // console.log(image);
    // const res= await axios.post(
    //   `https://api.imgbb.com/1/upload?key=${api_key}`,
    //   formData
    // )
    // console.log(res);
    // const formData = new FormData()
    // formData.append('image', imageFile)

    //     const res = await axios.post(image_hosting_api, imageFile, {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     });
        // console.log(res );
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: data.display_url,
      };
      //
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
  
  };

  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
      <BackToTop></BackToTop>
    </div>
  );
};

export default AddItems;
