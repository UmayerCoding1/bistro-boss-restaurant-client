
import { useEffect, useState } from "react";

import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menus,setMenus]=useState([]);
    // const [loading,setLoading]=useState(true);
    // const axiosPublic = useAxiosPublic();
    // useEffect(() => {
    //     setLoading(true)
    //     axiosPublic('/menus')
    //     .then(res => {
    //         setMenus(res.data)
    //       setLoading(false)
    //     })
    // },[])

    const {data: menus=[],isPending:loading,refetch}= useQuery({
        queryKey: ['menu'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/menus');
            return res.data;
        }
    })

    
    return [menus, loading,refetch] ;
}

export default useMenu;