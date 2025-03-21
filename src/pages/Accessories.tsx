import CustomCard from "@/components/CustomCard";
import { promiseData } from "@/services";
import { use } from "react";

const Accessories = () => {
  const data = use(promiseData);

  const accessoriesData = data.filter(
    (e: any) => !e?.category?.split(" ").includes("clothing")
  );

  return (
    <div className="w-[1280px] m-auto h-full">
      <h4 className="m-5 font-bold text-2xl">Accessories Products</h4>
      <div className="py-5">
        <CustomCard data={accessoriesData} />
      </div>
    </div>
  );
};

export default Accessories;
