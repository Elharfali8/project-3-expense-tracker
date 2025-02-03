import { Moon, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ToggleTheme } from './ToggleTheme'

const Navbar = () => {
  return (
    <nav className='h-20 grid items-center bg-muted px-4 md:px-8 lg:px-10'>
      <div className="flex items-center justify-between">
        <Link href='/dashboard' className='text-2xl lg:text-3xl font-semibold tracking-wide text-primary py-1 px-2 rounded-lg  transition-all ease-in-out duration-150 hover:scale-105 '>
          XpenseHub
        </Link>
        <div className='flex items-center gap-x-2'>
          <User />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}

export default Navbar