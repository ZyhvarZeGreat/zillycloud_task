import {
  Home,
  Chart1,
  Setting,
  UserTick,
  Stacks,
  TickSquare,
  ChartCircle,
  Menu,
} from "iconsax-react";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
type Props = {
  sidebarOpen: boolean;
};
const MobileSidebar = ({ sidebarOpen }: Props) => {
  return (
    <motion.div
      animate={
        sidebarOpen
          ? { opacity: 1, position: "absolute", left: 0, display: "hidden" }
          : { opacity: 0, left: -20, position: "absolute", display: "flex" }
      }
      transition={{ duration: 0.6, type: "spring" }}
      className=" flex w-[25%] bg-white  border border-r-gray-200 h-full xl:hidden items-center justify-center"
    >
      <div className="flex bg-white flex-col h-full items-center justify-between py-12">
        <div className="flex flex-col gap-8">
          <NavLink to="#">
            <Home size={24} />
          </NavLink>
          <NavLink to="#">
            <Chart1 size={24} />
          </NavLink>
          <NavLink to="#">
            <Stacks size={24} />
          </NavLink>
          <NavLink to="#">
            <TickSquare size={24} />
          </NavLink>
          <NavLink to="#">
            <ChartCircle size={24} />
          </NavLink>
          <NavLink to="#">
            <UserTick size={24} />
          </NavLink>
        </div>
        <div className="flex justify-center items-center flex-col gap-8">
          <NavLink to="#">
            <Menu size={24} />
          </NavLink>
          <NavLink to="#">
            <Setting size={24} />
          </NavLink>
          <Avatar className="cursor-pointer ring-2 ring-orange-300 ring-offset-2">
            <AvatarFallback>CN</AvatarFallback>
            <AvatarImage
              className="h-10 object-cover w-10"
              src={"../assets/img5.jpg"}
            />
          </Avatar>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSidebar;
