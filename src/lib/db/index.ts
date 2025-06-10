import { drizzle } from "drizzle-orm/node-postgres"

import { databaseUrl } from "@/lib/env/server"
import { agendaTable } from "./schema/agenda"
import { beritaTable } from "./schema/berita"
import { inventarisTable } from "./schema/inventaris"
import { peraturanTable } from "./schema/peraturan"
import { rabTable } from "./schema/rab"
import { tanahTable } from "./schema/tanah"
import { tanahKasTable } from "./schema/tanah-kas"
import { accountTable, sessionTable, userTable } from "./schema/user"

export const db = drizzle(databaseUrl, {
  schema: {
    accountTable,
    sessionTable,
    userTable,
    // data
    agendaTable,
    beritaTable,
    inventarisTable,
    peraturanTable,
    rabTable,
    tanahKasTable,
    tanahTable,
  },
})
