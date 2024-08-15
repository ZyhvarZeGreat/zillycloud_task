import { Button } from "../ui/button.js";
import { Import, More } from "iconsax-react";
import { Input } from "../ui/input.js";
import { Card } from "../ui/card.js";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table.js";
import { Checkbox } from "../ui/checkbox.js";
import dashboardTableData from "../../reusables/reusables.ts";
import { Progress } from "../ui/progress.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select.tsx";
import { Filter } from "./Filter.tsx";
const Dashboard_Table = () => {
  const dataTable = dashboardTableData.map((item, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <div className="flex   gap-2 items-center ">
            {" "}
            <Checkbox className="" />
            {item.companyName}
          </div>
        </TableCell>
        <TableCell>
          <div className=" w-[6rem] py-1 flex gap-1 items-center justify-center rounded-sm shadow-sm bg-gray-100">
            <div className="h-1.5 bg-green-500 w-1.5 rounded-full">
              <p className="hidden">s</p>
            </div>
            {item.status}
          </div>
        </TableCell>
        <TableCell>{item.about}</TableCell>
        <TableCell>{item.users}</TableCell>
        <TableCell className="flex gap-4">
          <Progress className="h-2" value={item.licenseUse} />
          <p>{item.licenseUse}%</p>
          <More className="rotate-90" />
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div className="flex  flex-col w-full px-8  sm:px-16 gap-6">
      <div className="w-full  flex items-start gap-2 sm:items-center sm:flex-row flex-col  justify-between">
        <div className="flex font-DM_Sans flex-col gap-1">
          <h3 className="text-xl font-semibold">Customers</h3>
          <p className="text-sm font-inter text-[#475467]">
            Companies that have purchased your subscriptions
          </p>
        </div>

        <Button className="flex gap-1 bg-transparent text-black hover:text-white hover:bg-[#7F56D9] border">
          Download All
          <Import />
        </Button>
      </div>

      <Card className="shadow-sm  px-4  w-full">
        <div className="xl:flex hidden py-4 font-inter w-full items-center justify-between">
          <div className="flex gap-2 items-start justify-center">
            <div className="flex gap-2 w-[320px] flex-col">
              <p> Search for order</p>
              <Input placeholder="Search" />
            </div>
            <div className="flex gap-2 w-[192px] flex-col">
              <p> Status</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer">Customer</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="agency">Agency</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 w-[192px] flex-col">
              <p> Category</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="User">User</SelectItem>
                  <SelectItem value="Agent">Agent</SelectItem>
                  <SelectItem value="Node">Node</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="flex gap-1 bg-transparent text-black hover:text-white hover:bg-[#7F56D9] border">
            Clear All
          </Button>
        </div>
        <Filter />
        <Table className="font-inter overflow-y-scroll ">
          <TableHeader>
            <TableRow className="text-sm ">
              <TableHead className="flex text-[#475467]  items-center gap-2">
                <Checkbox />
                Company Name
              </TableHead>
              <TableHead className="text-[#475467]"> Status</TableHead>
              <TableHead className="text-[#475467]"> About</TableHead>
              <TableHead className="text-[#475467]"> Users</TableHead>
              <TableHead className="text-[#475467]"> License Use</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{dataTable}</TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Dashboard_Table;
