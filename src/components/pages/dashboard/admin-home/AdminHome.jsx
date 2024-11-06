import React,{PureComponent} from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "./../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Group, Wallet } from "../../../../provider/IconProvider";
import { PiChefHat } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Bar, BarChart, CartesianGrid,  XAxis, YAxis , Cell } from "recharts";




const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  

   console.log('umager');
   
  const { data: stats = [] } = useQuery({
    queryKey: ["/admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const {data: chartData=[]} = useQuery({
    queryKey: ['order-stats'],
    queryFn: async()=> {
      const res =await axiosSecure.get('/order-stats');
      return res.data;
    }
  });
  console.log(chartData);
  

// chart A
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

//  const 


  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>

      <div>
        <div className="stats shadow mx-5 ">
          <div className="stat flex bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white ">
            <button className="text-4xl">
              <Wallet />
            </button>
            <div>
              <div className="stat-value">${stats.revenue}</div>
              <div className="stat-title text-white">Revenue</div>
            </div>
          </div>
        </div>

        <div className="stats shadow mx-5 ">
          <div className="stat flex bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white ">
            <button className="text-4xl">
              <Group />
            </button>
            <div>
              <div className="stat-value">{stats.users}</div>
              <div className="stat-title text-white">Customers</div>
            </div>
          </div>
        </div>

        <div className="stats shadow mx-5 ">
          <div className="stat flex bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white ">
            <button className="text-4xl">
              <PiChefHat />
            </button>
            <div>
              <div className="stat-value">{stats.menusItem}</div>
              <div className="stat-title text-white">Products</div>
            </div>
          </div>
        </div>

        <div className="stats shadow mx-5 ">
          <div className="stat flex bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white ">
            <button className="text-4xl">
              <MdOutlineLocalShipping />
            </button>
            <div>
              <div className="stat-value">{stats.order}</div>
              <div className="stat-title text-white">Orders</div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-10 lg:flex items-center ">
          <div className="w-full h-full">
          <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
          </div>

          <div>
            
          </div>
      </div>
    </div>
  );
};

export default AdminHome;
