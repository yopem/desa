"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"

import { useTRPC } from "@/lib/trpc/client"
import UserTable from "./table"

export default function UserContent() {
  const searchParams = useSearchParams()

  const page = searchParams.get("page")

  const perPage = 10

  const trpc = useTRPC()

  const { data: usersCount, refetch: updateUsersCount } = useQuery(
    trpc.user.count.queryOptions(),
  )

  const lastPage = usersCount && Math.ceil(usersCount / perPage)

  const {
    data: users,
    isLoading,
    refetch: updateUsers,
  } = useQuery(
    trpc.user.all.queryOptions({
      page: page ? parseInt(page) : 1,
      perPage: perPage,
    }),
  )

  React.useEffect(() => {
    if (lastPage && page && parseInt(page) !== 1 && parseInt(page) > lastPage) {
      window.history.pushState(null, "", `?page=${lastPage.toString()}`)
    }
  }, [lastPage, page])

  return (
    <>
      {!isLoading && users !== undefined && users.length > 0 ? (
        <UserTable
          users={users}
          paramsName="page"
          page={page ? parseInt(page) : 1}
          lastPage={lastPage ?? 3}
          updateUsers={updateUsers}
          updateUsersCount={updateUsersCount}
        />
      ) : (
        <div className="my-64 flex items-center justify-center">
          <h3 className="text-center text-4xl font-bold">
            Pengguna tidak ditemukan!
          </h3>
        </div>
      )}
    </>
  )
}
