'use client'

import React from 'react'
import { Separator } from "@/components/ui/separator"
import { navLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className='bg-muted h-full'>
      <header className='py-6 lg:py-12 grid place-items-center'>
        <div className='h-24 w-24 bg-primary text-white grid place-items-center rounded-full'>
          y
        </div>
        <h3 className='mt-2 lg:mt-3 text-lg lg:text-xl font-semibold tracking-wide'>Youssef Elharfali</h3>
      </header>
      <Separator />
      <div className='px-14 pt-6 lg:pt-8'>
        <h3 className='text-gray-400 dark:text-gray-300 text-lg lg:text-xl mb-3 lg:mb-5'>MENU</h3>
        <ul className='grid gap-y-4'>
          {navLinks.map((link) => {
            const { id, title, path, icon } = link
            return (
              <li key={id}>
                <Link href={path} className={`flex items-center gap-x-2 py-[8px] px-2 text-lg lg:text-xl capitalize tracking-wide transition-all ease-in-out duration-150 hover:pl-4 font-semibold ${pathname === path ? 'bg-white dark:bg-slate-600 text-primary rounded-lg' : 'text-gray-500 dark:text-gray-400'}`}>
                  {icon} {title}
                </Link>
              </li>
            )
            })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar