"use client"

import * as React from "react"
import Link from "next/link"
import { useSuspenseQuery } from "@tanstack/react-query"
import type { PaginationState } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { ControlledTable } from "@/components/ui/controlled-table"
import { Skeleton } from "@/components/ui/skeleton"
import { tableColumnRegistry } from "@/lib/data/table-column-registry"
import { tableDataMapperRegistry } from "@/lib/data/table-data-mapper"
import type { InsertAgenda } from "@/lib/db/schema/agenda"
import { useTRPC } from "@/lib/trpc/client"

export default function AgendaContent() {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const trpc = useTRPC()

  const { data: agendasCount } = useSuspenseQuery(
    trpc.agenda.count.queryOptions(),
  )

  const { data: rawData } = useSuspenseQuery(
    trpc.agenda.all.queryOptions({
      page: pagination.pageIndex + 1,
      perPage: pagination.pageSize,
    }),
  )
  const lastPage = agendasCount && Math.ceil(agendasCount / pagination.pageSize)

  const mapFn = tableDataMapperRegistry.agenda
  const data = (
    typeof mapFn === "function" ? mapFn(rawData) : rawData
  ) as InsertAgenda[]

  if (rawData.length === 0 || !agendasCount) {
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
          data={data}
          setPagination={setPagination}
          pagination={pagination}
          totalPages={lastPage}
          columns={[...tableColumnRegistry.agenda]}
        />
      </div>
    </div>
  )
}
