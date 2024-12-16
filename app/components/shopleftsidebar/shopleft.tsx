import { josefin_Sans, lato } from "@/app/ui/fonts";
import pic62 from "../../../public/pic62.png";
import pic63 from "../../../public/pic63.png";
import pic64 from "../../../public/pic64.png";
import pic65 from "../../../public/pic65.png";
import pic66 from "../../../public/pic66.png";
import pic67 from "../../../public/pic67.png";
import pic68 from "../../../public/pic68.png";
import pic35 from '../../../public/pic35.png'
import React from "react";
import { Heart, SearchIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";

const Shopleft = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px]  flex justify-center items-start flex-col">
        <h1
          className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875] ml-16`}
        >
          Shop Left Side Bar
        </h1>
        <div className="flex ml-16">
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Home.
          </button>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Pages.
          </button>
          <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">
            Shop Left Side Bar{" "}
          </button>
        </div>
      </div>
      <div className="flex mt-20 mb-20 justify-evenly items-center w-[1177px] h-[44px]">
        <div className="flex">
          <div className=" flex flex-col justify-evenly items-center">
            <h1
              className={`${josefin_Sans.className} font-bold text-[#151875] text-[22px] w-[389px] h-[22px]`}
            >
              Ecommerce Acceories & Fashion item
            </h1>
            <h1
              className={`${josefin_Sans.className} text-[#8A8FB9] mr-32 text-[12px] w-[250px] h-[14px]`}
            >
              About 9,620 results (0.62 seconds)
            </h1>
          </div>
        </div>

        <div className="flex mt-20 mb-20 gap-5 justify-evenly items-center">
          <h1 className={`${lato.className}text-[#3F509E] text-[16px] `}>
            Per Page:
          </h1>
          <input
            type="text"
            className="shadow-black text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none w-[55px] h-[25px]"
          />
          <h1 className={`${lato.className}text-[#3F509E] text-[16px]`}>
            Sort By:
          </h1>
          <input
            type="text"
            placeholder="Best Match"
            className="shadow-black text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none w-[96px] h-[28px]"
          />
          <h1 className={`${lato.className}text-[#3F509E] text-[16px]`}>
            View:
          </h1>
          <input
            type="text"
            className="shadow-black text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none w-[162px] h-[30px]"
          />
        </div>
      </div>
      <div className="flex ">
        <div className=" h-screen ml-28 shadow-md p-4">
          {/* Product Brand */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#151875] mb-2 underline text-[underline]">
              Product Brand
            </h2>
            <ul className="space-y-2">
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className} text-[#989BB5] text-[16px] mr-2`}
                />
                Coaster Furniture
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className} text-[#989BB5] text-[16px] mr-2`}
                />
                Fusion Dot High Fashion
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className} text-[#989BB5] text-[16px] mr-2`}
                />
                Unique Furnitture Restor
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Dream Furnitture Flipping
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Young Repurposed
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Green DIY furniture
              </li>
            </ul>
          </div>

          {/* Discount Offer */}
          <div className="mb-6">
            <h2 className="font-bold text-[#151875] mb-2 underline ">Discount Offer</h2>
            <ul className="space-y-2">
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                10% Cashback{" "}
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                20% Cashback Offer
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                50% Discount Off
              </li>
            </ul>
          </div>

          {/* Rating Items */}
          <div className="mb-6">
            <h2 className="font-bold text-[#151875] mb-2 underline ">Rating Items</h2>
            <div className="flex items-center space-x-1">
              <input type="radio" name="rating" className="mr-2" />
              <span>⭐⭐⭐⭐⭐ (2341)</span>
            </div>
            <div className="flex items-center space-x-1">
              <input type="radio" name="rating" className="mr-2" />
              <span>⭐⭐⭐⭐ (1898) </span>
            </div>
            <div className="flex items-center space-x-1">
              <input type="radio" name="rating" className="mr-2" />
              <span>⭐⭐⭐ (1522)</span>
            </div>
            <div className="flex items-center space-x-1">
              <input type="radio" name="rating" className="mr-2" />
              <span>⭐⭐ (953) </span>
            </div>
            <div className="flex items-center space-x-1">
              <input type="radio" name="rating" className="mr-2" />
              <span>⭐ (555) </span>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h2 className=" font-bold text-[#151875] mb-2 underline ">Categories</h2>
            <ul className="space-y-2">
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Prestashop
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Magento
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Bigcommerce
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2 underline `}
                />
                osCommerce
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                3dcart
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Bags
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Accessories
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Jewellary
              </li>
              <li>
                <input
                  type="checkbox"
                  className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
                />
                Watches
              </li>
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h2 className="text-[#151875] font-bold text-[16px] mr-2 underline">
              Price Filter
            </h2>

            <li>
              <input
                type="checkbox"
                className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
              />
              $0.00 - $150.00
            </li>
            <li>
              <input
                type="checkbox"
                className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
              />
              $150.00 - $350.00
            </li>
            <li>
              <input
                type="checkbox"
                className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
              />
              $150.00 - $504.00
            </li>
            <li>
              <input
                type="checkbox"
                className={`${lato.className}text-[#989BB5] text-[16px] mr-2`}
              />
              $550.00 +
            </li>
            <li>
              <div className="flex">
                <input
                  type="email"
                  placeholder="$0.00 - $150.00"
                  className="w-full px-4 py-2 text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none"
                />
                <SearchIcon />
              </div>
            </li>
          </div>

          {/* Filter by Color */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#151875] mb-2 underline ">
              Filter by Color
            </h2>
            <div className="gap-2">
              <div className="flex">
                <button className="w-6 h-6 rounded-full bg-blue-500"></button>
                <button className="w-6 h-6 rounded-full bg-orange-500"></button>
                <button className="w-6 h-6 rounded-full bg-amber-200"></button>
                <button className="w-6 h-6 rounded-full bg-green-700"></button>
                <button className="w-6 h-6 rounded-full bg-purple-700"></button>
                <button className="w-6 h-6 rounded-full bg-sky-800"></button>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-1">
          <div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[921px] h-[230px]">
            <div className="flex items-center justify-center gap-6 mb-5">
              <Image className="w-[284px] h-[197px]" src={pic62} alt="/" />
              <div>
                <div className="flex items-center gap-2">
                  <h1
                    className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}
                  >
                    Dictum morbi
                  </h1>
                  <Image
                    src="/pic17.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic18.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic19.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <h1
                    className={`${josefin_Sans.className} text-[#151875] text-[15px]`}
                  >
                    $26.00
                  </h1>
                  <h1
                    className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}
                  >
                    $52.00
                  </h1>
                  <div className="flex gap-1">
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic60.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h1
                    className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </h1>
                </div>
                <div className="flex flex-row gap-10 text-[#535399] mt-10">
                  <ShoppingCart />
                  <Heart />
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[921px] h-[230px]">
            <div className="flex items-center justify-center gap-6 mb-5">
              <Image className="w-[284px] h-[197px]" src={pic63} alt="/" />
              <div>
                <div className="flex items-center gap-2">
                  <h1
                    className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}
                  >
                    Sodales sit
                  </h1>
                  <Image
                    src="/pic17.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic18.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic19.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <h1
                    className={`${josefin_Sans.className} text-[#151875] text-[15px]`}
                  >
                    $26.00
                  </h1>
                  <h1
                    className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}
                  >
                    $52.00
                  </h1>
                  <div className="flex gap-1">
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic60.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h1
                    className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </h1>
                </div>
                <div className="flex flex-row gap-10 text-[#535399] mt-10">
                  <ShoppingCart />
                  <Heart />
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[921px] h-[230px]">
            <div className="flex items-center justify-center gap-6 mb-5">
              <Image className="w-[284px] h-[197px]" src={pic64} alt="/" />
              <div>
                <div className="flex items-center gap-2">
                  <h1
                    className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}
                  >
                    Nibh varius
                  </h1>
                  <Image
                    src="/pic17.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic18.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic19.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <h1
                    className={`${josefin_Sans.className} text-[#151875] text-[15px]`}
                  >
                    $26.00
                  </h1>
                  <h1
                    className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}
                  >
                    $52.00
                  </h1>
                  <div className="flex gap-1">
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic60.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h1
                    className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </h1>
                </div>
                <div className="flex flex-row gap-10 text-[#535399] mt-10">
                  <ShoppingCart />
                  <Heart />
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[921px] h-[230px]">
            <div className="flex items-center justify-center gap-6 mb-5">
              <Image className="w-[284px] h-[197px]" src={pic65} alt="/" />
              <div>
                <div className="flex items-center gap-2">
                  <h1
                    className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}
                  >
                    Mauris quis
                  </h1>
                  <Image
                    src="/pic17.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic18.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic19.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <h1
                    className={`${josefin_Sans.className} text-[#151875] text-[15px]`}
                  >
                    $26.00
                  </h1>
                  <h1
                    className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}
                  >
                    $52.00
                  </h1>
                  <div className="flex gap-1">
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic60.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h1
                    className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </h1>
                </div>
                <div className="flex flex-row gap-10 text-[#535399] mt-10">
                  <ShoppingCart />
                  <Heart />
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[921px] h-[230px]">
            <div className="flex items-center justify-center gap-6 mb-5">
              <Image className="w-[284px] h-[194px]" src={pic66} alt="/" />
              <div>
                <div className="flex items-center gap-2">
                  <h1
                    className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}
                  >
                    Morbi sagittis
                  </h1>
                  <Image
                    src="/pic17.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic18.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic19.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <h1
                    className={`${josefin_Sans.className} text-[#151875] text-[15px]`}
                  >
                    $26.00
                  </h1>
                  <h1
                    className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}
                  >
                    $52.00
                  </h1>
                  <div className="flex gap-1">
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic60.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h1
                    className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </h1>
                </div>
                <div className="flex flex-row gap-10 text-[#535399] mt-10">
                  <ShoppingCart />
                  <Heart />
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[921px] h-[230px]">
            <div className="flex items-center justify-center gap-6 mb-5">
              <Image className="w-[284px] h-[197px]" src={pic67} alt="/" />
              <div>
                <div className="flex items-center gap-2">
                  <h1
                    className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}
                  >
                    Ultricies venenatis
                  </h1>
                  <Image
                    src="/pic17.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic18.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic19.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <h1
                    className={`${josefin_Sans.className} text-[#151875] text-[15px]`}
                  >
                    $26.00
                  </h1>
                  <h1
                    className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}
                  >
                    $52.00
                  </h1>
                  <div className="flex gap-1">
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic60.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h1
                    className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </h1>
                </div>
                <div className="flex flex-row gap-10 text-[#535399] mt-10">
                  <ShoppingCart />
                  <Heart />
                  <SearchIcon /> 
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[921px] h-[230px]">
            <div className="flex items-center justify-center gap-6 mb-5">
              <Image className="w-[284px] h-[197px]" src={pic68} alt="/" />
              <div>
                <div className="flex items-center gap-2">
                  <h1
                    className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}
                  >
                    Scelerisque dignissim
                  </h1>
                  <Image
                    src="/pic17.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic18.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                  <Image
                    src="/pic19.png"
                    height={13}
                    width={13}
                    alt="rectangle"
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <h1
                    className={`${josefin_Sans.className} text-[#151875] text-[15px]`}
                  >
                    $26.00
                  </h1>
                  <h1
                    className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}
                  >
                    $52.00
                  </h1>
                  <div className="flex gap-1">
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic61.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                    <Image
                      src="/pic60.png"
                      height={13}
                      width={13}
                      alt="rectangle"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <h1
                    className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </h1>
                </div>
                <div className="flex flex-row gap-10 text-[#535399] mt-10">
                  <ShoppingCart />
                  <Heart />
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-44 mt-20">
        <Image
            src={pic35}
            height={93}
            width={904}
            alt="Cantilever Chair"
            className="bg-background"
          />
</div>
    </>
  );
};

export default Shopleft;
