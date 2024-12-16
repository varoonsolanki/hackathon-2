import Image from "next/image";
import React from "react";
import pic from "../../public/pic.png";
import pic2 from "../../public/pic2.png";
import rectangle from "../../public/rectangle.png";
import pic3 from "../../public/pic3.png";
import pic7 from "../../public/pic7.png";
import pic8 from "../../public/pic8.png";
import pic9 from "../../public/pic9.png";
import pic10 from "../../public/pic10.png";
import pic11 from "../../public/pic11.png";
import pic12 from "../../public/pic12.png";
import pic13 from "../../public/pic13.png";
import pic14 from "../../public/pic14.png";
import pic15 from "../../public/pic15.png";
import pic16 from "../../public/pic16.png";
import pic17 from "../../public/pic17.png";
import pic18 from "../../public/pic18.png";
import pic19 from "../../public/pic19.png";
import pic20 from "../../public/pic20.png";
import pic21 from "../../public/pic21.png";
import pic22 from "../../public/pic22.png";
import pic23 from "../../public/pic23.png";
import pic24 from "../../public/pic24.png";
import pic25 from "../../public/pic25.png";
import pic26 from "../../public/pic26.png";
import pic27 from "../../public/pic27.png";
import pic28 from "../../public/pic28.png";
import pic29 from "../../public/pic29.png";
import pic31 from "../../public/pic31.png";
import pic32 from "../../public/pic32.png";
import pic33 from "../../public/pic33.png";
import pic35 from "../../public/pic35.png";
import pic36 from "../../public/pic36.png";
import pic37 from "../../public/pic37.png";
import pic38 from "../../public/pic38.png";

import { lato} from    "@/app/ui/fonts"
import { Button } from "@/components/ui/button";
import { Check } from  "lucide-react";
import {Josefin_Sans} from "next/font/google";


// Font configuration
const josefin_Sans = Josefin_Sans({
  subsets: ['latin'],
  weight: ["400", "700"],
});

const Home = () => {
  return (
    <>
      <div className="flex justify-evenly  h-[650px] bg-[#F2F0FF]">
        <div className="mt-none">
          <Image src={pic} height={387} width={387} alt="The light" />
        </div>
        <div className="flex items-center">
        <div className={josefin_Sans.className}>
          <h1 className="text-mypink font[53px]">Best Furniture For Your Castle</h1>
          <h2 className="text-black font-bold text-[53px]">
            New Furniture Collection  Trend in 2020
          </h2>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            corporis corrupti ab. Excepturi, omnis quidem?
          </p>
          <Button className="bg-mypink mt-20 ml-10 text-white">Shop Now</Button>
        </div>
        <div>
          <Image src={pic2} height={629} width={629} alt="The UI photo" />
        </div>
        </div>
      </div>
      <div>
        <h1
          className={`${josefin_Sans.className} flex justify-evenly items-center font-bold text-[42px] text-[#1A0B5B] p-10`}
        >
          Featured Products
        </h1>
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pic20}
              height={244}
              width={247}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <h1 className={`${josefin_Sans.className} text-mypink`}>
              Cantilever chair
            </h1>
            <Image src={rectangle} height={4} width={52} alt="rectangle"/>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              Code - Y523201
            </h1>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              $42.00
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pic21}
              height={244}
              width={247}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <h1 className={`${josefin_Sans.className} text-mypink`}>
              Cantilever chair
            </h1>
            <Image src={rectangle} height={4} width={52} alt="rectangle" />
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              Code - Y523201
            </h1>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              $42.00
            </h1>
          </div>
          <div  className="flex flex-col justify-center items-center">
            <Image
              src={pic22}
              height={244}
              width={247}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <h1 className={`${josefin_Sans.className} text-mypink`}>
              Cantilever chair
            </h1>
            <Image src={rectangle} height={4} width={52} alt="rectangle" />
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              Code - Y523201
            </h1>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              $42.00
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pic23}
              height={244}
              width={247}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <h1 className={`${josefin_Sans.className} text-mypink`}>
              Cantilever chair
            </h1>
            <Image src={rectangle} height={4} width={52} alt="rectangle" />
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              Code - Y523201
            </h1>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              $42.00
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1
          className={`${josefin_Sans.className} flex justify-evenly items-center font-bold text-[42px] text-[#1A0B5B] p-10`}
        >
          Latest Products
        </h1>
        <div className="flex justify-evenly items-center mb-10">
        <a href="#" className="mx-4 text-mypink">New Arrival </a>
        <a href="#" className="mx-4 text-[#0D0E43]">Best Seller</a>
        <a href="#" className="mx-4 text-[#0D0E43]">Featured</a>
        <a href="#" className="mx-4 text-[#0D0E43]">Special Offer </a>
        </div>
        <div className="flex justify-evenly items-center">
          <div>
            <Image
              src={pic7}
              height={306}
              width={365}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <h1 className={`${josefin_Sans.className} text-mypink`}>
              Cantilever chair
            </h1>
          </div>
          <div>
            <Image
              src={pic8}
              height={277}
              width={377}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <h1 className={`${josefin_Sans.className} text-mypink`}>
              Cantilever chair
            </h1>
          </div>
          <div>
            <Image
              src={pic3}
              height={306}
              width={365}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <h1 className={`${josefin_Sans.className} text-mypink`}>
              Cantilever chair
            </h1>
          </div>
        </div>
        <div>
          <div className="flex justify-evenly items-center">
            <div>
              <Image
                src={pic9}
                height={277}
                width={267}
                alt="Cantilever Chair"
                className="bg-background"
              />
              <h1 className={`${josefin_Sans.className} text-mypink`}>
                Cantilever chair
              </h1>
            </div>
            <div>
              <Image
                src={pic10}
                height={264}
                width={303}
                alt="Cantilever Chair"
                className="bg-background"
              />
              <h1 className={`${josefin_Sans.className} text-mypink`}>
                Cantilever chair
              </h1>
            </div>
            <div>
              <Image
                src={pic11}
                height={261}
                width={360}
                alt="Cantilever Chair"
                className="bg-background"
              />
              <h1 className={`${josefin_Sans.className} text-mypink`}>
                Cantilever chair
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1
            className={`${josefin_Sans.className} flex justify-evenly items-center font-bold text-[42px] text-[#1A0B5B] p-10`}
          >
            What Shopex Offer!
          </h1>

          <div className="flex justify-evenly items-center mb-16">
            <div className="flex flex-col justify-evenly items-center w-[270] h-[320]">
              <Image
                src={pic12}
                height={65}
                width={65}
                alt="Cantilever Chair"
                className="bg-background"
              />
              <h1 className={`${josefin_Sans.className} p-5 text-[#151875]`}>
                24/7 Support
              </h1>
              <p className="text-[16px] pr-20 pl-20 text-center text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                beatae saepe dolore.
              </p>
            </div>
            <div className="flex flex-col justify-evenly items-center">
              <Image src={pic13} height={65} width={65} alt="rectangle" />
              <h1 className={`${josefin_Sans.className} p-5 text-[#151875]`}>
                24/7 Support
              </h1>
              <p className="text-[16px] pr-20 pl-20 text-center text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                beatae saepe dolore.
              </p>
            </div>

            <div className="flex flex-col justify-evenly items-center">
              <Image
                src={pic14}
                height={65}
                width={65}
                alt="Cantilever Chair"
                className="bg-background"
              />
              <h1 className={`${josefin_Sans.className} p-5 text-[#151875]`}>
                24/7 Support
              </h1>
              <p className="text-[16px] pr-20 pl-20 text-center text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                beatae saepe dolore.
              </p>
            </div>
            <div className="flex flex-col justify-evenly items-center">
              <Image src={pic15} height={65} width={65} alt="rectangle" />
              <h1 className={`${josefin_Sans.className} p-5 text-[#151875]`}>
                24/7 Support
              </h1>
              <p className="text-[16px] pr-20 pl-20 text-center text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                beatae saepe dolore.
              </p>
              </div>
            
          </div>
        </div>
        <div />
      </div>
      <div className="bg-[#F1F0FF] flex justify-center">
      <div className="flex justify-evenly items-center  h-[550px] w-[1050px]">
        <Image className="h-[550px] w-[509px] mr-10" src={pic16} alt="Sofa"  />
        <div>
          <h1 className={`${josefin_Sans.className} p-5 text-[#151875] text-[35px] font-bold`}>
            Unique Features Of leatest & Trending Poducts
          </h1>
          <div className="flex items-center gap-3 mb-5">
                <div>
                  <Image src={pic18} height={11} width={11} alt=""/>
                </div>
                <p>All frames constructed with hardwood solids and laminates</p>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div>
                  <Image src={pic17} height={16} width={16} alt=""/>
                </div>
                <p>Reinforced with double wood dowels, glue, screw - nails corner 
                blocks and machine nails</p>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div>
                  <Image src={pic19} height={11} width={11} alt=""/>
                </div>
                <p>Arms, backs and seats are structurally reinforced</p>
              </div>
              <div className="flex  gap-5 ">
              <Button  variant={"ghost"} className="bg-mypink text-white">Add To Card </Button>
              <div>
                <h1 className="font-semibold text-[#151875] ">B&B Italian Sofa </h1>
                <h1 className={`${lato.className} text-[#151875]` }>$32.00</h1>
              </div>
              </div>
        </div>
      </div>
      </div>
      <h1
        className={`${josefin_Sans.className} flex justify-evenly items-center font-bold text-[42px] text-[#1A0B5B] p-10`}
      >
        Trending Products
      </h1>
      <div className="flex justify-evenly items-center">
        <div>
          <Image
            src={pic20}
            height={244}
            width={247}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1 className={`${josefin_Sans.className} text-mypink`}>
            Cantilever chair
          </h1>

          <h1 className={`${josefin_Sans.className} text-[#151875]`}>
            Code - Y523201
          </h1>
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
        </div>
        <div>
          <Image
            src={pic21}
            height={244}
            width={247}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1 className={`${josefin_Sans.className} text-mypink`}>
            Cantilever chair
          </h1>

          <h1 className={`${josefin_Sans.className} text-[#151875]`}>
            Code - Y523201
          </h1>
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
        </div>
        <div>
          <Image
            src={pic22}
            height={244}
            width={247}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1 className={`${josefin_Sans.className} text-mypink`}>
            Cantilever chair
          </h1>

          <h1 className={`${josefin_Sans.className} text-[#151875]`}>
            Code - Y523201
          </h1>
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
        </div>
        <div>
          <Image
            src={pic23}
            height={244}
            width={247}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1 className={`${josefin_Sans.className} text-mypink`}>
            Cantilever chair
          </h1>
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>
            Code - Y523201
          </h1>
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
        </div>

      </div>
      <div className="flex mt-10">
        <div className="flex justify-evenly items-center">
          <Image src={pic24} height={270}  width={420} alt="" />
        </div>
        <div>
          <Image src={pic25} height={270} width={420} alt="" />
        </div>
         <div className="flex justify-center ml-24 items-start flex-col w-[267px] mt-3 gap-2">
        <div className="flex items-center justify-start ">
          <div className="w-[107px] h-[74px]  bg-[#F5F6F8] flex items-center justify-center"><Image className="w-[67px] h-[67px]" src={pic26} alt="/"/></div>
          <div className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px] w-[151px] h-[16px] `}>Executive Seat chair</h1>
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="w-[107px] h-[74px]  bg-[#F5F6F8] flex items-center justify-center"><Image className="w-[64px] h-[71px]" src={pic27} alt="/"/></div>
           <div  className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px] w-[151px] h-[16px] `} >Executive Seat chair</h1> 
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="w-[107px] h-[74px]  bg-[#F5F6F8] flex items-center justify-center"><Image className="w-[67px] h-[67px]" src={pic28} alt="/"/> </div>
           <div className="flex flex-col justify-start items-start ml-5">
          <h1 className={`${josefin_Sans.className} text-[#151875] text-[16px] w-[151px] h-[16px] `}>Executive Seat chair</h1> 
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
          </div>
        </div>
      </div>
      </div>
      <div className="justify-center items-center flex flex-col ">
        <div className=" flex justify-evenly items-center mb-10 ">
        <h1 className={`${josefin_Sans.className} text-[#151875] font-bold text-[42px]`} >Discount Items</h1>
        </div>
        <div className=" flex justify-evenly items-center w-[400px] mb-10 ">
        <a href="#" className="mx-4 text-mypink text-[18px]">Wood Chair</a>
        <a href="#" className="mx-4 text-[#0D0E43]">Plastic Chair</a>
        <a href="#" className="mx-4 text-[#0D0E43]">Sofa Collection</a>
        </div>  
      </div>
      <div className="bg-[#F1F0FF] flex justify-center">
      <div className="flex justify-evenly items-center  h-[550px] w-[1050px]">
        
        <div>
          <h1 className={`${josefin_Sans.className} p-5 text-[#151875] text-[30px] font-bold`}>
          20% Discount Of All Products
          </h1>
          <h1 className="text-mypink ml-10 text-[21px] mb-4">Eams Sofa Compact</h1>
          <h1 className="text-[17px] text-[#B7BACB]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem officiis voluptate voluptates fugiat ipsam?</h1>
          <div className="flex items-center gap-3 mb-5">
                <div className="flex mt-3 gap-5">
                <div>
                <div className="flex">
                  <Check/> 
                  <p className="text-[#B7BACB]">Material expose like metals</p>
                </div>

                <div className="flex">
                  <Check/> 
                  <p className="text-[#B7BACB]">Simple neutral colours.</p>
                </div>
                </div>

                <div>
                <div className="flex">
                  <Check/> 
                  <p className="text-[#B7BACB]">Clear lines and geomatric figures</p>
                </div>

                <div className="flex">
                  <Check/> 
                  <p className="text-[#B7BACB]">Material expose like metals</p>
                </div>
                </div>
                </div>
              </div>
              <div className="flex  gap-5  mt-15">
              <Button  variant={"ghost"} className="bg-mypink text-white">Shop Now</Button>
              </div>
              
        </div>
        <Image className="h-[550px] w-[509px] mr-15" src={pic29} alt="Sofa"  />
      </div>
      </div>
          <h1 className={`${josefin_Sans.className} p-5 text-[#151875] text-[35px] font-bold justify-evenly flex items-center mt-5`}>
            Top Cetegories
          </h1>
          <div className="flex justify-evenly items-center bg-cover bg-center rounded-full ">
        <div>
          <Image
            src={pic33}
            height={178}
            width={178}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>
            Mini LCV Chair
          </h1>
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
        </div>
        <div>
          <Image
            src={pic31}
            height={157}
            width={158}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>
          Mini LCV Chair
          </h1>
 
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
        </div>
        <div>
          <Image
            src={pic32}
            height={149}
            width={149}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>
          Mini LCV Chair
          </h1>

           
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
        </div>
        <div>
          <Image
            src={pic33}
            height={178}
            width={178}
            alt="Cantilever Chair"
            className="bg-background"
          />
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>
          Mini LCV Chair
          </h1>
          
          <h1 className={`${josefin_Sans.className} text-[#151875]`}>$32.00</h1>
        </div>
      </div>
        
        <div className="flex justify-evenly items-center">
          <div className="img">
         <div className=" flex justify-evenly items-center font-bold">
          <h1 className={`${josefin_Sans.className} text-[#151875] mt-28  text-[35px] justify-evenly items-center`}>Get Leatest Update By Subscribe <br /> 0ur Newslater</h1>
          </div>
          <Button  variant={"ghost"} className="bg-mypink ml-96 mb-10 text-white">Shop Now</Button>
          </div>
        </div>
<div className="ml-40 mb-32">
        <Image
            src={pic35}
            height={93}
            width={904}
            alt="Cantilever Chair"
            className="bg-background"
          />
</div>
<div>
<h1 className={`${josefin_Sans.className} text-[#151875] mt-10 mb-10 text-[42px] flex justify-evenly items-center font-bold`}>Latest Blog</h1>
</div>
<div className="flex justify-evenly items-center">
          <div>
            <Image
              src={pic36}
              height={255}
              width={370}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <div className="flex gap-9 text-[14px]">
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              Sabir Ali 
            </h1>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              20 August 2020 
            </h1>
            </div>
            <h1 className={`${josefin_Sans.className} font-bold text-[18px] mt-8 text-[#151875]`}>
            Top esssential Trends in 2021
            </h1>

            <h1 className={`${josefin_Sans.className} font-bold text-[18px] mt-8 text-[#72718F] `}>
            More off this less hello <br /> samlande  lied much
over <br /> tightly circa horse taped mightly
            </h1>
            <Button className={`${josefin_Sans.className} font-bold text-[18px] mt-8 text-[#151875] `}> Read More</Button>
          </div>
          <div>
            <Image
              src={pic37}
              height={255}
              width={370}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <div className="flex gap-9 text-[14px]">
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              Sabir Ali 
            </h1>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              20 August 2020 
            </h1>
            </div>
            <h1 className={`${josefin_Sans.className} font-bold text-[18px] mt-8 text-mypink`}>
            Top esssential Trends in 2021
            </h1>

            <h1 className={`${josefin_Sans.className} font-bold text-[18px] mt-8 text-[#72718F] `}>
            More off this less hello <br /> samlande  lied much
over <br /> tightly circa horse taped mightly
            </h1>
            <Button className={`${josefin_Sans.className} font-bold text-[18px] mt-8 text-mypink `}> Read More</Button>
          </div>
          <div>
            <Image
              src={pic38}
              height={255}
              width={377}
              alt="Cantilever Chair"
              className="bg-background"
            />
            <div className="flex gap-9 text-[14px]">
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              Sabir Ali 
            </h1>
            <h1 className={`${josefin_Sans.className} text-[#151875]`}>
              20 August 2020 
            </h1>
            </div>
            <h1 className={`${josefin_Sans.className} font-bold text-[18px] mt-8 text-[#151875]`}>
            Top esssential Trends in 2021
            </h1>

            <h1 className={`${josefin_Sans.className} font-bold text-[18px] mt-8 text-[#72718F] `}>
            More off this less hello <br /> samlande  lied much
over <br /> tightly circa horse taped mightly
            </h1>
            <Button className={`${josefin_Sans.className} font-bold text-[18px] mt-8 text-[#151875] `}> Read More</Button>
          </div>
        </div>
    </>
  );
};

export default Home;
