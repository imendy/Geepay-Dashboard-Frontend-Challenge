
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './LightDarkSwitch'

const Mobilenav = () => {
    const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

    const handleItemClick = (index: number | null) => {
        setActiveItemIndex(index);
      };

  return (
    <nav className='md:hidden '>
      <Sheet>
        <SheetTrigger><Menu /></SheetTrigger>
        <SheetContent className='flex flex-col items-center gap-4 w-fit pt-10'>
          <span className='flex p-4 '>
            <Bell />
          </span>
          <div className='flex justify-center items-center flex-col gap-8 w-fit'>
            <Link href='/' className='block dark:hidden'>
              <div onClick={() => handleItemClick(0.85)}>
                <Image
                  src='/icons/grid.svg'
                  width={40}
                  height={40}
                  alt='logo'
                  className=''
                />
              </div>
            </Link>
            <Link href='/' className='hidden dark:block p-1'>
              <div onClick={() => handleItemClick(0.85)}>
                <Image
                  src='/icons/grid-dark.svg'
                  width={26}
                  height={26}
                  alt='logo'
                />
              </div>
            </Link>
            <Link href='/'>
              <div onClick={() => handleItemClick(1.75)}>
                <Image
                  src='/icons/trend-up.svg'
                  width={24}
                  height={24}
                  alt='logo'
                />
              </div>
            </Link>
            <Link href='/'>
              <div onClick={() => handleItemClick(2.85)}>
                <Image
                  src='/icons/Icon.svg'
                  width={40}
                  height={40}
                  alt='logo'
                />
              </div>
            </Link>
            <Link href='/'>
              <div onClick={() => handleItemClick(3.85)}>
                <Image
                  src='/icons/box.svg'
                  width={24}
                  height={24}
                  alt='logo'
                />
              </div>
            </Link>
            <Link href='/'>
              <div onClick={() => handleItemClick(4.65)}>
                <Image
                  src='/icons/discount.svg'
                  width={24}
                  height={24}
                  alt='logo'
                />
              </div>
            </Link>
            <Link href='/' className='mb-8'>
              <div onClick={() => handleItemClick(5.5)}>
                <Image
                  src='/icons/info.svg'
                  width={24}
                  height={24}
                  alt='logo'
                />
              </div>
            </Link>
            <ModeToggle />
          </div>
          <div className='flex mt-36 flex-col justify-center  gap-6 items-center w-fit px-4'>
            <Link href='/'>
              <div onClick={() => handleItemClick(9.85)}>
                <Image
                  src='/icons/arrow-right.svg'
                  width={24}
                  height={24}
                  alt='logo'
                />
              </div>
            </Link>
            <Link href='/'>
              <div onClick={() => handleItemClick(10.55)}>
                <Image
                  src='/icons/setting.svg'
                  width={24}
                  height={24}
                  alt='logo'
                />
              </div>
            </Link>
            <Link href='/'>
              <div onClick={() => handleItemClick(11.3)}>
                <Image
                  src='/icons/logout.svg'
                  width={24}
                  height={24}
                  alt='logo'
                />
              </div>
            </Link>
          </div>
          {/* Indicator div for active item */}
          <div
            className="absolute top-0 left-0 dark:bg-white bg-black h-8 w-[5px] transform -translate-y-2/4 rounded-tr rounded-br"
            style={{ top: activeItemIndex !== null ? `calc(${activeItemIndex + 1} * 56px)` : 0 }}
          ></div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default Mobilenav
