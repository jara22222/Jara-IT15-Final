import { FilterIcon, MoreHorizontalIcon, SearchIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../shared/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../shared/ui/dropdown-menu";
import { Button } from "../../../../shared/ui/button";
import { Input } from "../../../../shared/ui/input";
import AddBranchManagerModal from "./AddBranchManagerModal";

export function UserTable() {
  return (
    <>
      <div className="rounded-md shadow-xl m-2 bg-card">
        <div className="p-4 border-b flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-2 max-w-sm">
            <div className="relative w-full">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search managers..."
                className="pl-9 bg-background"
                onChange={(e) => console.log(e.target.value)} // Logic for filtering goes here
              />
            </div>

            {/* Optional: Filter Button */}
            <Button variant="outline" size="sm" className="h-9 gap-1">
              <FilterIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <AddBranchManagerModal />
          </div>
        </div>
        <div className="relative overflow-auto max-h-[400px]">
          <Table>
            <TableHeader className="bg-muted/50 ">
              <TableRow>
                <TableHead className=" text-left">#</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead>Date Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium">1</TableCell>
                <TableCell className="font-medium">Juan Dela Cruz</TableCell>
                <TableCell className="font-medium">09292396588</TableCell>
                <TableCell className="font-medium">
                  jarajoaquin@gmail.com
                </TableCell>
                <TableCell className="font-medium">Active</TableCell>
                <TableCell className="font-medium">01/24/25</TableCell>
                <TableCell className="font-medium">06/12/26</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Manager</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive focus:bg-destructive focus:text-destructive-foreground">
                        Remove Access
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>

              {/* More rows... */}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
