import React from "react";
import Sidebar from "../components/Dashboard Components/Sidebar";
import Dashboard_Body from "../components/Dashboard Components/Dashboard_Body";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import MobileSidebar from "../components/Dashboard Components/MobileSidebar";
import { HambergerMenu } from "iconsax-react";
import Logo from "../assets/logo.svg";
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="w-screen  overflow-y-scroll overflow-x-hidden relative flex  items-center justify-center h-screen">
      <Sidebar />
      <MobileSidebar sidebarOpen={sidebarOpen} />
      <motion.div className="w-full h-full flex flex-col">
        <div className="w-full flex border border-b  py-4 px-8 sm:px-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="h-8 w-8" src={Logo} />
            <h3 className=" font-DM_Sans text-3xl font-semibold text-[#7F56D9]">
              Zilly Cloud
            </h3>
          </div>
          <Button
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
            className="p-0 h-8 w-8 flex items-center justify-center  xl:hidden   z-50"
          >
            <HambergerMenu className=" h-6 w-6" />
          </Button>
        </div>
        <Dashboard_Body />
      </motion.div>
    </div>
  );
};

export default Dashboard;
