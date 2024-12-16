import React from 'react';
import Image from 'next/image';
import pic35 from '../../../public/pic35.png'
import { josefin_Sans, lato } from '@/app/ui/fonts';
import Link from 'next/link';

// Product data with public URLs
const productData = [
  { image: "/pic40.png", name: "Cantilever Chair", oldPrice: "$42.00", newPrice: "$29.99" },
  { image: "/pic41.png", name: "Wooden Stool", oldPrice: "$38.00", newPrice: "$26.50" },
  { image: "/pic42.png", name: "Minimalist Lamp", oldPrice: "$55.00", newPrice: "$45.99" },
  { image: "/pic43.png", name: "Modern Sofa", oldPrice: "$250.00", newPrice: "$199.99" },
  { image: "/pic44.png", name: "Leather Armchair", oldPrice: "$180.00", newPrice: "$149.99" },
  { image: "/pic45.png", name: "Round Coffee Table", oldPrice: "$89.00", newPrice: "$75.99" },
  { image: "/pic46.png", name: "Vintage Desk", oldPrice: "$120.00", newPrice: "$99.99" },
  { image: "/pic47.png", name: "Shelving Unit", oldPrice: "$78.00", newPrice: "$59.99" },
  { image: "/pic48.png", name: "Wall Clock", oldPrice: "$32.00", newPrice: "$25.99" },
  { image: "/pic49.png", name: "Bean Bag Chair", oldPrice: "$65.00", newPrice: "$49.99" },
  { image: "/pic50.png", name: "Floor Lamp", oldPrice: "$100.00", newPrice: "$85.99" },
  { image: "/pic51.png", name: "Bookshelf", oldPrice: "$140.00", newPrice: "$119.99" },
];

// Main Component
const Grid = () => {
  return (
    <>
      <div className="bg-[#F6F5FF] h-[286px] flex justify-center items-start flex-col">
        <h1 className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875] ml-14`}>Shop Grid Default</h1>
        <div className="flex ml-14">
          <Link href={'/components/'}>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">Home.</button>
          
          </Link>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">Pages.</button>
          <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">Shop Grid Default</button>        
        </div>        
      </div>

 <div className='flex mt-20 mb-20 justify-evenly items-center w-[1177px] h-[44px]'>
      <div className='flex'>
          <div className=' flex flex-col justify-evenly items-center'>
        <h1 className={`${josefin_Sans.className} font-bold text-[#151875] text-[22px] w-[389px] h-[22px]`}>Ecommerce Acceories & Fashion item</h1>
        <h1 className={`${josefin_Sans.className}  text-[#8A8FB9] mr-32 text-[12px] w-[250px] h-[14px] `}>About 9,620 results (0.62 seconds)</h1>
        </div>
        </div>
 
    
    <div className='flex mt-20 mb-20 gap-5 justify-evenly items-center'>
    <h1 className={`${lato.className}text-[#3F509E] text-[16px] `}>Per Page:</h1>
    <input type="text" className='shadow-black text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none w-[55px] h-[25px]' />
    <h1 className={`${lato.className}text-[#3F509E] text-[16px]`}>Sort By:</h1>
    <input type="text" placeholder='Best Match' className='shadow-black  text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none w-[96px] h-[28px]' />
    <h1 className={`${lato.className}text-[#3F509E] text-[16px]`} > View:  </h1>
    <input type="text" className='shadow-black text-sm text-gray-600 bg-white border rounded-l-md focus:outline-none w-[162px] h-[30px]' />
    </div>
  </div>      
 
      <div className="grid grid-cols-4 gap-10 mt-10 px-10">
        {productData.map((product, index) => (
          <div key={index} className="flex flex-col items-center mb-8">
            <Image src={product.image} height={201} width={201} alt={product.name} />
            <h1 className={`${josefin_Sans.className} text-[#151875] mt-2`}>{product.name}</h1>
            <div className="flex space-x-1 mt-1">
              <Image src="/pic17.png" height={10} width={10} alt="rectangle" />
              <Image src="/pic18.png" height={10} width={10} alt="rectangle" />
              <Image src="/pic19.png" height={10} width={10} alt="rectangle" />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-mypink line-through">{product.oldPrice}</p>
              <p className="text-[#151875] font-bold">{product.newPrice}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="ml-32">
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

export default Grid;
