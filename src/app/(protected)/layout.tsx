import { redirect } from "next/navigation"

import { getCurrentSession } from "@/lib/auth/session"

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = await getCurrentSession()

  if (!user) {
    return redirect("/auth/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  )
}
