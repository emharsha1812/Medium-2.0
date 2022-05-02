import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.svg'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <div className="w-44 object-contain">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-700 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <h3 className="text-green-500">Sign in</h3>
        <h3 className=" rounded-full border-2 border-green-700 px-4 py-1 text-green-600 ">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
