"use client"

import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { useAppForm } from "@/components/ui/form"
import { useToast } from "@/components/ui/toast"
import { useTRPC } from "@/lib/trpc/client"
import { useHandleTRPCError } from "@/lib/utils/error"

export default function AgendaForm() {
  const { toast } = useToast()
  const handleError = useHandleTRPCError()

  const trpc = useTRPC()
  const router = useRouter()

  const { mutate: createAgenda } = useMutation(
    trpc.agenda.create.mutationOptions({
      onSuccess: () => {
        // Fix not working toast
        toast({
          description: "Berhasil membuat agenda",
        })
        router.back()
        console.log("Agenda created successfully")
      },
      onError: (error) => {
        handleError(error, "Gagal membuat agenda")
      },
    }),
  )

  const form = useAppForm({
    defaultValues: {
      jenisSurat: "surat_masuk" as const,
      uraian: "",
      keteranganTambahan: "",
    },
    validators: {
      onChange: ({ value }) => {
        return {
          fields: {
            jenisSurat: !["surat_masuk", "surat_keluar"].includes(
              value.jenisSurat,
            )
              ? "Jenis surat tidak valid"
              : undefined,

            uraian:
              !value.uraian || value.uraian.trim() === ""
                ? "Uraian wajib diisi"
                : undefined,

            keteranganTambahan:
              value.keteranganTambahan &&
              typeof value.keteranganTambahan !== "string"
                ? "Keterangan tambahan harus berupa teks"
                : null,
          },
        }
      },
    },
    onSubmit: ({ value }) => {
      createAgenda(value)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
      className="max-w-md space-y-6"
    >
      <form.AppField name="jenisSurat">
        {(field) => (
          <form.FormItem>
            <form.FormLabel>Jenis Surat</form.FormLabel>
            {/* Fix later error on modal mode */}
            <field.SelectField
              mode="inline"
              options={[
                { label: "Surat Masuk", value: "surat_masuk" },
                { label: "Surat Keluar", value: "surat_keluar" },
              ]}
              placeholder="Pilih jenis surat"
            />
            <form.FormMessage />
          </form.FormItem>
        )}
      </form.AppField>

      <form.AppField name="uraian">
        {(field) => (
          <form.FormItem>
            <form.FormLabel>Uraian</form.FormLabel>
            <field.TextareaField placeholder="Masukkan uraian" />
            <form.FormMessage />
          </form.FormItem>
        )}
      </form.AppField>

      <form.AppField name="keteranganTambahan">
        {(field) => (
          <form.FormItem>
            <form.FormLabel>Keterangan Tambahan</form.FormLabel>
            <field.TextareaField placeholder="Opsional" />
            <form.FormMessage />
          </form.FormItem>
        )}
      </form.AppField>

      <form.FormItem>
        <Button type="submit">Simpan Agenda</Button>
      </form.FormItem>
    </form>
  )
}
