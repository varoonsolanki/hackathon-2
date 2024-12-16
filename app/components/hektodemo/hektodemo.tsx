import { josefin_Sans } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hektodemo = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[285px] flex justify-center items-start flex-col">
        <h1
          className={`${josefin_Sans.className} text-[36px] font-bold text-[#101750] ml-14`}
        >
          Hekto Demo
        </h1>
      </div>
      <div className="ml-14">
        <h1 className="text-2xl font-bold text-[#151875] mb-6">Hekto Demo</h1>
        <p className="text-sm text-[#A1A8C1] mb-4">
          Cart Information / Shipping / Payment
        </p>
      </div>
      <div className="min-h-screen p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            {/* Contact Information */}
            <div className="mb-8">
              <div className="flex mb-8">
                <h2 className="text-lg font-bold text-[#151875] mb-2">
                  Contact Information
                </h2>

                <Link href={'myaccount'}>
                <button  className="text-[#C1C8E1] ml-96">
                  Already have an account? Log in
                </button>
                </Link>
              </div>
              <div className="flex justify-between items-center mb-4">
                <input
                  type="email"
                  placeholder="Email or mobile phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="offers" className="w-4 h-4" />
                <label htmlFor="offers" className="text-sm text-[#6B6B6B]">
                  Keep me up to date on news and exclusive offers
                </label>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-lg font-bold text-[#151875] mb-10 mt-24  ">
                Shipping address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Apartment, suite, etc (optional)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {/* Continue Shipping Button */}
            <button className="w-full mt-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600">
              Continue Shipping
            </button>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
             
            {/* Product List */}
            <div className="space-y-4 mb-6">
              {['pic84', 'pic85', 'pic86', 'pic87', 'pic88'].map((pic, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={`/${pic}.png`}
                      alt={`Product ${index + 1}`}
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-sm text-[#151875]">Product Name</p>
                      <p className="text-sm text-[#A1A8C1]">Color: Brown</p>
                      <p className="text-sm text-[#A1A8C1]">Size: XL</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#151875]">$32.00</p>
                </div>
              ))}
            </div>

            {/* Subtotal and Total */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[#151875]">
                <p>Subtotal:</p>
                <p>£219.00</p>
              </div>
              <div className="flex justify-between text-sm text-[#151875]">
                <p>Total:</p>
                <p>£325.00</p>
              </div>
            </div>
            <p className="text-sm text-[#A1A8C1] mt-2">
              Shipping & taxes calculated at checkout
            </p>

            {/* Proceed to Checkout Button */}
            <Link href={'ordercompleted'}>
            <button className="w-full mt-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600">
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hektodemo;
