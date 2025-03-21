import CustomCard from "@/components/CustomCard";
import { promiseData } from "@/services";
import { use } from "react";

const Clothing = () => {
  const data = use(promiseData);

  const clothingData = data.filter((e: any) =>
    e?.category?.split(" ").includes("clothing")
  );

  return (
    <div className="w-[1280px] m-auto h-full">
      <h4 className="m-5 font-bold text-2xl">Clothing for Men and Women</h4>
      <div className="py-5">
        <CustomCard data={clothingData} />
      </div>
    </div>
  );
};

export default Clothing;
