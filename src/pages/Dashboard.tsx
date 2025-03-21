import CustomCard from "@/components/CustomCard";
import { promiseData } from "@/services";
import { use } from "react";

const Dashboard = () => {
  const data = use(promiseData);

  const clothingData = data
    .filter((e: any) => e?.category?.split(" ").includes("clothing"))
    .slice(0, 8);

  const accessoriesData = data
    .filter((e: any) => !e?.category?.split(" ").includes("clothing"))
    .slice(0, 8);

  return (
    <div className="w-[1280px] m-auto h-full">
      <h4 className="m-5 font-bold text-2xl">Clothing for Men and Women</h4>
      <div className="py-5">
        <CustomCard data={clothingData} />
      </div>
      <h4 className="m-5 font-bold text-2xl">Accessories Products</h4>
      <div className="py-5">
        <CustomCard data={accessoriesData} />
      </div>
    </div>
  );
};

export default Dashboard;
