import CustomCard from "@/components/CustomCard";
import { use } from "react";

const fetchData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fectch!");
  return await res.json();
};

const promiseData = fetchData();

const Dashboard = () => {
  const data = use(promiseData);

  console.log({ "data...": data });
  return (
    <div className="w-[1280px] m-auto h-full">
      <h4 className="m-5 font-bold text-2xl">Clothing for Men and Women</h4>
      <div className="py-5">
        <CustomCard data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
