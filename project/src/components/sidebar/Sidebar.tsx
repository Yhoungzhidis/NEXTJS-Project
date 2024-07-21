"use client";
import Image from "next/image";
import React from "react";

import {
  LayoutDashboard,
  CircleUser,
  Wallet,
  Book,
  LucideIcon,
  LogOutIcon,
  CalendarCheck,
  School,
} from "lucide-react";

import SidebarItem from "@/components/sidebar/item";
import Sidebaritem from "@/components/sidebar/item";
import { useSession } from "next-auth/react";

interface Sidebaritem {
  name: string;
  icon: LucideIcon;
  path: string;
  items?: SubItem[];
}

interface SubItem {
  name: string;
  path: string;
}

const items: Sidebaritem[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: CircleUser,
  },
  {
    name: "Finance info",
    path: "/finance",
    icon: Wallet,
  },
  {
    name: "Courses",
    path: "/courses",
    icon: Book,
  },
  {
    name: "Assignments",
    path: "/assignments",
    icon: School,
  },
  {
    name: "Events",
    path: "/events",
    icon: CalendarCheck,
  },
  {
    name: "Log out",
    path: "/",
    icon: LogOutIcon,
  },
];
const Sidebar = () => {
 
  return (
   
       <div >
      <div >
        {/* <Image className={styles.userImage} src="/noavatar.png" alt="" width={50} height={50}/> */}
        {/* <div className={styles.userDetail}>
          <span className={styles.username}>Yhoung</span>
          <span className={styles.userTitle}>John@gmail.com</span>
          </div> */}
      </div>
      <div className="flex flex-col space-y-10 w-full ">
        <div  className="flex flex-col space-y-2 bg-green ">
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
     
    
  );
};

export default Sidebar;
