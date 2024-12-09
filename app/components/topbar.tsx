import { ChevronDown, Heart, Mail, Phone, User } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <nav className='bg-violet-800 flex justify-evenly text-white'>
        <div className='flex gap-3'>
            <Mail />
            <h6>varoonsolanki032@gmail.com</h6>
            <Phone/>
            <h6>03003384190</h6>
        </div>
    <div className='flex justify-center items-center gap-4'>
            <h1  className='flex '>English
            <ChevronDown/>
            </h1>
            <h1 className='flex'>USD
            <ChevronDown/>
            </h1>
            <h1 className='flex'>Login
            <User/>
            </h1>
            <h1 className='flex'>Wishlist
            <Heart/>
            </h1> 
            </div> 
    </nav>
    
  )
}

export default Topbar