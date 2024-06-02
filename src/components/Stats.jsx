import React from "react";

const Stats = [
  { count: "3800+", label: "User Active" },
  { count: "230+", label: "Trusted By Companies" },
  { count: "$930M+", label: "Transactions" },
  { count: "20+", label: "Countries" },
];
const StatsComponent = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((stats, index) => {
            return (
              <div key={index} className="flex flex-col py-10">
                <h1 className="text-[30px] font-bold">{stats.count}</h1>
                <h2 className="font-semibold text-[16px] ">{stats.label}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
