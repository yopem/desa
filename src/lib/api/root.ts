import { createCallerFactory, createTRPCRouter } from "@/lib/api/trpc"
import { agendaRouter } from "./routers/agenda"
import { beritaRouter } from "./routers/berita"
import { ekspedisiRouter } from "./routers/ekspedisi"
import { inventarisRouter } from "./routers/inventaris"
import { lembaranRouter } from "./routers/lembaran"
import { rabRouter } from "./routers/rab"
import { tanahRouter } from "./routers/tanah"
import { tanahKasRouter } from "./routers/tanah-kas"
import { userRouter } from "./routers/user"

export const appRouter = createTRPCRouter({
  agenda: agendaRouter,
  berita: beritaRouter,
  ekspedisi: ekspedisiRouter,
  inventaris: inventarisRouter,
  lembaran: lembaranRouter,
  rabat: rabRouter,
  tanahKas: tanahKasRouter,
  tanah: tanahRouter,
  user: userRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)
