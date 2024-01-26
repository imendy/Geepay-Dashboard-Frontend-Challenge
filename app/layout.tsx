import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import SideNav from "@/components/shared/SideNav";
import { ThemeProvider } from "@/components/shared/ThemeProvider";


const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geepay Dashboard | Front-End Coding Challenge ",
  description: "Explore the Geepay Dashboard, a dynamic and responsive front-end project crafted for a coding challenge. Experience modern web development with features designed to showcase skills and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          <div>
          <div className="flex absolute w-full">
            <Navbar />
          </div>
          <div className="flex min-h-screen">
            <SideNav />
            <div className="pt-24 w-full h-screen overflow-hidden overflow-y-auto no-scrollbar">
              {children}
            </div>
          </div>
          </div>

         
        </ThemeProvider>
      </body>
    </html>
  );
}


