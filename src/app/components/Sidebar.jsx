import Link from 'next/link';
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
export default function Sidebar() {
  return (
    <div className='flex flex-col gap-4 p-3'>
      <Link href='/'>
      <FaXTwitter className='w-16 h-16 cursor-pointer
      p-3 hover:bg-gray-100 rounded-full transition-all
      duration-200' />
      </Link>
      <Link href='/' className='flex items-center p-3
      hover:bg-gray-100 rounded-full transition-all
      duration-200 gap-2 w-fit'>
      <HiHome  className='w-7 h-7'/>
      <span className='fond-bold hidden md:inline'>Home</span>
      </Link>
    <button className='bg-blue-400 text-white rounded-full
    w-48 h-9 hover:brightness-95 transition-all
    duration-200 shadow-md hidden md:inline font-semibold'>
        Sign In
    </button>
    </div>
  )
}
