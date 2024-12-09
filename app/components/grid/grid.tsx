import React from 'react'
import { josefin_Sans  } from "@/app/ui/fonts";
 
const Grid = () => {
  return (
    <>
    <div className='bg-[#F6F5FF]  h-[286px] flex justify-evenly items-center flex-col '>
<h1 className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875]`}>
Shop Grid Default
            </h1>
        <div className='flex'>
        <button className="text-black text-[16px]  font-medium hover:text-pink-600 flex items-center">Home.</button>

        <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">Pages.</button>

        <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">Shop Grid Default</button>
        </div>
    </div>
    </>
  )
}

export default Grid