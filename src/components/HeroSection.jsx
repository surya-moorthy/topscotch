import React from 'react'
import Header from './Header'

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-screen bg-neutral-50 ">
    
       <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-y-5">
             <h1 className="text-6xl font-bold font-sans tracking-wide max-w-xl text-neutral-900">
                The all-in-one invoicing software for small business
            </h1>
            <p className="text-neutral-600 max-w-xl text-xl">
                Boost your bottom line with free invoicing, 
                easy bill pay and lightning-fast cash flow
            </p>
       </div>
       <div className="border-1 rounded-md p-2 my-5 max-w-lg mt-10">
             <input type="text" className="outline-none text-lg p-2"/>
              <button className="bg-neutral-900 text-lg text-white px-5 py-2 rounded-lg hover:bg-amber-200 hover:text-black font-mono">
                              Sign me up
              </button>
       </div>
       </div>
    </div>
  )
}
