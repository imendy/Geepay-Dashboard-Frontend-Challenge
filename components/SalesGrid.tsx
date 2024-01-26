import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FileDown } from 'lucide-react'
import Invoice from './collaborate/Receipt'
import Link from 'next/link'
const invoicesData = [
    {
        name: 'Marcus Bergson',
        date: 'Nov 15, 2023',
        amount: 80000,
        status: 'Paid',
        avatarUrl: '/icons/marcus.png',
        avatarFallback: 'CN',
        quantity: 2,
    },
    {
        name: 'Jaydon Vaccaro',
        date: 'Nov 15, 2023',
        amount: 60000,
        status: 'Refund',
        avatarUrl: '/icons/jaydon.png',
        avatarFallback: 'AJ',
        quantity: 1,
    },
    {
        name: 'Corey Schleifer',
        date: 'Nov 14, 2023',
        amount: 120000,
        status: 'Paid',
        avatarUrl: '/icons/corey.png',
        avatarFallback: 'JD',
        quantity: 1,
    },
    {
        name: 'Cooper Press',
        date: 'Nov 14, 2023',
        amount: 45000,
        status: 'Refund',
        avatarUrl: '/icons/cooper.png',
        avatarFallback: 'ES',
        quantity: 3,
    },
    {
        name: 'Phillip Lubin',
        date: 'Nov 13, 2023',
        amount: 95000,
        status: 'Paid',
        avatarUrl: '/icons/philip.png',
        avatarFallback: 'MW',
        quantity: 2,
    },
    {
        name: 'Adeoye John',
        date: 'Nov 30, 2023',
        amount: 110000,
        status: 'Refund',
        avatarUrl: 'https://github.com/daniel.png',
        avatarFallback: 'AJ',
        quantity: 2,
    },
];



const OrdersTable = () => {
    return (
        <Card className='h-full'>

            <div className='flex items-center justify-between mb-4'>
                <p className='text-xl pl-4 capitalize font-semibold'>last orders</p>

                <Link href='/' className='text-lg text-[#34CAA5]'>
                    See All
                </Link>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead >Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Invoice</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoicesData.map((invoice, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium flex flex-row gap-2 items-center">
                                <Avatar className='h-8 w-8'>
                                    <AvatarImage src={invoice.avatarUrl} />
                                    <AvatarFallback>{invoice.avatarFallback}</AvatarFallback>
                                </Avatar>
                                <p className='whitespace-nowrap'>{invoice.name}</p>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>{invoice.date}</TableCell>
                            <TableCell>${invoice.amount.toLocaleString()}</TableCell>

                            <TableCell className="" style={{ color: invoice.status === 'Paid' ? '#34CAA5' : '#ED544E' }}>
                                {invoice.status}
                            </TableCell>
                            <TableCell className="text-right">
                                <Dialog>
                                    <DialogTrigger className='flex gap-2 items-center'>
                                        <FileDown size={16} />
                                        <p>View</p>
                                    </DialogTrigger>
                                    <DialogContent>
                                      
                                        <Invoice data={invoice} />
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default OrdersTable