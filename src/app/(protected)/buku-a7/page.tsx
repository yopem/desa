import * as React from "react"
import dynamicFn from "next/dynamic"

import { Skeleton } from "@/components/ui/skeleton"
import { HydrateClient, prefetch, trpc } from "@/lib/trpc/server"

const AgendaContent = dynamicFn(async () => {
  const AgendaContent = await import("./content")
  return AgendaContent
})

export const metadata = {
  title: "Agenda",
}

export default function AgendaPage() {
  prefetch(
    trpc.agenda.all.queryOptions({
      page: 1,
      perPage: 10,
    }),
  )

  prefetch(trpc.agenda.count.queryOptions())

  return (
    <HydrateClient>
      <React.Suspense
        fallback={
          <div className="flex w-full flex-col gap-4">
            <Skeleton />
          </div>
        }
      >
        <AgendaContent />
      </React.Suspense>
    </HydrateClient>
  )
}
