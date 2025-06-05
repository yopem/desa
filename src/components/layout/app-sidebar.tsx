"use client"

import * as React from "react"
import NextLink from "next/link"

import NavMain from "@/components/layout/nav-main"
import NavUser from "@/components/layout/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { SelectUser } from "@/lib/db/schema/user"
import { siteTitle } from "@/lib/env/client"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: SelectUser
}

const AppSidebar = (props: AppSidebarProps) => {
  const data = {
    navMain: [
      {
        name: "Ringkasan",
        url: "/",
        icon: "Gauge" as const,
      },
      {
        name: "Pengguna",
        url: "/user",
        icon: "Users" as const,
      },
    ],
  }
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <NextLink href="/">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{siteTitle}</span>
                </div>
              </NextLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={props.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
