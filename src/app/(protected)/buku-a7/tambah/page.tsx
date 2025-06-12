import * as React from "react"

import AgendaForm from "@/components/pages/buku-a7/create-agenda-form"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Buat Agenda",
}

export default function AgendaPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex w-full flex-col gap-4">
          <Skeleton />
        </div>
      }
    >
      <AgendaForm />
    </React.Suspense>
  )
}
