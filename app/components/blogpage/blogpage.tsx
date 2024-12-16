import { josefin_Sans, lato } from "@/app/ui/fonts";
import pic89 from '../../../public/pic89.png'
import pic90 from '../../../public/pic90.png'
import pic91 from '../../../public/pic91.png'
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
import pic35 from '../../../public/pic35.png'
import pic103 from '../../../public/pic103.png'
import Image from "next/image";
import { Calendar1Icon, InstagramIcon, LinkedinIcon, PencilIcon} from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const BlogPage = () => {
  return (
    <>
    <div className="bg-[#F6F5FF] h-[286px]  flex justify-center items-start flex-col">
        <h1
          className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875]`}
        >
          Blog Page
        </h1>
        <div className="flex">
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Home.
          </button>
          <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">
            Pages.
          </button>
          <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">
          Blog Page
          </button>
        </div>
      </div>
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Blog Section */}
        <div className="md:col-span-3 space-y-10">
          {/* Blog Post 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
              <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={pic90}
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
                <span className={`${josefin_Sans.className} bg-[#FFECE2]`}>11 July 2020</span>
              </p>
              <h2  className={`${josefin_Sans.className} mt-5 flex items-center font-semibold text-[#151875] text-[36px] `} >
              Aenean vitae in aliquam ultrices lectus. Etiam.
              </h2>
              <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={pic91}
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
              Sit nam congue feugiat nisl, mauris amet nisi. 
              </h2>
              <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline mt-4 inline-block"
              >
                Read More
              </a>
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
    <div className="ml-96 mb-7 mt-6">
        <Image
            src={pic103}
            height={24}
            width={236} 
            alt="Cantilever Chair"
            className="flex justify-evenly items-center"
          />
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

export default BlogPage;
