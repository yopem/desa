import { drizzle } from "drizzle-orm/node-postgres"

import { databaseUrl } from "@/lib/env/server"
import { agendaTable } from "./schema/agenda"
import { beritaTable } from "./schema/berita"
import { ekspedisiTable } from "./schema/ekspedisi"
import { inventarisTable } from "./schema/inventaris"
import { jenisKelaminEnum } from "./schema/jenis-kelamin"
import { jenisPekerjaanEnum } from "./schema/jenis-pekerjaan"
import { kebangsaanEnum } from "./schema/kebangsaan"
import { lembaranTable } from "./schema/lembaran"
import { pendudukSementaraTable } from "./schema/penduduk-sementara"
import { peraturanTable } from "./schema/peraturan"
import { rabTable } from "./schema/rab"
import { rencanaKerjaPembangunanTable } from "./schema/rencana-kerja-pembangunan"
import { tanahTable } from "./schema/tanah"
import { tanahKasTable } from "./schema/tanah-kas"
import { accountTable, sessionTable, userTable } from "./schema/user"

export const db = drizzle(databaseUrl, {
  schema: {
    // auth
    accountTable,
    sessionTable,
    userTable,
    // data
    agendaTable,
    beritaTable,
    ekspedisiTable,
    inventarisTable,
    jenisKelaminEnum,
    jenisPekerjaanEnum,
    kebangsaanEnum,
    lembaranTable,
    pendudukSementaraTable,
    peraturanTable,
    rabTable,
    rencanaKerjaPembangunanTable,
    tanahKasTable,
    tanahTable,
  },
})
