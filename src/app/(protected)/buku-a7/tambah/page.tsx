import * as React from "react"

import { Skeleton } from "@/components/ui/skeleton"
import AgendaForm from "./form"

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
