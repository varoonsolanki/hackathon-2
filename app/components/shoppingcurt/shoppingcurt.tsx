import { josefin_Sans } from '@/app/ui/fonts'
import Image from 'next/image'
import pic77 from '../../../public/pic77.png'
import pic78 from '../../../public/pic78.png'
import pic79 from '../../../public/pic79.png'
import pic80 from '../../../public/pic80.png'
import pic81 from '../../../public/pic81.png'

import React from 'react'

const Shoppingcurt = () => {
  return (
    <>
     <div className="bg-[#F6F5FF] h-[286px]  flex justify-center items-start flex-col">
        <h1
          className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875] ml-10`}
        >
          Shopping Curt
        </h1>
        <div className="flex ml-10">
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Home.
          </button>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Pages.
          </button>
          <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">
            Shopping Curt
          </button>
        </div>
      </div>


      <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Table */}
          <div className="col-span-2">
            <table className="w-full border-collapse border border-gray-700">
              <thead>
                <tr className="text-left text-[#151875]">
                  <th className="p-4 border border-gray-700">Product</th>
                  <th className="p-4 border border-gray-700">Price</th>
                  <th className="p-4 border border-gray-700">Quantity</th>
                  <th className="p-4 border border-gray-700">Total</th>
                </tr>
              </thead>
              <tbody>
                 
                  <tr className="border border-gray-700">
                    <td className="p-4 flex items-center gap-4">
                      <Image
                        src={pic77}
                        alt=""
                        width={100}
                        height={100}
                        className="rounded"
                      />
                      <div>
                      <h1 className={`${josefin_Sans.className} text-[14px]  text-[#000000]`}>Ut diam consequat</h1>
                       <div className='text-[#A1A8C1] text-[14px] '>
                        <p>Color: Brown</p>
                        <p>Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">$32.00</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="px-2 py-1 bg-gray-700 text-white">-</button>
                        <input
                          type="text"
                          className="w-12 text-center bg-black border border-gray-700 text-white" 
                          defaultValue="1"
                        />
                        <button className="px-2 py-1 bg-gray-700 text-white ">+</button>
                      </div>
                    </td>
                    <td className="p-4">$219.00</td>
                  </tr>

                  <tr className="border border-gray-700">
                    <td className="p-4 flex items-center gap-4">
                      <Image
                        src={pic78}
                        alt=""
                        width={100}
                        height={100}
                        className="rounded"
                      />
                       <div>
                      <h1 className={`${josefin_Sans.className} text-[14px]  text-[#000000]`}>Ut diam consequat</h1>
                       <div className='text-[#A1A8C1] text-[14px] '>
                        <p>Color: Brown</p>
                        <p>Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">$32.00</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="px-2 py-1 bg-gray-700 text-white">-</button>
                        <input
                          type="text"
                          className="w-12 text-center bg-black border border-gray-700 text-white" 
                          defaultValue="1"
                        />
                        <button className="px-2 py-1 bg-gray-700 text-white ">+</button>
                      </div>
                    </td>
                    <td className="p-4">$219.00</td>
                  </tr>

                  <tr className="border border-gray-700">
                    <td className="p-4 flex items-center gap-4">
                      <Image
                        src={pic79}
                        alt=""
                        width={100}
                        height={100}
                        className="rounded"
                      />
                      <div>
                      <h1 className={`${josefin_Sans.className} text-[14px]  text-[#000000]`}>Ut diam consequat</h1>
                       <div className='text-[#A1A8C1] text-[14px] '>
                        <p>Color: Brown</p>
                        <p>Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">$32.00</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="px-2 py-1 bg-gray-700 text-white">-</button>
                        <input
                          type="text"
                          className="w-12 text-center bg-black border border-gray-700 text-white" 
                          defaultValue="1"
                        />
                        <button className="px-2 py-1 bg-gray-700 text-white ">+</button>
                      </div>
                    </td>
                    <td className="p-4">$219.00</td>
                  </tr>


                  <tr className="border border-gray-700">
                    <td className="p-4 flex items-center gap-4">
                      <Image
                        src={pic80}
                        alt=""
                        width={100}
                        height={100}
                        className="rounded"
                      />
                       <div>
                      <h1 className={`${josefin_Sans.className} text-[14px]  text-[#000000]`}>Ut diam consequat</h1>
                       <div className='text-[#A1A8C1] text-[14px] '>
                        <p>Color: Brown</p>
                        <p>Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">$32.00</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="px-2 py-1 bg-gray-700 text-white">-</button>
                        <input
                          type="text"
                          className="w-12 text-center bg-black border border-gray-700 text-white" 
                          defaultValue="1"
                        />
                        <button className="px-2 py-1 bg-gray-700 text-white ">+</button>
                      </div>
                    </td>
                    <td className="p-4">$219.00</td>
                  </tr>

                  <tr className="border border-gray-700">
                    <td className="p-4 flex items-center gap-4">
                      <Image
                        src={pic81}
                        alt=""
                        width={100}
                        height={100}
                        className="rounded"
                      />
                      <div>
                      <h1 className={`${josefin_Sans.className} text-[14px]  text-[#000000]`}>Ut diam consequat</h1>
                       <div className='text-[#A1A8C1] text-[14px] '>
                        <p>Color: Brown</p>
                        <p>Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">$32.00</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="px-2 py-1 bg-gray-700 text-white">-</button>
                        <input
                          type="text"
                          className="w-12 text-center bg-black border border-gray-700 text-white" 
                          defaultValue="1"
                        />
                        <button className="px-2 py-1 bg-gray-700 text-white ">+</button>
                      </div>
                    </td>
                    <td className="p-4">$219.00</td>
                  </tr>

              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <button className="bg-pink-500 text-white px-4 py-2 rounded">Update Cart</button>
              <button className="bg-pink-500 text-white px-4 py-2 rounded">Clear Cart</button>
            </div>
          </div>

          {/* Cart Totals */}
          <div>
            <div className='flex items-center justify-center text-[#151875]'>
          <h2 className="text-xl font-bold mb-4 ">Cart Totals</h2>
          </div>
            <div className="bg-gray-800 p-6 rounded">
              <div className="flex justify-between mb-2 text-white ">
                <span>Subtotals:</span>
                <span>£219.00</span>
              </div>
              <div className="flex justify-between mb-4 text-white ">
                <span>Totals:</span>
                <span>£325.00</span>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded">
                Proceed To Checkout
              </button>
            </div>

            {/* Calculate Shipping */}
            <div className='flex items-center justify-center text-[#151875]'>
                <h2 className="text-xl font-bold pt-3">Calculate Shipping</h2>
                </div>
            <div className="bg-gray-800 p-6 rounded mt-8">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full bg-black border border-gray-700 p-2 mb-4"
              />
              <input
                type="text"
                placeholder="Mirpur Dhaka - 1200"
                className="w-full bg-black border border-gray-700 p-2 mb-4"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full bg-black border border-gray-700 p-2 mb-4"
              />
              <button className="w-full bg-pink-500 text-white py-2 rounded">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Shoppingcurt
