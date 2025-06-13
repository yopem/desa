import {
  createCallerFactory,
  createTRPCRouter,
  publicProcedure,
} from "@/lib/api/trpc"
import { agendaRouter } from "./routers/agenda"
import { beritaRouter } from "./routers/berita"
import { ekspedisiRouter } from "./routers/ekspedisi"
import { inventarisRouter } from "./routers/inventaris"
import { kegiatanPembangunanRouter } from "./routers/kegiatan-pembangunan"
import { lembaranRouter } from "./routers/lembaran"
import { rabRouter } from "./routers/rab"
import { rencanaKerjaPembangunanRouter } from "./routers/rencana-kerja-pembangunan"
import { tanahRouter } from "./routers/tanah"
import { tanahKasRouter } from "./routers/tanah-kas"
import { userRouter } from "./routers/user"

export const appRouter = createTRPCRouter({
  heatlhCheck: publicProcedure.query(() => "ok"),

  // Routers
  agenda: agendaRouter,
  berita: beritaRouter,
  ekspedisi: ekspedisiRouter,
  inventaris: inventarisRouter,
  kegiatanPembangunan: kegiatanPembangunanRouter,
  lembaran: lembaranRouter,
  rab: rabRouter,
  rencanaKerjaPembangunan: rencanaKerjaPembangunanRouter,
  tanah: tanahRouter,
  tanahKas: tanahKasRouter,
  user: userRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)
