
import { Headset, SearchIcon, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Input } from './input'


const search = () => {
  return (
    <div className='flex justify-between'>
      <div>
       <form action='/search' method='GET' className='flex items-stretch h-10'>
          
         <Input
                className='flex-1  rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
                placeholder=""
                name='q'
                type='search'
              />
              <button type='submit' className='bg-amber-300 text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2'>
                <SearchIcon className='w-6 h-6'/>
              </button>
          
       </form>
       
      </div>
      <div className='flex space-x-4'>
         <div className='flex space-x-1'>
          <Headset/>
          <h1>Sign in</h1>
         </div>
         <div className='flex space-x-1'>
          <ShoppingCart />
          <h1>Cart</h1>
         </div>
      </div>
    </div>
  )
}

export default search