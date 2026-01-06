"use client";

import {
  FiBarChart2,
  FiFileText,
  FiHome,
  FiSettings,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

export default function sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, link: "/admin/dashboard" },
    { name: "Products", icon: <FiShoppingCart />, link: "/admin/products" },
    { name: "Sales", icon: <FiBarChart2 />, link: "/admin/sales" },
    { name: "Cashiers", icon: <FiUsers />, link: "/admin/users" },
    { name: "Reports", icon: <FiFileText />, link: "/admin/reports" },
    { name: "Settings", icon: <FiSettings />, link: "/admin/settings" },
  ];

  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className=" w-[19%] h-screen flex flex-col gap-6 pl-4 py-2">
        <div className="w-full h-[10%] flex items-center p-3">
          <h2 className="font-bold text-xl">KingStore</h2>
        </div>
        <div className="w-full h-[90%] pr-4 flex flex-col">
          {menuItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <div
                className={`w-full h-12 ${
                  isActive ? "bg-white" : "bg-transparent shadow-none"
                }  rounded-md shadow-md flex items-center cursor-pointer`}
                key={item.link}
                onClick={() => router.push(item.link)}
              >
                <div
                  className={`w-1 h-[80%] ${
                    isActive ? "bg-blue-800" : "bg-transparent"
                  } rounded-r-4xl`}
                ></div>
                <span
                  className={`ml-4 flex gap-3 items-center text-xl ${
                    isActive ? "text-black" : "text-gray-600"
                  }`}
                >
                  {item.icon}
                  <p className="text-sm font-medium">{item.name}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
