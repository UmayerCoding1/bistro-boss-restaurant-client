import React from "react";
import SectionTitle from "../../../shared/section-title/SectionTitle";
import { useForm } from "react-hook-form";
import { Res } from "../../../../provider/IconProvider";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_Hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image
      const menuItem = {
        name: data.recipeName,
        recipe: data.details,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };

      const menuRes = await axiosSecure.post("/menus", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.recipeName} is added to item`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
    
  };
  return (
    <div>
      <SectionTitle subHeading={"what's new"} heading={"add an item"} />

      <div className="mx-36 p-10 bg-[#e6e0e0]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="font-bold" htmlFor="name">
              Recipe name
            </label>
            <input
              {...register("recipeName", { required: true })}
              className="w-full h-16 rounded-lg font-sans pl-2 "
              placeholder="Recipe name"
            />
          </div>

          <div className="w-full flex items-center ">
            <div className="w-[50%] mt-5 mr-2">
              <label className="font-bold" htmlFor="category">
                Category
              </label>{" "}
              <br />
              <select
                {...register("category", { required: true })}
                className="w-full h-16 rounded-lg font-sans pl-2"
              >
                <option disabled value={null}>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="popular">Popular</option>   
                <option value="offered">Offered</option>   
              </select>
            </div>

            <div className="mt-5 w-[50%]">
              <label className="font-bold" htmlFor="price">
                Price
              </label>
              <br />
              <input
                type="text"
                {...register("price", { required: true })}
                className="w-full h-16 rounded-lg font-sans pl-2"
                placeholder="Price"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="font-bold" htmlFor="Recipe Details">
              Recipe Details
            </label>
            <textarea
              {...register("details", { required: true })}
              className="h-40 w-full pl-2 pt-2 font-sans rounded-lg outline-none resize-none"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="mt-5">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-ghost w-full max-w-xs"
            />
          </div>

          <div className="w-28 rounded-lg flex items-center p-3 bg-gradient-to-r from-[#835D23] to-[#B58130] text-white "><input className="" type="submit" name="" id="" /> <Res/></div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
