import { josefin_Sans, lato} from '@/app/ui/fonts'
import { Button } from '@/components/ui/button'
import pic113 from '../../../public/pic113.png'
import pic12 from '../../../public/pic12.png'
import pic13 from '../../../public/pic13.png'
import pic14 from '../../../public/pic14.png'
import pic15 from '../../../public/pic15.png'
import pic114 from '../../../public/pic114.png'
import pic115 from '../../../public/pic115.png'
import pic116 from '../../../public/pic116.png'
import pic117 from '../../../public/pic117.png'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
     <div className="bg-[#F6F5FF] h-[286px] flex justify-center items-start flex-col">
            <h1 className={`${josefin_Sans.className} text-[36px] font-bold text-[#151875]`}>About</h1>
            <div className="flex">
              <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">Home.</button>
              <button className="text-black text-[16px] font-medium hover:text-pink-600 flex items-center">Pages.</button>
              <button className="text-mypink text-[16px] font-medium hover:text-pink-600 flex items-center">About</button>        
            </div>        
          </div>
          <div className="flex justify-center items-center">
      <div className="flex justify-evenly items-center">
        <Image className="h-[409px] w-[570px] mr-10" src={pic113} alt="Sofa"  />
        <div>
          <h1 className={`${josefin_Sans.className} p-5 text-[#151875] text-[35px] font-bold`}>
          Know About Our Ecomerce <br /> Business, History
          </h1>
          <p className='text-[#8A8FB9] ml-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
              <div className="flex gap-5 ">
              <Button  variant={"ghost"} className="bg-mypink text-white">Contact us</Button>
              </div>
        </div>
      </div>
      </div>
      <div>
        <div>
          <h1
            className={`${josefin_Sans.className} flex justify-evenly items-center font-bold text-[42px] text-black p-10`}
          >
            Our Features
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
              Free Delivery
              </h1>
              <p className="text-[16px] pr-20 pl-20 text-center text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                beatae saepe dolore.
              </p>
            </div>
            <div className="flex flex-col justify-evenly items-center">
              <Image src={pic13} height={65} width={65} alt="rectangle" />
              <h1 className={`${josefin_Sans.className} p-5 text-[#151875]`}>
              100% Cash Back
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
                Quality Product
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
    
      <div className='mt-10  flex flex-col justify-center  items-center bg-[#FBFBFF]'>
      <h1 className={`${josefin_Sans.className} text-black font-bold text-center text-[42px] mb-3`}>
                Our Client Say!
              </h1>
        <div className='flex justify-center items-start gap-3'>
        <Image
                src={pic114}
                height={55}
                width={55}
                alt="Cantilever Chair"
                className="bg-background mt-3"
              />
              <Image
                src={pic115}
                height={59}
                width={55}
                alt="Cantilever Chair"
                className="bg-background"
              />
              <Image
                src={pic116}
                height={55}
                width={55}
                alt="Cantilever Chair"
                className="bg-background mt-3"
              />     
        </div>
        <div className='flex flex-col justify-center items-center w-[689px] h-[265px]'>
            <h1 className={`${lato.className} text-[#151875] font-bold text-center text-[22px]`}>
            Selina Gomez
              </h1>
            <h1 className={`${lato.className} text-[#8A8FB9]  text-center text-[10px] mb-3`}>
            Ceo At Webecy Digital
              </h1>
              <p className={`${lato.className} text-[#8A8FB9] text-center font-semibold`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
              <Image
                src={pic117}
                height={55}
                width={55}
                alt="Cantilever Chair"
                className="bg-background mt-3"
              /> 
              </div>  
      </div>
    </>
  )
}


export default About