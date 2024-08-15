import Dashboard_Tabs from "./Dashboard_Tabs";
import { Monitor, More, TrendUp, User, UserTick } from "iconsax-react";
import { Card } from "../ui/card.js";
import Dashboard_Table from "./Dashboard_Table.js";

const Dashboard_Body = () => {
  const dashboardCardData = [
    {
      icon: <User size={24} />,
      title: "Total customers",
      Stats: 2420,
      change: 20,
    },
    {
      icon: <UserTick size={24} />,
      title: "Members",
      Stats: 1210,
      change: 15,
    },
    {
      icon: <Monitor size={24} />,
      title: "Active Now",
      Stats: 316,
      change: 10,
    },
  ];

  return (
    <div className=" gap-8 flex flex-col items-start justify-start h-full">
      <div className="flex mt-6 sm:mt-12 flex-col w-full  px-8  sm:px-16 items-start gap-2 xl:gap-6">
        <h1 className="font-DM_Sans  font-semibold text-3xl">Customers</h1>
        <Dashboard_Tabs />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 w-full  px-8  sm:px-16 items-start ">
        {dashboardCardData.map((card) => {
          return (
            <Card className=" col-span-10  xl:col-span-4 h-[188px] px-4 bg-white flex flex-col items-start justify-center gap-4">
              <div className="flex w-full items-center justify-between">
                <Card className="h-10 flex items-center justify-center w-10 rounded-md">
                  {card.icon}
                </Card>
                <More className=" rotate-90  " />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col  gap-3">
                  <p className="font-inter text-sm text-[#475467]">
                    {card.title}
                  </p>
                  <h3 className="text-5xl font-semibold  font-inter ">
                    {card.Stats.toLocaleString()}
                  </h3>
                </div>
                <div className="flex font-inter mt-14 items-center gap-1.5">
                  <div className="flex gap-1">
                    <TrendUp color="#17B26A" />{" "}
                    <p className="text-[#17B26A]">{card.change}%</p>
                  </div>
                  vs <p className="text-base">last month</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <Dashboard_Table />
    </div>
  );
};

export default Dashboard_Body;
