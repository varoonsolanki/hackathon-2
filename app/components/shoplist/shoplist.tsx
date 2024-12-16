import { josefin_Sans, lato } from '@/app/ui/fonts'
import Image from 'next/image'
import pic35 from '../../../public/pic35.png'
import pic52 from "../../../public/pic52.png"
import pic53 from "../../../public/pic53.png"
import pic54 from "../../../public/pic54.png"
import pic55 from "../../../public/pic55.png"
import pic56 from "../../../public/pic56.png"
import pic57 from "../../../public/pic57.png"
import pic59 from "../../../public/pic59.png"
import React from 'react'
import { Heart, SearchIcon, ShoppingCart } from 'lucide-react'

const Shoplist = () => {
  return (
    <>
   <div className="bg-[#F6F5FF] h-[286px] flex justify-center items-start flex-col">
        <h1 className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875] ml-16`}>Shop List</h1>
        <div className="flex ml-16">
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">Home.</button>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">Pages.</button>
          <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">Shop List</button>
        </div>
      </div>
      <div className='flex mt-20 mb-20 justify-evenly items-center w-[1177px] h-[44px]'>
      <div className='flex'>
          <div className=' flex flex-col justify-evenly items-center'>
        <h1 className={`${josefin_Sans.className} font-bold text-[#151875] text-[22px] w-[389px] h-[22px]`}>Ecommerce Acceories & Fashion item</h1>
        <h1 className={`${josefin_Sans.className} text-[#8A8FB9] mr-52 text-[12px] w-[182px] h-[14px] `}>About 9,620 results (0.62 seconds)</h1>
        </div>
        </div>
 
    
    <div className='flex mt-20 mb-20 gap-5 justify-evenly items-center'>
    <h1 className={`${lato.className}text-[#3F509E] text-[16px] `}>Per Page:</h1>
    <input type="text" className='shadow-black text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none w-[55px] h-[25px]' />
    <h1 className={`${lato.className}text-[#3F509E] text-[16px]`}>Sort By:</h1>
    <input type="text" placeholder='Best Match' className='shadow-black text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none w-[96px] h-[28px]' />
    <h1 className={`${lato.className}text-[#3F509E] text-[16px]`} >View:</h1>
    <input type="text" className='shadow-black text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none w-[162px] h-[30px]' />
    </div>
  </div>
  <div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[1141px] h-[254px]">
  <div className="flex items-center justify-center gap-6 mb-5">
    <Image className="w-[314px] h-[218px]" src={pic52} alt="/" />
    <div>
      
      <div className="flex items-center gap-2">
        <h1 className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}>
          Accumsan tincidunt
        </h1>
        <Image src="/pic17.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic18.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic19.png" height={13} width={13} alt="rectangle" />
      </div>
      <div className="flex items-center gap-4 mt-2">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[15px]`}>$26.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}>$52.00</h1>
        <div className="flex gap-1">
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic60.png" height={13} width={13} alt="rectangle" />
        </div>
      </div>
    
      <div className="mt-3">
        <h1
          className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </h1>
      </div>
        <div className='flex flex-row gap-10 text-[#535399] mt-10' >
          <ShoppingCart/> 
          <Heart/>
          <SearchIcon/>
        </div>
    </div>
  </div>
</div>
      
<div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[1141px] h-[254px]">
  <div className="flex items-center justify-center gap-6 mb-5">
    <Image className="w-[314px] h-[218px]" src={pic53} alt="/" />
    <div>
      
      <div className="flex items-center gap-2">
        <h1 className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}>In nulla</h1>
        <Image src="/pic17.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic18.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic19.png" height={13} width={13} alt="rectangle" />
      </div>
      <div className="flex items-center gap-4 mt-2">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[15px]`}>$26.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}>$52.00</h1>
        <div className="flex gap-1">
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic60.png" height={13} width={13} alt="rectangle" />
        </div>
      </div>
    
      <div className="mt-3">
        <h1
          className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </h1>
      </div>
        <div className='flex flex-row gap-10 text-[#535399] mt-10' >
          <ShoppingCart/> 
          <Heart/>
          <SearchIcon/>
        </div>
    </div>
  </div>
</div>

<div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[1141px] h-[254px]">
  <div className="flex items-center justify-center gap-6 mb-5">
    <Image className="w-[314px] h-[218px]" src={pic54} alt="/" />
    <div>
      
      <div className="flex items-center gap-2">
        <h1 className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}>
        Vel sem
        </h1>
        <Image src="/pic17.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic18.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic19.png" height={13} width={13} alt="rectangle" />
      </div>
      <div className="flex items-center gap-4 mt-2">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[15px]`}>$26.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}>$52.00</h1>
        <div className="flex gap-1">
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic60.png" height={13} width={13} alt="rectangle" />
        </div>
      </div>
    
      <div className="mt-3">
        <h1
          className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </h1>
      </div>
        <div className='flex flex-row gap-10 text-[#535399] mt-10' >
          <ShoppingCart/> 
          <Heart/>
          <SearchIcon/>
        </div>
    </div>
  </div>
</div>

<div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[1141px] h-[254px]">
  <div className="flex items-center justify-center gap-6 mb-5">
    <Image className="w-[314px] h-[218px]" src={pic55} alt="/" />
    <div>
      
      <div className="flex items-center gap-2">
        <h1 className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}>
        Porttitor cum
        </h1>
        <Image src="/pic17.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic18.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic19.png" height={13} width={13} alt="rectangle" />
      </div>
      <div className="flex items-center gap-4 mt-2">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[15px]`}>$26.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}>$52.00</h1>
        <div className="flex gap-1">
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic60.png" height={13} width={13} alt="rectangle" />
        </div>
      </div>
    
      <div className="mt-3">
        <h1
          className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </h1>
      </div>
        <div className='flex flex-row gap-10 text-[#535399] mt-10' >
          <ShoppingCart/> 
          <Heart/>
          <SearchIcon/>
        </div>
    </div>
  </div>
</div>

<div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[1141px] h-[254px]">
  <div className="flex items-center justify-center gap-6 mb-5">
    <Image className="w-[314px] h-[218px]" src={pic56} alt="/" />
    <div>
      
      <div className="flex items-center gap-2">
        <h1 className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}>
        Nunc in
        </h1>
        <Image src="/pic17.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic18.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic19.png" height={13} width={13} alt="rectangle" />
      </div>
      <div className="flex items-center gap-4 mt-2">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[15px]`}>$26.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}>$52.00</h1>
        <div className="flex gap-1">
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic60.png" height={13} width={13} alt="rectangle" />
        </div>

      </div>
    
      <div className="mt-3">
        <h1
          className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </h1>
      </div>
        <div className='flex flex-row gap-10 text-[#535399] mt-10' >
          <ShoppingCart/> 
          <Heart/>
          <SearchIcon/>
        </div>
    </div>
  </div>
</div>
<div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[1141px] h-[254px]">
  <div className="flex items-center justify-center gap-6 mb-5">
    <Image className="w-[314px] h-[218px]" src={pic57} alt="/" />
    <div>
      
      <div className="flex items-center gap-2">
        <h1 className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}>
        Vitae facilisis
        </h1>
        <Image src="/pic17.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic18.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic19.png" height={13} width={13} alt="rectangle" />
      </div>
      <div className="flex items-center gap-4 mt-2">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[15px]`}>$26.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}>$52.00</h1>
        <div className="flex gap-1">
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic60.png" height={13} width={13} alt="rectangle" />
        </div>
      </div>
    
      <div className="mt-3">
        <h1
          className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </h1>
      </div>
        <div className='flex flex-row gap-10 text-[#535399] mt-10' >
          <ShoppingCart/> 
          <Heart/>
          <SearchIcon/>
        </div>
    </div>
  </div>
</div>

<div className="flex justify-evenly items-center ml-24 bg-[#F6F6FD80] w-[1141px] h-[254px]">
  <div className="flex items-center justify-center gap-6 mb-5">
    <Image className="w-[314px] h-[218px]" src={pic59} alt="/" />
    <div>
      
      <div className="flex items-center gap-2">
        <h1 className={`${josefin_Sans.className} font-bold text-[#151875] text-[20px]`}>
        Curabitur lectus
        </h1>
        <Image src="/pic17.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic18.png" height={13} width={13} alt="rectangle" />
        <Image src="/pic19.png" height={13} width={13} alt="rectangle" />
      </div>
      <div className="flex items-center gap-4 mt-2">
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[15px]`}>$26.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[15px] line-through`}>$52.00</h1>
        <div className="flex gap-1">
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic61.png" height={13} width={13} alt="rectangle" />
          <Image src="/pic60.png" height={13} width={13} alt="rectangle" />
        </div>
      </div>
    
      <div className="mt-3">
        <h1
          className={`${lato.className} text-[#9295AA] text-[18px] leading-6 w-[598px]`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </h1>
      </div>
        <div className='flex flex-row gap-10 text-[#535399] mt-10' >
          <ShoppingCart/> 
          <Heart/>
          <SearchIcon/>
        </div>
    </div>
  </div>
</div>


<div className="ml-44 mt-16 mb-20">
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

export default Shoplist