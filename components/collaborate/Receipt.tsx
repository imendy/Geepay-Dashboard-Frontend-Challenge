import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DownloadIcon, PrinterIcon } from "lucide-react"


const Invoice = ({ data }: any) => {

   
    let overallTotal = 0; 
    console.log(data);

    return (
        <div className="w-full p-4 rounded-lg shadow-md border">
            <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-2xl font-bold mb-1 text-primary">Receipt</h1>
                
            <p className="text-sm text-muted-foreground w-[220px]">If you have any questions or concerns regarding this transaction, please do not hesitate to contact our customer service.</p>
            </div>
               
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
                    <Label htmlFor="recipient">Name</Label>
                    <div className="text-sm text-muted-foreground">{data.name}</div>
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="address">Address</Label>
                    <div className="text-sm text-muted-foreground">124, Adeniyi Jones, Ikeja Lagos state </div>
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="invoice-date">Receipt Date</Label>
                    <div className="text-sm text-muted-foreground">{data.date}</div>
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="due-date">Status</Label>
                    <div className="text-sm text-muted-foreground">{data.status}</div>
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="due-date">Amount</Label>
                    <div className="text-sm text-muted-foreground">{data.amount}</div>
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
        <TableCell>{data.quantity}</TableCell>
        <TableCell>${data.amount}</TableCell>
        <TableCell>
          {typeof data.amount === 'number' && typeof data.quantity === 'number'
            ? (() => {
                const total = data.amount * data.quantity;
                overallTotal += total; 
                return `$${total.toLocaleString()}`;
              })()
            : 'Invalid'}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Item 2</TableCell>
        <TableCell>{data.quantity}</TableCell>
        <TableCell>${data.amount}</TableCell>
        <TableCell>
          {typeof data.amount === 'number' && typeof data.quantity === 'number'
            ? (() => {
                const total = data.amount * data.quantity;
                overallTotal += total; 
                return `$${total.toLocaleString()}`;
              })()
            : 'Invalid'}
        </TableCell>
      </TableRow>


</TableBody>

            </Table>
            <div className="flex justify-end mt-4">
                <div className="text-right">
                  
                    <div className="text-lg font-bold text-gray-600 dark:text-white mb-4">
         
          {`Overall Total: $${overallTotal.toLocaleString()}`}
        </div>
                </div>
            </div>
        </div>
    )
}




export default Invoice



