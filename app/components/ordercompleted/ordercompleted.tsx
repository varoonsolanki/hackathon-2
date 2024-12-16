import { josefin_Sans } from '@/app/ui/fonts'
import Image from 'next/image'
import pic35 from '../../../public/pic35.png'
import pic82 from '../../../public/pic82.png'
import pic83 from '../../../public/pic83.png'
import React from 'react'

const Ordercompleted = () => {
  return (
    <>
     <div className="bg-[#F6F5FF] h-[286px]  flex justify-center items-start flex-col">
        <h1
          className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875] ml-52`}
        >
          Order Completed
        </h1>
        <div className="flex ml-52">
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Home.
          </button>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Pages.
          </button>
          <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">
            Order Completed
          </button>
        </div>
      </div>

          
      <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="text-center bg-white p-8 rounded-xl max-w-md w-full">
      <Image
            src={pic82}
            height={50}
            width={55}
            alt="Cantilever Chair"
            className="mr-44"
          />
        {/* Checkmark Icon */}
        <div className="flex justify-center mb-6">
          {/* You can replace the svg with an image */}
          <svg className="w-16 h-16 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-[#151875] mb-4">
          Your Order Is Completed!
        </h1>

        {/* Description */}
        <p className="text-[#A1A8C1] text-lg mb-6">
          Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
        </p>

        {/* Button */}
        <button className="w-full py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600">
          Continue Shopping
        </button>
        <Image
            src={pic83}
            height={50}
            width={55}
            alt="Cantilever Chair"
            className="ml-96 mt-20 "
          />
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
  )
}

export default Ordercompleted