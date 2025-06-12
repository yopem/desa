import * as React from "react"

import ModalWrapper from "@/components/layout/modal-wrapper"
import AgendaForm from "@/components/pages/buku-a7/create-agenda-form"

export const metadata = {
  title: "Buat Agenda",
}

export default function AgendaPage() {
  return (
    <ModalWrapper>
      <AgendaForm />
    </ModalWrapper>
  )
}
