import React from "react";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";

const OfferedItem = ({ item, type }) => {
  const { image, name, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // TODO: send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price: parseFloat(price)
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 500,
          });
          // refetch cart to update the cart  items counts
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-full h-40" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          {type && <p className="font-bold">price: ${price}</p>}
          <div className="card-actions">
            <button
              onClick={handleAddToCart}
              className="btn bg-gray-300 text-[#BB8506] border-b-2 border-b-[#BB8506] hover:bg-black font-bold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferedItem;
