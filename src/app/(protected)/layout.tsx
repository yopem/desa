import * as React from "react"
import { redirect } from "next/navigation"

import LogOutButton from "@/components/auth/logout-button"
import AppSidebar from "@/components/layout/app-sidebar"
import ThemeSwitcher from "@/components/theme/theme-switcher"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { getCurrentSession } from "@/lib/auth/session"

export default async function ProtectedLayout({
  children,
  dialog,
}: {
  children: React.ReactNode
  dialog: React.ReactNode
}) {
  const { user } = await getCurrentSession()

  const isAdmin = user?.role === "admin"

  if (!user) {
    redirect("/auth/login")
  }

  if (!isAdmin) {
    return (
      <div className="flex h-screen flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold">Access Denied</h1>
        <LogOutButton />
      </div>
    )
  }

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center justify-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 cursor-pointer" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <ThemeSwitcher />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {children}
            {dialog}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
