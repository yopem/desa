import { drizzle } from "drizzle-orm/node-postgres"

import { databaseUrl } from "@/lib/env/server"
import { accountTable, sessionTable, userTable } from "./schema/user"

export const db = drizzle(databaseUrl, {
  schema: {
    accountTable,
    sessionTable,
    userTable,
  },
})
