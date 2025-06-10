import { TRPCError } from "@trpc/server"
import { tryCatch } from "@yopem/try-catch"
import { z } from "zod"

import {
  adminProtectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "@/lib/api/trpc"
import {
  insertEkspedisiSchema,
  updateEkspedisiSchema,
} from "@/lib/db/schema/ekspedisi"
import {
  countEkspedisis,
  deleteEkspedisi,
  getEkspedisis,
  insertEkspedisi,
  searchEkspedisis,
  updateEkspedisi,
} from "@/lib/db/service/ekspedisi"

export const ekspedisiRouter = createTRPCRouter({
  create: adminProtectedProcedure
    .input(insertEkspedisiSchema)
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(insertEkspedisi(input))
      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error inserting ekspedisi",
        })
      }
      return data
    }),

  update: adminProtectedProcedure
    .input(updateEkspedisiSchema)
    .mutation(async ({ input }) => {
      // @ts-expect-error FIX: zod schema make date optional
      const { data, error } = await tryCatch(updateEkspedisi(input))
      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error inserting ekspedisi",
        })
      }
      return data
    }),

  delete: adminProtectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const { data, error } = await tryCatch(deleteEkspedisi(input))
      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error deleting ekspedisi",
        })
      }
      return data
    }),

  all: adminProtectedProcedure
    .input(z.object({ page: z.number(), perPage: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(
        getEkspedisis(input.page, input.perPage),
      )
      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error fetching ekspedisis",
        })
      }
      return data
    }),

  search: publicProcedure
    .input(z.object({ searchQuery: z.string(), limit: z.number() }))
    .query(async ({ input }) => {
      const { data, error } = await tryCatch(searchEkspedisis(input))
      if (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error fetching ekspedisis",
        })
      }
      return data
    }),

  count: publicProcedure.query(async () => {
    const { data, error } = await tryCatch(countEkspedisis())
    if (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Error counting ekspedisis",
      })
    }
    return data
  }),
})
