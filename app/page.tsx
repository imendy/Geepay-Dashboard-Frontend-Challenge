
import { RevenueChart } from "@/components/RevenueChart";
import {
  Card,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import OrdersTable from "@/components/OrdersTable";
import { Button } from "@/components/ui/button";
import { Progress, Progress2, Progress3, Progress4 } from "@/components/ui/progress";
import { MainCalender } from "@/components/MainCalender";




export default function Home() {
  return (
    <main className="p-5 w-full space-y-6">
      <section className="flex flex-col xl:flex-row gap-6 w-full">
        <Card className="xl:w-[60%] xl:mt-4">
          <div className="flex justify-between mb-6">
            <p className="text-xl pl-2 font-semibold">Sales Trend</p>
            <div className="flex gap-2 items-center">
              <p className="hidden md:block  font-semibold">Sort by:</p>
              <DropdownMenu>
                <DropdownMenuTrigger className="border rounded-full flex items-center font-semibold gap-3 px-4 py-1"><p>Weekly</p> <ChevronDown /></DropdownMenuTrigger>
                <DropdownMenuContent className="p-0">
                  <MainCalender />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

          </div>
          <RevenueChart />
        </Card>
        <div className="xl:w-[40%] grid grid-cols-1 md:grid-cols-2 gap-5 xl:mt-4">
          <Card className="flex flex-col gap-2 ">
            <div className="flex justify-between">
              <Image
                src="/icons/box-tick.svg"
                width={24}
                height={24}
                alt="box-tick"
              />
              <Image
                src="/icons/green-chart.svg"
                width={104}
                height={32}
                alt="box-tick"
              />
            </div>

          <div className="flex flex-col gap-2 ">
          <h3 className="text-muted-foreground text-lg">Total Order</h3>
            <p className="text-2xl font-semibold">350</p>
            <span className="flex justify-between items-center">
              <Badge className="bg-[#34CAA5]/40 text-primary flex gap-1 text-xs font-normal"><TrendingUp size={16} strokeWidth={1} /> 23,5%</Badge>
              <p className="text-[12.5px] text-muted-foreground">vs. previous month</p>
            </span>
          </div>

          </Card>
          <Card className="flex flex-col gap-2 ">
            <div className="flex justify-between">
              <Image
                src="/icons/3d-rotate.svg"
                width={24}
                height={24}
                alt="box-tick"
              />
              <Image
                src="/icons/red-chart.svg"
                width={104}
                height={32}
                alt="box-tick"
              />
            </div>

            <h3 className="text-muted-foreground text-lg">Total Refund</h3>
            <p className="text-2xl font-semibold">270</p>
            <span className="flex justify-between items-center">
              <Badge className="bg-red-500/40 text-red-500 flex gap-1 text-xs font-normal"><TrendingUp size={16} strokeWidth={1} /> 23,5%</Badge>
              <p className="text-[12.5px] text-muted-foreground">vs. previous month</p>
            </span>
          </Card>
          <Card className="flex flex-col gap-2 ">
            <div className="flex justify-between">
              <Image
                src="/icons/shopping-cart.svg"
                width={24}
                height={24}
                alt="box-tick"
              />
              <Image
                src="/icons/red-chart.svg"
                width={104}
                height={32}
                alt="box-tick"
              />
            </div>

            <h3 className="text-muted-foreground text-lg">Average Sales</h3>
            <p className="text-2xl font-semibold">1567</p>
            <span className="flex justify-between items-center">
              <Badge className="bg-red-500/40 text-red-500 flex gap-1 text-xs font-normal"><TrendingUp size={16} strokeWidth={1} /> 23,5%</Badge>
              <p className="text-[12.5px]  text-muted-foreground">vs. previous month</p>
            </span>
          </Card>
          <Card className="flex flex-col gap-2 ">
            <div className="flex justify-between">
              <Image
                src="/icons/coin.svg"
                width={24}
                height={24}
                alt="box-tick"
              />
              <Image
                src="/icons/green-chart.svg"
                width={104}
                height={32}
                alt="box-tick"
              />
            </div>

            <h3 className="text-muted-foreground text-lg">Total Income</h3>
            <p className="text-2xl font-semibold">$350,000</p>
            <span className="flex justify-between items-center">
              <Badge className="bg-[#34CAA5]/40 text-primary flex gap-1 text-xs font-normal"><TrendingUp size={16} strokeWidth={1} /> 23,5%</Badge>
              <p className="text-[12.5px]  text-muted-foreground">vs. previous month</p>
            </span>
          </Card>
        </div>
      </section>
      <section className="flex flex-col xl:flex-row gap-6 w-full">
        <div className="xl:w-[60%]">
          <OrdersTable />
        </div>
        <Card className="xl:w-[40%]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Top Platform</h2>
            <Button className="text-lg text-[#34CAA5]" variant="ghost">
              See All
            </Button>
          </div>
          <div className="rounded-lg p-6 w-full">

            <div className="flex flex-col gap-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-md font-medium">Book Bazaar</h3>
                </div>
                <Progress className="w-full rounded-full h-2.5" value={75} />
                <div className="flex items-center justify-between mt-1 text-lg">
                  <p className="text-muted-foreground">$2,500,000</p>
                  <span className="text-lg font-medium text-muted-foreground">+25%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-medium">Artisan Aisle</h3>
                </div>
                <Progress2 className="w-full rounded-full h-2.5" value={60} />
                <div className="flex items-center justify-between mt-1 text-lg">
                  <p className="text-muted-foreground">$1,800,000</p>
                  <span className="text-lg font-medium text-muted-foreground">+15%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-medium">Toy Troop</h3>
                </div>
                <Progress3 className="w-full rounded-full h-2.5" value={40} />
                <div className="flex items-center justify-between mt-1 text-lg">
                  <p className="text-muted-foreground">$1,200,000</p>
                  <span className="text-lg font-medium text-muted-foreground">+8%</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-medium">XStore</h3>
                </div>
                <Progress4 className="w-full rounded-full h-2.5" value={85} />
                <div className="flex items-center justify-between mt-1 text-lg">
                  <p className="text-muted-foreground">$3,900,000</p>
                  <span className="text-lg font-medium text-muted-foreground">+45%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
