"use client";

import Image from "next/image";
import { useState } from "react";
import { BsArrowsVertical } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoPricetagOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { TbCancel } from "react-icons/tb";

export default function Products() {
  const [openActions, setOpenActions] = useState<number | null>(null);
  const [openDirection, setOpenDirection] = useState<"up" | "down">("down");

  const handleActions = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;

    // estimated dropdown height
    const dropdownHeight = 180;

    if (spaceBelow < dropdownHeight) {
      setOpenDirection("up");
    } else {
      setOpenDirection("down");
    }

    setOpenActions(index === openActions ? null : index);
  };

  const productData: {
    name: string;
    sku: string;
    barcode: string;
    price: number;
    stock: number;
    category: string;
    status: string;
    img: string;
  }[] = [
    {
      name: "Organic Coffee Beans",
      sku: "COF-001",
      barcode: "1990001234789",
      price: 4500,
      stock: 45,
      category: "Beverages",
      status: "Active",
      img: "/IMG/Organic-coffee.jpg",
    },
    {
      name: "Smartphone Stand",
      sku: "SMS-002",
      barcode: "1223456861786",
      price: 2000,
      stock: 8,
      category: "Accessories",
      status: "Active",
      img: "/IMG/modern-smartphone-design-with-floating-elements.jpg",
    },
    {
      name: "Wireless Earbuds",
      sku: "EAR-003",
      barcode: "1223456789123",
      price: 4500,
      stock: 0,
      category: "Electronics",
      status: "Active",
      img: "/IMG/rendering-smart-home-device.jpg",
    },
  ];

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <>
      <div className="w-full h-max bg-white rounded-2xl flex flex-col pb-9">
        <div className="w-full h-40 flex border-b-2 border-gray-200 px-8 justify-between">
          <div className="w-max h-full flex flex-col gap-1.5 justify-center">
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-gray-500">Manage items available for sale</p>
          </div>
          <div className="w-max h-full flex gap-2 items-center">
            <button className="px-4 py-2 bg-blue-600 cursor-pointer flex gap-1.5 items-center text-white rounded-lg hover:bg-blue-700 transition">
              <span>
                <GoPlus size={20} />
              </span>{" "}
              Add Product
            </button>
            <button className="px-4 py-2 bg-white text-gray-600 font-medium border flex gap-1 items-center border-gray-300 rounded-lg hover:border-blue-700 cursor-pointer transition">
              <span>
                <LuDownload size={18} />
              </span>{" "}
              Import CSV
            </button>
          </div>
        </div>
        <div className="h-30 w-full flex justify-between items-center px-8">
          <div className="w-[45%] h-[45%] rounded-4xl border-2 flex items-center gap-2.5 border-gray-300 pl-4">
            <span className="text-gray-500 cursor-pointer">
              <FiSearch size={25} />
            </span>
            <input
              type="text"
              className="h-full w-[90%] focus:outline-none"
              placeholder="Search product name or barcode"
            />
          </div>
          <select
            name="Category"
            id="category-select"
            className="w-[26%] h-[45%] rounded-xl border-2 border-gray-300 px-4 py-2 focus:outline-none"
          >
            <option value="">Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
          <select
            name="Category"
            id="category-select"
            className="w-[26%] h-[45%] rounded-xl border-2 border-gray-300 px-4 py-2 focus:outline-none"
          >
            <option value="">Stock status</option>
            <option value="In stock">In stock</option>
            <option value="Low stock">Low stock</option>
            <option value="Out of stock">Out of stock</option>
          </select>
        </div>
        <div className="w-full h-max px-8">
          <div className="w-full h-max flex flex-col border-2 border-gray-200 border-b-0 rounded-t-2xl">
            <div className="w-full bg-gray-100 h-15 text-[16px] text-gray-600 font-medium flex items-center rounded-t-2xl border-b-2 border-gray-200 px-4">
              <p className="w-[32%]">Product Name</p>
              <p className="w-[20%]">SKU/Barcode</p>
              <p className="w-[15%]">Price</p>
              <p className="w-[12%]">Stock</p>
              <p className="w-[15%]">Status</p>
              <p className="">Actions</p>
            </div>
            {productData.map((product, index) => (
              <div
                className="w-full h-20 rounded-t-2xl border-b-2 border-gray-200 flex items-center px-4"
                key={index}
              >
                <div className="w-[32%] h-full flex gap-3 items-center">
                  <div className="w-11 h-12 rounded-xl"><Image src={product.img} alt="Product Image" width={40} height={100} className="w-full h-full rounded-xl"></Image></div>
                  <p className="font-bold text-gray-600">{product.name}</p>
                </div>
                <div className="w-[20%] h-full flex flex-col justify-center">
                  <p className="font-bold text-gray-600">{product.sku}</p>
                  <p className="text-gray-500">{product.barcode}</p>
                </div>
                <div className="w-[15%] font-bold text-gray-600">
                  {formatPrice(product.price)}
                </div>
                <div className="w-[12%]">
                  <div
                    className={`h-8 w-10 ${
                      product.stock > 10
                        ? "bg-green-600"
                        : product.stock === 0
                        ? "bg-red-500"
                        : product.stock <= 10
                        ? "bg-yellow-500"
                        : ""
                    } rounded-2xl flex items-center justify-center text-white`}
                  >
                    {product.stock}
                  </div>
                </div>
                <div className="w-[15%]">
                  <div className="h-8 w-14 bg-green-600 rounded-2xl flex items-center justify-center text-white"></div>
                </div>
                <div className="w-max ml-5 relative">
                  <div
                    className="w-8 h-9 bg-gray-100 rounded-lg flex justify-center items-center cursor-pointer"
                    onClick={(e) => handleActions(index, e)}
                  >
                    <HiOutlineDotsVertical size={20} />
                  </div>
                  {openActions === index && (
                    <div
                      className={`w-47 h-45 absolute right-0 z-10 bg-white shadow-md rounded-2xl border border-gray-200 ${openDirection === "down" ? "top-10" : "bottom-10"}`}
                    >
                      <div className="w-full flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl py-2 px-2">
                        <span>
                          <CiEdit size={25} />
                        </span>
                        <p>Edit product</p>
                      </div>
                      <div className="w-full flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl py-2 px-2">
                        <span>
                          <IoPricetagOutline size={20} />
                        </span>
                        <p>Update price</p>
                      </div>
                      <div className="w-full flex gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl py-2 px-2">
                        <span>
                          <BsArrowsVertical size={22} />
                        </span>
                        <p>Adjust stock</p>
                      </div>
                      <div className="w-full flex gap-2 items-center text-red-500 cursor-pointer hover:bg-red-50 rounded-xl py-2 px-2">
                        <span>
                          <TbCancel size={22} />
                        </span>
                        <p>Disable Product</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
