"use client"

import * as React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useSuspenseQuery } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { ControlledTable } from "@/components/ui/controlled-table"
import { Skeleton } from "@/components/ui/skeleton"
import { tableColumnRegistry } from "@/lib/data-registry/table-column-registry"
import type { InsertAgenda } from "@/lib/db/schema/agenda"
import { useTRPC } from "@/lib/trpc/client"

export default function AgendaContent() {
  const searchParams = useSearchParams()

  const page = searchParams.get("page")

  const perPage = 10

  const trpc = useTRPC()

  const { data: agendasCount } = useSuspenseQuery(
    trpc.agenda.count.queryOptions(),
  )

  const { data: agendas } = useSuspenseQuery(
    trpc.agenda.all.queryOptions({
      page: page ? parseInt(page) : 1,
      perPage: perPage,
    }),
  )

  if (agendas.length === 0 || !agendasCount) {
    return (
      <div className="my-64 flex items-center justify-center">
        <Skeleton />
        <h3 className="text-center text-4xl font-bold">
          Agenda tidak ditemukan!
        </h3>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="mb-8 flex justify-between">
        <h1>A7. Buku Agenda</h1>
        <Button asChild>
          <Link href="/buku-a7/tambah">Tambah</Link>
        </Button>
      </div>
      <div className="relative min-h-[100vh] w-full overflow-auto">
        <ControlledTable<InsertAgenda>
          manualMode={false}
          data={agendas}
          columns={[...tableColumnRegistry.agenda]}
        />
      </div>
    </div>
  )
}
