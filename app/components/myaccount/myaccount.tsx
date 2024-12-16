import { josefin_Sans } from '@/app/ui/fonts'
import pic35 from '../../../public/pic35.png'
import React from 'react'
import Image from 'next/image'

const Myaccount = () => {
  return (
    <>
     <div className="bg-[#F6F5FF] h-[286px]  flex justify-center items-start flex-col">
        <h1
          className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875] ml-14`}
        >
          My Account 
        </h1>
        <div className="flex ml-14">
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Home.
          </button>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Pages.
          </button>
          <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">
            My Account
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#151875] mb-4">Login</h2>

        <p className="text-[#A1A8C1] mb-6">Please login using account detail below.</p>

        {/* Login Form */}
        <form>
          {/* Email Address Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#6B6B6B]">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-[#6B6B6B]">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <a href="#" className="text-sm text-pink-500 hover:underline">Forgot your password?</a>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600">
            Sign In
          </button>
        </form>

        {/* Create Account Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#A1A8C1]">  Dont have an Account? <a href={'hektodemo'} className="text-pink-500 hover:underline">Create account</a></p>
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
  )
}

export default Myaccount