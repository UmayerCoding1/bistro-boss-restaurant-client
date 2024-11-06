import React from "react";
import SectionTitle from "../../../shared/section-title/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import Item from "./Item";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menus,loading,refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleUpdateItem = (id) => {
        console.log(id);
        
  } 

  const handleItemDelete = (id,name) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menus/${id}`)
            console.log(res.data);
            if(res.data.deletedCount > 0){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        //   
        }
      });
      
  }
  return (
    <div>
      <SectionTitle subHeading={"hurry up"} heading={"manage all items"} />

      <div className="mx-5 p-2 bg-white" a>
        <h2 className="text-3xl">Total user : {menus.length}</h2>

        <div className="overflow-x-auto mt-5 rounded-lg">
          <table className="table ">
            <thead className="bg-[#BB8506] text-white ">
              <tr>
                <th>#</th>
                <th>item Image</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((item, i) => (
                <Item key={i} item={item} num={i + 1} handleUpdateItem={handleUpdateItem} handleItemDelete={handleItemDelete} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
