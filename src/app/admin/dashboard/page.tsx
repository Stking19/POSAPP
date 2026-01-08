"use client";

import { JSX } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
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
  upDownIcon: JSX.Element;
}[] = [
  {
    title: "Total Sales",
    amount: 1200000,
    percentage: "+ 20%",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icons: <RiShoppingCartFill />,
    date: "This month",
    upDownIcon: <FiArrowUp />,
  },
  {
    title: "Total Orders",
    amount: 1247,
    percentage: "+ 8.2%",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icons: <RiShoppingBagFill />,
    date: "This month",
    upDownIcon: <FiArrowUp />,
  },
  {
    title: "Products",
    amount: 328,
    percentage: "out of stock",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    icons: <RiBox3Fill />,
    date: "This month",
    upDownIcon: <FiArrowDown />,
  },
  {
    title: "Cashiers",
    amount: 12,
    percentage: "+ 10%",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icons: <RiGroupFill />,
    date: "This month",
    upDownIcon: <FiArrowUp />,
  },
];

const prodSoldData: { product: string; sold: number; range: number }[] = [
  { product: "Coffee Maker", sold: 345, range: 100 },
  { product: "Blender", sold: 379, range: 70 },
  { product: "Toaster", sold: 238, range: 60 },
  { product: "Kettle", sold: 184, range: 50 },
  { product: "Microwave", sold: 179, range: 40 },
];

const recentActivityData: {
  productName: string;
  amount: number;
  date: string;
  status: string;
  statusColor: string;
  textColor: string;
}[] = [
  {
    productName: "Wireless Earbuds",
    amount: 12000,
    date: "10/25, 10:30 AM",
    status: "Completed",
    statusColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    productName: "Smart Watch",
    amount: 125000,
    date: "10/24, 9:45 AM",
    status: "Completed",
    statusColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    productName: "Desk Lamp",
    amount: 65000,
    date: "10/24, 9:45 AM",
    status: "Processing",
    statusColor: "bg-blue-100",
    textColor: "text-blue-500",
  },
  {
    productName: "Bluetooth Speaker",
    amount: 80500,
    date: "10/23, 3:20 PM",
    status: "Completed",
    statusColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    productName: "Laptop Stand",
    amount: 3200,
    date: "10/22, 11:15 AM",
    status: "Cancelled",
    statusColor: "bg-red-100",
    textColor: "text-red-500",
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
            <div className="w-[60%] h-full flex flex-col gap-1 justify-center">
              <p className="text-md text-gray-500">{data.title}</p>
              <h1 className="text-[26px] font-bold">
                {data.amount.toLocaleString()}
              </h1>
              <button
                className={`w-max h-max ${data.bgColor} ${data.textColor} flex items-center gap-1 text-sm px-1.5 py-0.5 rounded-sm`}
              >
                {data.upDownIcon}
                {data.percentage}
              </button>
            </div>
            <div className="w-[40%] h-full flex pt-2 flex-col justify-between items-end">
              <div className="w-11 h-11 cursor-pointer rounded-full text-blue-600 text-2xl bg-blue-50 flex items-center justify-center">
                {data.icons}
              </div>
              <p className="text-sm text-gray-400 pb-3">{data.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-88 mt-5 justify-between flex">
        <div className="w-[58%] h-full bg-white shadow-md rounded-lg"></div>
        <div className="w-[40%] h-full bg-white shadow-md rounded-lg flex items-center justify-center">
          <div className="w-[90%] h-[90%] flex flex-col">
            <h2 className="text-xl font-bold">Top Products</h2>
            {prodSoldData.map((data, index) => (
              <div
                className="w-full h-max flex flex-col mt-3 gap-1.5"
                key={index}
              >
                <span className="flex justify-between">
                  <p className="font-medium">{data.product}</p>
                  <p className="text-gray-500">{data.sold} Sold</p>
                </span>
                <div className="w-full h-3 bg-gray-100 rounded-lg">
                  <div
                    className="h-3 bg-blue-700 rounded-lg transition-all duration-700"
                    style={{ width: `${data.range}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-max flex flex-col bg-white border-b-0 border-2 border-gray-300 shadow-md rounded-t-lg mt-6">
        <div className="w-full h-17 flex items-center pl-4">
          <h3 className="text-[18px] font-bold text-gray-700">Recent Activity</h3>
        </div>
        <div className="w-full h-10 flex items-center px-4 border-b border-gray-300 bg-gray-100 text-[16px] text-gray-500 font-medium">
          <p className="w-[33%]">Product Name</p>
          <p className="w-[23%]">Amount</p>
          <p className="w-[28%]">Date</p>
          <p className="">Status</p>
        </div>
        {recentActivityData.map((data, index) => (
          <div
            className="w-full h-11 flex border-b border-gray-300 items-center px-4 bg-white text-[15px] text-gray-500 font-bold"
            key={index}
          >
            <p className="w-[33%]">{data.productName}</p>
            <p className="w-[23%]">{data.amount}</p>
            <p className="w-[28%]">{data.date}</p>
            <p
              className={` ${data.statusColor} ${data.textColor} h-max w-max py-0.5 px-2.5 rounded-xl`}
            >
              {data.status}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
