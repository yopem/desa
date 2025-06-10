import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { createInsertSchema, createUpdateSchema } from "drizzle-zod"
import z from "zod"

import { createCustomId } from "@/lib/utils/custom-id"

export const JENIS_PERATURAN_BUKU_PERATURAN_DESA = [
  "peraturan_desa",
  "peraturan_bersama",
  "peraturan_kepala_desa",
] as const

export const jenisPeraturanBukuPeraturanDesa = z.enum(
  JENIS_PERATURAN_BUKU_PERATURAN_DESA,
)

export const jenisPeraturanBukuPeraturanDesaEnum = pgEnum(
  "jenis_peraturan_buku_peraturan_desa",
  JENIS_PERATURAN_BUKU_PERATURAN_DESA,
)

export const bukuPeraturanDesaTable = pgTable("buku_peraturan_desa", {
  id: text()
    .primaryKey()
    .$defaultFn(() => createCustomId()),
  judul: text("judul").notNull(),
  uraian: text("uraian").notNull(),
  jenisPeraturan: jenisPeraturanBukuPeraturanDesaEnum("jenis_peraturan")
    .notNull()
    .default("peraturan_desa"),
  nomorSuratDitetapkan: text("nomor_surat_ditetapkan").notNull(),
  tanggal_surat_ditetapkan: timestamp("tanggal_surat_ditetapkan", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
  nomorSuratDilaporkan: text("nomor_surat_dilaporkan").notNull(),
  tanggalSuratDilaporkan: timestamp("tanggal_surat_dilaporkan", {
    withTimezone: true,
    mode: "date",
  }),
  nomorSuratDiundangkan: text("nomor_surat_diundangkan"),
  tanggalSuratDiundangkan: timestamp("tanggal_surat_diundangkan", {
    withTimezone: true,
    mode: "date",
  }),
  keteranganTambahan: text("keterangan_tambahan"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

export const insertBukuPeraturanDesaSchema = createInsertSchema(
  bukuPeraturanDesaTable,
).refine(
  (data) => {
    if (data.jenisPeraturan !== "peraturan_kepala_desa") {
      return !!data.nomorSuratDiundangkan && !!data.tanggalSuratDiundangkan
    }
    return true
  },
  {
    message:
      "Nomor dan tanggal surat diundangkan wajib diisi untuk jenis peraturan ini",
    path: ["nomorSuratDiundangkan", "tanggalSuratDiundangkan"],
  },
)

export const updateBukuPeraturanDesaSchema = createUpdateSchema(
  bukuPeraturanDesaTable,
).refine(
  (data) => {
    if (data.jenisPeraturan === undefined) return true
    if (data.jenisPeraturan !== "peraturan_kepala_desa") {
      return (
        (data.nomorSuratDiundangkan === undefined &&
          data.tanggalSuratDiundangkan === undefined) ||
        (!!data.nomorSuratDiundangkan && !!data.tanggalSuratDiundangkan)
      )
    }
    return true
  },
  {
    message:
      "Nomor dan tanggal surat diundangkan wajib diisi untuk jenis peraturan ini",
    path: ["nomorSuratDiundangkan", "tanggalSuratDiundangkan"],
  },
)

export type SelectBukuPeraturanDesa = typeof bukuPeraturanDesaTable.$inferSelect
export type InsertBukuPeraturanDesa = typeof bukuPeraturanDesaTable.$inferInsert
