"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Command,
  FileUser,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  Megaphone,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import logo from "@/public/images/logo.png";
import logoLight from "@/public/images/logoLight.png";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [],
    },
    {
      title: "My Jobs",
      url: "/dashboard/jobs",
      icon: BriefcaseBusiness,
      items: [],
    },
    {
      title: "AI Resume Builder",
      url: "/dashboard/ai-resume-builder",
      icon: FileUser,
      items: [],
    },
    {
      title: "AI Mock Interviews",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Mock Interview",
          url: "/dashboard/mock-interview",
        },
        {
          title: "My Interviews",
          url: "/dashboard/my-interviews",
        },
      ],
    },
    {
      title: "Assessments",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Take Test",
          url: "/dashboard/take-test",
        },
        {
          title: "My Performance",
          url: "/dashboard/my-performance",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Events",
  //     url: "#",
  //     icon: CalendarDays,
  //   },
  //   {
  //     name: "Announcements",
  //     url: "#",
  //     icon: Megaphone,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props} className="border-none z-0">
      <SidebarHeader className="bg-[#071526] text-white pt-4">
        {/* <TeamSwitcher teams={data.teams} /> */}
        {open ? (
          <Image
            src={logo}
            alt="Logo"
            className="w-[40%] pt-4"
          />
        ) : (
          <Image
            src={logoLight}
            alt="Logo"
            className="w-[70%] pt-4"
          />
        )}
      </SidebarHeader>
      <SidebarContent className="bg-[#071526] text-white">
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter className="bg-[#071526] text-white border-t border-[#9E2339]/30">
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
