import { josefin_Sans, lato } from '@/app/ui/fonts'
import pic89 from '../../../public/pic89.png'
import pic92 from '../../../public/pic92.png'
import pic93 from '../../../public/pic93.png'
import pic94 from '../../../public/pic94.png'
import pic95 from '../../../public/pic95.png'
import pic96 from '../../../public/pic96.png'
import pic97 from '../../../public/pic97.png'
import pic98 from '../../../public/pic98.png'
import pic99 from '../../../public/pic99.png'
import pic100 from '../../../public/pic100.png'
import pic101 from '../../../public/pic101.png'
import pic102 from '../../../public/pic102.png'
import pic104 from '../../../public/pic104.png'
import pic105 from '../../../public/pic105.png'
import pic106 from '../../../public/pic106.png'
import pic107 from '../../../public/pic107.png'
import pic108 from '../../../public/pic108.png'
import pic109 from '../../../public/pic109.png'
import pic110 from '../../../public/pic110.png'
import pic111 from '../../../public/pic111.png'
import pic112 from '../../../public/pic112.png'

import pic35 from '../../../public/pic35.png'

import { Calendar1Icon, InstagramIcon, LinkedinIcon, PencilIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Singleblog = () => {
  return (
    <>
    <div className="bg-[#F6F5FF] h-[286px]  flex justify-center items-start flex-col">
        <h1
          className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875] ml-10`}
        >
         Single  Blog Page
        </h1>
        <div className="flex ml-10">
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Home.
          </button>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center ">
            Pages.
          </button>
          <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">
            Single Blog Page
          </button>
        </div>
      </div>
    <div className=" py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Blog Section */}
        <div className="md:col-span-3 space-y-10">
          {/* Blog Post 1 */}
          <div className="shadow-md rounded-lg overflow-hidden">
            <Image
              src={pic89}
              alt="Blog 1"
              width={870}
              height={453}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <p className="text-sm flex items-center gap-4">
                <PencilIcon/>
                <span className={`${josefin_Sans.className} bg-[#FFE7F9]`}>Surf Auxion</span>
                <Calendar1Icon/>
                <span className={`${josefin_Sans.className} bg-[#FFECE2]`}>20 August 2023</span>
              </p>
              <h2  className={`${josefin_Sans.className} mt-5 flex items-center font-semibold text-[#151875] text-[36px] `} >
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className={`${lato.className} mt-4 text-[#8A8FB9] text-[16px] `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
              </p>
              <p className={`${lato.className} mt-4 text-[#8A8FB9] text-[16px] `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
              <div className='bg-[#FAFAFB] mt-20 w-[900px] h-[141px]' >
                <p className={`${josefin_Sans.className} mt-4 text-[#8A8FB9] text-[18px]`}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.</p>
                <p className={`${josefin_Sans.className} mt-4 text-[#8A8FB9] text-[18px]`}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.</p>
                <p className={`${josefin_Sans.className} mt-4 text-[#8A8FB9] text-[18px]`}>“Commodo dictum sapien amet consequat“</p>
              </div>
              <div className='mt-20 w-[900px]' >
              <div className='flex gap-5'>
              <Image
            src={pic104}
            height={245}
            width={415}
            alt="Cantilever Chair"
            className="bg-background"
          /><Image
          src={pic105}
          height={245}
          width={417}
          alt="Cantilever Chair"
          className="bg-background"
        />
        </div>
        <div>
        <p className={`${lato.className} text-[#8A8FB9] text-[16px] mt-10`}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, “</p>
        </div>
              </div>
              <div className='flex gap-5 mt-16'>
             <div >
              <Image
            src={pic106}
            height={254}
            width={209}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1
          className={`${josefin_Sans.className} text-[20px] ml-5 text-[#000000]`}
        >
          Quam sed
        </h1>
        <div className='flex gap-4'>
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px]`}>$22.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[16px] line-through`}>$32.00</h1>
        <span className='text-[10px]'>⭐⭐⭐⭐⭐</span>
        </div>
          </div>
          <div>
          <Image
          src={pic107}
          height={254}
          width={209}
          alt="Cantilever Chair"
          className="bg-background"
        />
        <h1
          className={`${josefin_Sans.className} text-[20px] ml-5 text-[#000000]`}
        >
          Tristique sed
        </h1>
        <div className='flex gap-4'>
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px]`}>$22.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[16px] line-through`}>$32.00</h1>
        <span className='text-[10px]'>⭐⭐⭐⭐⭐</span>
        </div>
        </div>
        <div>
         <Image
            src={pic108}
            height={254}
            width={209}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1
          className={`${josefin_Sans.className} text-[20px] ml-5 text-[#000000]`}
        >
          A etiam
        </h1>
        <div className='flex gap-4'>
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px]`}>$22.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[16px] line-through`}>$32.00</h1>
        <span className='text-[10px]'>⭐⭐⭐⭐⭐</span>
        </div>
          </div>
          <div>
          <Image
          src={pic109}
          height={254}
          width={209}
          alt="Cantilever Chair"
          className="bg-background"
        />
        <h1
          className={`${josefin_Sans.className} text-[20px] ml-5 text-[#000000]`}
        >
          Mi nisi
        </h1>
        <div className='flex gap-4'>
        <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px]`}>$22.00</h1>
        <h1 className={`${josefin_Sans.className} text-mypink text-[16px] line-through`}>$32.00</h1>
        <span className='text-[10px]'>⭐⭐⭐⭐⭐</span>
        </div>
        </div>
        </div> 
          <div className='mt-10'>
        <p className={`${lato.className} text-[#8A8FB9] text-[16px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
        <p className={`${lato.className} text-[#8A8FB9] mt-10 text-[16px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
          </div>
            </div>
            <div>
            <div className="flex gap-4 text-blue-900 ml-96 mt-20">
            <FaFacebook href='https://web.facebook.com/varoon.kumar.1023?mibextid=ZbWKwL&_rdc=1&_rdr#' className="w-[35px] h-[35px]"/>
            <InstagramIcon  href='https://www.instagram.com/varoonkumarmalhi/profilecard/?igsh=N3R2dDIyN2sxdDRv' className="w-[35px] h-[35px]"/>
            <LinkedinIcon href='https://www.linkedin.com/in/varoon-kumar-274a512b7/' className="w-[35px] h-[35px]"/>
            </div>
            </div>
            <div>
            <Image
            src={pic110}
            height={45}
            width={883}
            alt="Cantilever Chair"
            className="mt-20 ml-10"
          />
            </div>
            <div className='mt-10'>
            <div className="flex items-center justify-center">
      <div className="flex w-[669px] h-[135px] rounded-lg shadow-md overflow-hidden ">
        {/* Image Section */}
        <div className="">
          <Image
            src={pic111}
            alt="Profile Picture"
            width={104}
            height={107}
            className="object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="ml-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[18px] font-semibold text-[#363385]">Sapien ac</h2>
            <span className="text-[13px] text-[#A3A2B6] mr-72">Jan 09, 2020</span>
          </div>
          <p className="text-[#A3A2B6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
            rutrum vulputate consectetur.
          </p>
        </div>
      </div>
 </div>
          

 <div className="flex items-center justify-center mt-10">
      <div className="flex w-[669px] h-[135px] rounded-lg shadow-md overflow-hidden ">
        {/* Image Section */}
        <div className="">
          <Image
            src={pic112}
            alt="Profile Picture"
            width={104}
            height={107}
            className="object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="ml-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[18px] font-semibold text-[#363385]">Augue conva</h2>
            <span className="text-[13px] text-[#A3A2B6] mr-72">Jan 09, 2020</span>
          </div>
          <p className="text-[#A3A2B6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
            rutrum vulputate consectetur.
          </p>
        </div>
      </div>
         </div>  
           </div>
           <div>
            <div className='flex ml-28 mt-36 gap-5'>
            <PhoneIcon/>
                <input type="text" 
                placeholder=' Your Name*' 
                className="w-[341px] h-[42px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                />
                <MdEmail/>
                <input type="email" 
                placeholder=' Write Your Email*' 
                className="w-[341px] h-[42px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                />
                </div>
                <input type="text" 
                placeholder=' Write Your Message*' 
                className="w-[717px] h-[206px] ml-36 mt-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                />
                <div className="flex items-center gap-2 ml-36 mt-10">
                <input type="checkbox" id="offers" className="w-4 h-4" />
                <label htmlFor="offers" className=" text-sm text-[#8A91AB]">
                Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>
              <button className="w-[697px] ml-36 mb-8 mt-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600">
              Continue Shipping
            </button>
             </div>
            </div>
             </div>

            
    


        {/* Sidebar Section */}
        <div className="space-y-10">
          {/* Search */}
          <div className="p-6 shadow-md rounded-lg">
            <h3 className={`${josefin_Sans.className} text-[#151875] text-lg font-semibold mb-4 `} >Search</h3>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Categories */}
          <div className=" p-6 shadow-md rounded-lg">
            <h3 className={`${josefin_Sans.className} text-[#151875] text-lg font-semibold mb-4 `}>
              Categories
            </h3>
            <ul className="space-y-2">
             <div className="flex gap-5 ">
              <li>
                <a
                  href="#"
                  className={`${josefin_Sans.className} text-[#FFFFFF] p-2 hover:text-purple-600  bg-mypink`}
                >
                  Hubbies (19)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${josefin_Sans.className} text-[#151875] font-semibold hover:text-purple-600 `} 
                >
                  Women (21)
                </a>
              </li>
              </div>
              <div className="flex gap-5 ">
              <li>
                <a
                  href="#"
                  className={`${josefin_Sans.className} text-[#151875] font-semibold p-2 hover:text-purple-600 `}
                >
                  Women (21)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${josefin_Sans.className} text-[#151875] font-semibold hover:text-purple-600 `} 
                >
                  Women (21)
                </a>
              </li>
              </div>
              <div className="flex gap-5 ">
              <li>
                <a
                  href="#"
                  className={`${josefin_Sans.className} text-[#151875] font-semibold p-2 hover:text-purple-600 `}
                >
                  Women (21)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${josefin_Sans.className} text-[#151875] font-semibold hover:text-purple-600 `} 
                >
                  Women (21)
                </a>
              </li>
              </div>
             
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="p-6 shadow-md rounded-lg">
            <h3  className={`${josefin_Sans.className} text-[#151875] text-lg font-semibold mb-4 `}>
              Recent Posts
            </h3>
            <div className="flex justify-center items-start flex-col mt-3 gap-2">
        <div className="flex items-center justify-start ">
          <div className="flex items-center justify-center"><Image className="w-[67px] h-[67px]" src={pic92} alt="/"/></div>
          <div className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[14px]`}>It is a long established fact</h1>
          <h1 className={`${josefin_Sans.className} text-[#8A8FB9] text-[11px]`}>9 August 2020</h1>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="flex items-center justify-center"><Image className="w-[64px] h-[71px]" src={pic93} alt="/"/></div>
           <div  className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[14px]`} >It is a long established fact</h1> 
          <h1 className={`${josefin_Sans.className} text-[#8A8FB9] text-[11px]`}>9 August 2020</h1>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className=" flex items-center justify-center"><Image className="w-[67px] h-[67px]" src={pic94} alt="/"/> </div>
           <div className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[14px]`}>It is a long established fact</h1> 
          <h1 className={`${josefin_Sans.className} text-[#8A8FB9] text-[11px]`}>9 August 2020</h1>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className=" flex items-center justify-center"><Image className="w-[67px] h-[67px]" src={pic95} alt="/"/> </div>
           <div className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[14px] `}>It is a long established fact</h1> 
          <h1 className={`${josefin_Sans.className} text-[#8A8FB9] text-[11px]`}>9 August 2020</h1>
          </div>
        </div>
      </div>
          </div>
          <div className="p-6 shadow-md rounded-lg">
            <h3  className={`${josefin_Sans.className} text-[#151875] text-lg font-semibold mb-4 `}>
            Sale Product
            </h3>
            <div className="flex justify-center items-start flex-col mt-3 gap-2">
        <div className="flex items-center justify-start ">
          <div className="flex items-center justify-center"><Image className="w-[67px] h-[67px]" src={pic96} alt="/"/></div>
          <div className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[14px]`}>Elit ornare in enim mauris.</h1>
          <h1 className={`${lato.className} text-[#8A8FB9] text-[11px]`}>29 November 2025</h1>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="flex items-center justify-center"><Image className="w-[64px] h-[71px]" src={pic97} alt="/"/></div>
           <div  className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[14px]`} >Viverra pulvinar et enim.</h1> 
          <h1 className={`${lato.className} text-[#8A8FB9] text-[11px]`}>29 November 2025</h1>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className=" flex items-center justify-center"><Image className="w-[67px] h-[67px]" src={pic98} alt="/"/> </div>
           <div className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[14px]`}>Mattis varius donec fdsfd</h1> 
          <h1 className={`${lato.className} text-[#8A8FB9] text-[11px]`}>29 November 2025</h1>
          </div>
        </div>

      </div>
          </div>
          <div className="p-6 shadow-md rounded-lg">
          <h3  className={`${josefin_Sans.className} text-[#151875] text-lg font-semibold mb-4 `}>
            Offer Product
            </h3>
            <div className=" justify-center items-start flex-col mt-3 gap-2">
        <div className="flex gap-3">
        <div className="items-center justify-start ">
          <div className="flex items-center justify-center"><Image className="w-[126px] h-[80px]" src={pic99} alt="/"/></div>
          <div className=" flex-col justify-start items-start ml-5">
          <h1 className={`${lato.className} text-[#151875] text-[14px] font-semibold `}>Duis lectus est.</h1>
          <h1 className={`${josefin_Sans.className} text-[#8A8FB9] text-[11px]`}>$12.00 - $15.00</h1>
          </div>
        </div>

        <div className=" items-center justify-start">
          <div className=" items-center justify-center"><Image className="w-[126px] h-[80px]" src={pic100} alt="/"/></div>
           <div  className=" flex-col justify-start items-start ml-5">
          <h1 className={`${lato.className} text-[#151875] text-[14px] font-semibold `} >Sed placerat.</h1> 
          <h1 className={`${josefin_Sans.className} text-[#8A8FB9] text-[11px]`}>$12.00 - $15.00</h1>
          </div>
        </div>
        </div>
        <div className="flex">
        <div className=" items-center justify-start">
          <div className=" flex items-center justify-center"><Image className="w-[126px] h-[80px]" src={pic101} alt="/"/> </div>
           <div className=" flex-col justify-start items-start ml-5">
          <h1 className={`${lato.className} text-[#151875] text-[14px] font-semibold `}>Netus proin.</h1> 
          <h1 className={`${josefin_Sans.className} text-[#8A8FB9] text-[11px]`}>$12.00 - $15.00</h1>
          </div>
        </div>

        <div className=" items-center justify-start">
          <div className=" items-center justify-center"><Image className="w-[126px] h-[80px]" src={pic102} alt="/"/> </div>
           <div className=" flex-col justify-start items-start ml-5">
          <h1 className={`${lato.className} text-[#151875] text-[14px] font-semibold`}>Platea in.</h1> 
          <h1 className={`${josefin_Sans.className} text-[#8A8FB9] text-[11px]`}>$12.00 - $15.00</h1>
          </div>
        </div>
        </div>
      </div>
          </div>
          <div className="p-6 shadow-md rounded-lg">
          <h3  className={`${josefin_Sans.className} text-[#151875] text-lg font-semibold mb-4 text-[22px]`}>
             Follow
            </h3>
            <div className="flex gap-4 text-blue-900">
            <FaFacebook className="w-[25px] h-[25px]"/>
            <InstagramIcon className="w-[25px] h-[25px]"/>
            <LinkedinIcon className="w-[25px] h-[25px]"/>
            </div>
            </div>
            <div className="p-6 shadow-md rounded-lg">
          <h3  className={`${josefin_Sans.className} text-[#151875] text-lg font-semibold mb-4 text-[22px]`}>
             Tag
            </h3>
            <div className="flex gap-5">
            <h3  className={`${lato.className} text-[#151875]  mb-4 text-[16px] underline`}>
             General
            </h3>
            <h3  className={`${lato.className} text-mypink  mb-4 text-[16px] underline`}>
             Atsanil
            </h3>
            
            
            <h3  className={`${lato.className} text-[#151875]  mb-4 text-[16px] underline`}>
             Insas
            </h3>
            </div>
            <div className="flex gap-5">
            <h3  className={`${lato.className} text-[#151875]  mb-4 text-[16px] underline`}>
             Bibsaas
            </h3>
            <h3  className={`${lato.className} text-[#151875]  mb-4 text-[16px] underline`}>
             Nul1a
            </h3>
            </div>
            
            </div>
        </div>
      </div>
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
  )
}

export default Singleblog