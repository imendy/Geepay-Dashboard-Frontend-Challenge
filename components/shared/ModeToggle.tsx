"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Moon from '../../public/icons/moon.svg';
import Sun from '../../public/icons/sun.svg';
import Image from "next/image";
import { SunMedium } from "lucide-react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <div className="relative mt-6 w-28 h-10 rounded-full p-1 cursor-pointer bg-white rotate-90" onClick={toggleTheme}>
                <div className="flex items-center justify-around w-full h-full gap-2">
                    <Image
                        src={Sun}
                        alt="sun"
                        className={`w-7 h-7 ${theme === "light" ? "opacity-90" : ""}`}
                    />
                    <Image
                        src={Moon}
                        alt="moon"
                        className={`w-7 h-7 ${theme === "dark" ? "opacity-90" : ""}`}
                    />
                </div>
            </div>
        </div>
    );
}
