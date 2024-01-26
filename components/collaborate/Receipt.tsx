import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DownloadIcon, PrinterIcon } from "lucide-react"


const Invoice = ({ data }: any) => {
    return (
        <div className="w-full p-4 rounded-lg shadow-md border">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold  text-primary">Invoice</h1>
                <div className="flex space-x-4">
                    <Button size="sm" variant="outline">
                        <DownloadIcon className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                    </Button>
                    <Button size="sm" variant="outline">
                        <PrinterIcon className="h-4 w-4" />
                        <span className="sr-only">Print</span>
                    </Button>
                </div>
            </div>
            <div className="grid gap-4 mb-6">
                <div className="grid gap-1">
                    <Label htmlFor="recipient">Recipient</Label>
                    <div className="text-sm text-muted-foreground">{data.name}</div>
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="address">Address</Label>
                    <div className="text-sm text-muted-foreground">123 Main St, Anytown, CA 12345</div>
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="invoice-date">Invoice Date</Label>
                    <div className="text-sm text-muted-foreground">{data.date}</div>
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="due-date">Status</Label>
                    <div className="text-sm text-muted-foreground">{data.status}</div>
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Item Description</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Unit Price</TableHead>
                        <TableHead>Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Item 1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>$10.00</TableCell>
                        <TableCell>$20.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Item 2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>$5.00</TableCell>
                        <TableCell>$5.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="flex justify-end mt-4">
                <div className="text-right">
                    <div className="text-lg font-bold text-gray-800 dark:text-white mb-4">Total: $25.00</div>
                </div>
            </div>
        </div>
    )
}




export default Invoice



