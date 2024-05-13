import Link from "next/link";
import React from "react";
import { BsHeart, BsTelephone } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <nav className="w-full  ">
      <section className="flex items-center   py-5 ">
        {/* customer care  */}
        <div className="flex flex-col items-center pl-14">
          <h1>Customer Care </h1>
          <p className="flex items-center gap-x-2">
            <BsTelephone /> 099123224
          </p>
        </div>
        {/* brand name */}
        <div>
          <Link
            href={"/"}
            className="pl-20 pr-40  font-bold font-mono text-3xl text-blue-700"
          >
            Shoes Plaza
          </Link>
        </div>
        {/*  search bar */}
        <div className=" shadow-sm border rounded-md flex items-center w-72 focus-within:border-slate-500  border-gray-300">
          <input
            className="py-2 px-4 w-full rounded-l-md focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="px-2 font-semibold text-2xl">
            <CiSearch />
          </button>
        </div>

        {/* account cart wishlist  */}
        <div className="flex items-center gap-x-8 pl-40">
          <Link className="flex flex-col items-center" href={"/login"}>
            <MdAccountCircle className="text-xl" />
            <span>Account</span>
          </Link>

          {/* wishlist */}
          <div>
            <button className="flex flex-col items-center">
              <BsHeart className="text-xl" />
              <span>Wishlist</span>
            </button>
          </div>

          {/* add cart  */}

          <button className="flex flex-col items-center">
            <IoBagOutline className="text-xl" />
            <span>Bag</span>
          </button>
        </div>
      </section>

      <section className="pl-64 bg-blue-600 py-2">
        <ul className="flex gap-x-10 text-white">
          <Link className="hover:text-yellow-500" href={"/"}>
            Home
          </Link>
          <Link className="hover:text-yellow-500" href={"/new"}>
            NewIn
          </Link>
          <Link className="hover:text-yellow-500" href={"/new"}>
            Brands
          </Link>
          <Link className="hover:text-yellow-500" href={"/new"}>
            Men
          </Link>
          <Link className="hover:text-yellow-500" href={"/new"}>
            Women
          </Link>
          <Link className="hover:text-yellow-500" href={"/new"}>
            Children
          </Link>
          <Link className="hover:text-yellow-500" href={"/new"}>
            Store list
          </Link>
          <Link className="hover:text-yellow-500" href={"/new"}>
            About us
          </Link>
        </ul>
      </section>
    </nav>
  );
};

export default Header;
