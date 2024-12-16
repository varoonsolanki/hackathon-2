import { josefin_Sans, lato } from '@/app/ui/fonts'
import Image from 'next/image'
import pic35 from '../../../public/pic35.png'
import pic69 from '../../../public/pic69.png'
import pic70 from '../../../public/pic70.png'
import pic71 from '../../../public/pic71.png'
import pic72 from '../../../public/pic72.png'
import pic73 from '../../../public/pic73.png'
import pic74 from '../../../public/pic74.png'
import pic75 from '../../../public/pic75.png'
import pic76 from '../../../public/pic76.png'
import React from 'react'
import { ArrowRight, FacebookIcon, Heart, InstagramIcon, LinkedinIcon } from 'lucide-react'

const Productdetail = () => {
  return (
    <>
    <div className="bg-[#F6F5FF] h-[286px]  flex justify-center items-start flex-col">
        <h1
          className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875] ml-64`}
        >
          Product Details
        </h1>
        <div className="flex ml-64">
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Home.
          </button>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Pages.
          </button>
          <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">
            Product Details
          </button>
        </div>
      </div>
      
      <div className=' bg-[#FFFFFF]'>
  <div className='flex items-start justify-evenly mr-28 mt-10 mb-10'>
    {/* Left Image Section */}
    <div className='ml-64'>
      <div className="w-[151px] h-[155px] items-center justify-center mb-4">
        <Image className="w-[151px] h-[155px]" src={pic70} alt="Product Thumbnail 1" />
      </div>
      <div className="w-[151px] h-[155px] items-center justify-center mb-4">
        <Image className="w-[151px] h-[155px]" src={pic71} alt="Product Thumbnail 2" />
      </div>
      <div className="w-[151px] h-[155px] items-center justify-center">
        <Image className="w-[151px] h-[155px]" src={pic72} alt="Product Thumbnail 3" />
      </div>
    </div>

    {/* Main Image Section */}
    <div className="items-center justify-center ml-5">
      <Image className="w-[375px] h-[487px] mr-64" src={pic69} alt="Main Product Image" />
    </div>

    {/* Product Details Section */}
    <div className='ml-10'>
      <h1 className={`${josefin_Sans.className} font-bold text-[#0D134E] text-[36px] mb-4`}>Playwood Arm Chair</h1>

      {/* Rating Section */}
      <div className="flex items-center space-x-2 mb-4">
        <span>⭐⭐⭐⭐⭐</span>
        <span className="text-[#0D134E]">(23)</span>
      </div>

      {/* Pricing Section */}
      <div className="flex items-center space-x-4 mb-4">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px]`}>$22.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[16px] line-through`}>$32.00</h1>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px] font-bold `}>Color</h1>
      </div>

      {/* Description Section */}
      <p className={`${lato.className} text-[#9295AA] text-[18px] leading-6 mb-4`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
      </p>

      {/* Add to Cart and Heart Icon */}
      <div className="flex items-center space-x-4 mb-4">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px]`}>Add to Cart</h1>
        <Heart />
      </div>

      {/* Categories Section */}
      <div className="mb-4">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px]`}>Categories</h1>
      </div>

      {/* Tags Section */}
      <div className="mb-4">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px]`}>Tags</h1>
      </div>

      {/* Share Section */}
      <div className="flex items-center space-x-4">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px]`}>Share</h1>
        <a href="https://web.facebook.com/varoon.kumar.1023?mibextid=ZbWKwL&_rdc=1&_rdr#" className="text-gray-500 hover:text-gray-700">
              <FacebookIcon/>
            </a>
            <a href="https://www.instagram.com/varoonkumarmalhi/profilecard/?igsh=N3R2dDIyN2sxdDRv" className="text-gray-500 hover:text-gray-700">
               <InstagramIcon/>
            </a>
            <a href="https://www.linkedin.com/in/varoon-kumar-274a512b7/" className="text-gray-500 hover:text-gray-700">
              <LinkedinIcon/>
            </a>
      </div>
    </div>
  </div>
</div>

   <div className='bg-[#F9F8FE] '>
      
      <div className="flex justify-evenly items-center mb-10 font-semibold ">
        <a href="#" className={`${josefin_Sans.className} underline text-[#151875] text-[24px]`}>Description  </a>
        <a href="#"  className={`${josefin_Sans.className} text-[#151875] text-[24px]`} > Additional Info</a>
        <a href="#"  className={`${josefin_Sans.className} text-[#151875] text-[24px]`} >Review </a>
        <a href="#"  className={`${josefin_Sans.className} text-[#151875] text-[24px]`} >Video</a> 
      </div>
      <div className='justify-evenly items-center ml-24'>
        <div>
      <h1 className={`${josefin_Sans.className} text-[#151875] text-[24px]`} >Varius Tempor</h1>
      <p className={`${josefin_Sans.className} text-[#A9ACC6] text-[16px]`}>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. <br /> Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus <br /> cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      </div>
      <div>
      <h1 className={`${josefin_Sans.className} text-[#151875] text-[24px]`} >More Details</h1>
      <div className="flex">
            <ArrowRight/> 
            <p className={`${josefin_Sans.className} text-[#A9ACC6] text-[16px]`} >Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      </div>
      <div className="flex">
            <ArrowRight/> 
            <p className={`${josefin_Sans.className} text-[#A9ACC6] text-[16px]`} >Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      </div>
      <div className="flex">
            <ArrowRight/> 
            <p className={`${josefin_Sans.className} text-[#A9ACC6] text-[16px]`} >Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      </div>
      <div className="flex">
            <ArrowRight/> 
            <p className={`${josefin_Sans.className} text-[#A9ACC6] text-[16px]`} >Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      </div>
      </div>
      </div>
   </div>
         
      <div className='flex justify-center items-center' >
      <h1 className={`${josefin_Sans.className} text-[#101750] font-bold text-[36px] mt-16 mb-16`}> Related Products </h1>
      </div>

         <div className=' flex justify-evenly items-center ml-24'>
           <div>
            <Image
              src={pic74}
              height={340}
              width={270}
              alt="Cantilever Chair"
            />
            <div className='flex'>
            <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px] font-semibold `}>
            Mens Fashion Wear
            </h1>
            <span className='text-[10px] ml-12'>⭐⭐⭐⭐⭐</span>
            </div>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
            $43.00
            </h1>
          </div>
          <div>
            <Image
              src={pic73}
              height={340}
              width={270}
              alt="Cantilever Chair"
            />
            <div className='flex'>
            <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px] font-semibold `}>
            Women’s Fashion
            </h1>
            <span className='text-[10px] ml-12'>⭐⭐⭐⭐⭐</span>
            </div>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
            $52.00
            </h1>
          </div>
          <div>
            <Image
              src={pic75}
              height={340}
              width={270}
              alt="Cantilever Chair"
            />
            <div className='flex'>
            <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px] font-semibold `}>
            Wolx Dummy Fashion
            </h1>
            <span className='text-[10px] ml-12'>⭐⭐⭐⭐⭐</span>
            </div>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
            $67.00
            </h1>
          </div>
          <div>
            <Image
              src={pic76}
              height={340}
              width={270}
              alt="Cantilever Chair"
            />
            <div className='flex'>
            <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px] font-semibold `}>
            Top Wall Digital Clock
            </h1>
            <span className='text-[10px] ml-12'>⭐⭐⭐⭐⭐</span>
            </div>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
            $51.00
            </h1>
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

export default Productdetail