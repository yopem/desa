import { drizzle } from "drizzle-orm/node-postgres"

import { databaseUrl } from "@/lib/env/server"
import { beritaTable } from "./schema/berita"
import { peraturanDesaTable } from "./schema/peraturan-desa"
import { rabTable } from "./schema/rab"
import { accountTable, sessionTable, userTable } from "./schema/user"

export const db = drizzle(databaseUrl, {
  schema: {
    accountTable,
    sessionTable,
    userTable,
    // data
    beritaTable,
    peraturanDesaTable,
    rabTable,
  },
})
