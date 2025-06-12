import * as React from "react"

import DialogWrapper from "@/components/layout/dialog-wrapper"
import AgendaForm from "./form"

export const metadata = {
  title: "Buat Agenda",
}

export default function AgendaPage() {
  return (
    <DialogWrapper>
      <AgendaForm />
    </DialogWrapper>
  )
}
