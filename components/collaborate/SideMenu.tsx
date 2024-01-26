
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react';
import { ModeToggle } from './LightDarkSwitch'

const SideNav = () => {
    const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
    const [menuHeight, setMenuHeight] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Measure the height of a single menu item
        if (menuRef.current) {
            const itemHeight = menuRef.current.clientHeight;
            setMenuHeight(itemHeight);
        }
    }, []);

    const handleItemClick = (index: number) => {
        setActiveItemIndex(index);
    };

      // Calculate dynamic values based on screen width
      const getDynamicValues = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1450) {
            return [8.75, 9.3, 9.9];
        } else if (screenWidth >= 768) {
            return [11, 11.5, 12.5];
        } else {
            // Add more conditions as needed for smaller screens
            return [/* values for smaller screens */];
        }
    };

    const [dynamicValue1, dynamicValue2, dynamicValue3] = getDynamicValues();

    return (
        <div className='hidden md:flex flex-col justify-between pb-10 h-screen pt-28 border-r  px-4 relative'>

            <div className='flex justify-center items-center flex-col gap-8 mt-[9px]'>
                <Link href='/' className='block  dark:hidden'>
                    <div onClick={() => handleItemClick(0.92)}>
                        <Image
                            src='/icons/grid.svg'
                            width={30}
                            height={30}
                            alt='logo'
                            className=''
                        />
                    </div>
                </Link>
                <Link href='/' className='hidden dark:block p-1'>
                    <div onClick={() => handleItemClick(0.92)}>
                        <Image
                            src='/icons/grid-dark.svg'
                            width={20}
                            height={20}
                            alt='logo'
                        />
                    </div>
                </Link>
                <Link href='/' >
                    <div onClick={() => handleItemClick(1.75)}>
                        <Image
                            src='/icons/trend-up.svg'
                            width={20}
                            height={20}
                            alt='logo'
                        />
                    </div>
                </Link>
                <Link href='/' >
                    <div onClick={() => handleItemClick(2.55)}>
                        <Image
                            src='/icons/Icon.svg'
                            width={30}
                            height={30}
                            alt='logo'
                        />
                    </div>
                </Link>
                <Link href='/' >
                    <div onClick={() => handleItemClick(3.5)}>
                        <Image
                            src='/icons/box.svg'
                            width={20}
                            height={20}
                            alt='logo'
                        />
                    </div>
                </Link>
                <Link href='/' >
                    <div onClick={() => handleItemClick(4.3)}>
                        <Image
                            src='/icons/discount.svg'
                            width={20}
                            height={20}
                            alt='logo'
                        />
                    </div>
                </Link>
                <Link href='/' className='mt-2'>
                    <div onClick={() => handleItemClick(5.2)}>
                        <Image
                            src='/icons/info.svg'
                            width={20}
                            height={20}
                            alt='logo'
                        />
                    </div>
                </Link>
                <ModeToggle />
            </div>
            <div className='flex mt-36 flex-col ml-6 justify-center  gap-4 items-center w-fit px-4'>
            {/* Values set based on screen size */}
            <Link href='/'>
                    <div ref={menuRef} onClick={() => handleItemClick(dynamicValue1)}>
                        <Image
                            src='/icons/arrow-right.svg'
                            width={20}
                            height={20}
                            alt='logo'
                        />
                    </div>
                </Link>
                <Link href='/'>
                    <div ref={menuRef} onClick={() => handleItemClick(dynamicValue2)}>
                        <Image
                            src='/icons/setting.svg'
                            width={20}
                            height={20}
                            alt='logo'
                        />
                    </div>
                </Link>
                <Link href='/'>
                    <div ref={menuRef} onClick={() => handleItemClick(dynamicValue3)}>
                        <Image
                            src='/icons/logout.svg'
                            width={20}
                            height={20}
                            alt='logo'
                        />
                    </div>
                </Link>
          </div>

            {/* Indicator div for active item */}
            {/* <div
                className="absolute top-0 right-0 dark:bg-white bg-black h-6 w-[4px] transform -translate-y-2/4 rounded-tl rounded-bl"
                style={{ top: activeItemIndex !== null ? `calc(${activeItemIndex + 1} * 56px)` : 0 }}
            ></div> */}

<div
                className="absolute top-0 right-0 dark:bg-white bg-black h-6 w-[3px] transform -translate-y-2/4 rounded-tl rounded-bl"
                style={{ top: activeItemIndex !== null && menuHeight !== null ? `calc(${activeItemIndex} * ${menuHeight}px)` : 0 }}
            ></div>

        </div>
    )
}

export default SideNav;




{/* <Link href='/'>
<div onClick={() => handleItemClick(8.75)}>
  <Image
    src='/icons/arrow-right.svg'
    width={20}
    height={20}
    alt='logo'
  />
</div>
</Link>
<Link href='/'>
<div onClick={() => handleItemClick(9.3)}>
  <Image
    src='/icons/setting.svg'
    width={20}
    height={20}
    alt='logo'
  />
</div>
</Link>
<Link href='/'>
<div onClick={() => handleItemClick(9.9)}>
  <Image
    src='/icons/logout.svg'
    width={20}
    height={20}
    alt='logo'
  />
</div>
</Link> */}