import React from "react";
import SectionTitle from "../../../shared/section-title/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import User from "./User";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: user = [] ,refetch} = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
    return res.data;      
    },
  });
  
console.log(user);

  const handleUserDelete= (id) => {
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
          axiosSecure.delete(`/users/${id}`)
          .then(res => {
              if(res.data.deletedCount > 0){
                   Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          }
          refetch()
          })
          
        }
      })
  }



  const handleMakeAdmin = (user) => {
     axiosSecure.patch(`/users/admin/${user._id}`)
     .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is a admin now`,
                showConfirmButton: false,
                timer: 1000
              });
              refetch();
        }
     })
  }

  return (
    <div>
      <div className="">
        <SectionTitle subHeading={"How many"} heading={"MANAGE ALL USERS"} />
      </div>
      <div className="mx-5 p-2 bg-white">
        <h2 className="text-3xl">Total user : {user.length}</h2>

        <div className="overflow-x-auto mt-5 rounded-lg">
          <table className="table ">
        
            <thead className="bg-[#BB8506] text-white ">
              <tr>
                <th></th>
                <th> Name</th>
                <th className="text-center">Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, i) => (
                <User key={user._id} user={user} num={i + 1} handleUserDelete={handleUserDelete} handleMakeAdmin={handleMakeAdmin}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
