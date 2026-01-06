"use client";

import { JSX } from "react";
import {
  RiShoppingCartFill,
  RiShoppingBagFill,
  RiBox3Fill,
  RiGroupFill,
} from "react-icons/ri";


const statsCardData: {
  title: string;
  amount: number;
  percentage: string;
  bgColor: string;
  textColor: string;
  icons: JSX.Element;
  date: string;
}[] = [
  {
    title: "Total Sales",
    amount: 1200000,
    percentage: "+ 20%",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icons: <RiShoppingCartFill />,
    date: "This month"
  },
  {
    title: "Total Orders",
    amount: 1247,
    percentage: "+ 8.2%",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icons: <RiShoppingBagFill />,
    date: "This month"
  },
  {
    title: "Products",
    amount: 328,
    percentage: "out of stock",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    icons: <RiBox3Fill />,
    date: "This month"
  },
  {
    title: "Cashiers",
    amount: 12,
    percentage: "+ 10%",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icons: <RiGroupFill />,
    date: "This month"
  },
];

export default function AdminDashboard() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-NG", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="w-max h-18 flex flex-col">
        <h1 className="text-[19px] text-gray-600 font-bold">
          Welcome back, Administrator 👋
        </h1>
        <p className="text-gray-600">{formattedDate}</p>
      </div>
      <div className="w-full h-37 flex gap-4">
        {statsCardData.map((data, index) => (
          <div
            className="w-1/4 h-full bg-white rounded-lg shadow-md p-4 flex justify-between"
            key={index}
          >
            <div className="w-[70%] h-full flex flex-col gap-1 justify-center">
              <p className="text-md text-gray-500">{data.title}</p>
              <h1 className="text-[26px] font-bold">
                {data.amount.toLocaleString()}
              </h1>
              <p className="text-sm text-gray-400">{data.date}</p>
              <button
                className={`w-max h-max ${data.bgColor} ${data.textColor} text-sm px-1.5 py-0.5 rounded-sm`}
              >
                {data.percentage}
              </button>
            </div>
            <div className="w-[30%] h-full flex justify-end pt-2">
              <div className="w-11 h-11 cursor-pointer rounded-full text-blue-600 text-2xl bg-blue-50 flex items-center justify-center">{data.icons}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
