"use client"

import * as React from "react"
import { Icon } from "@yopem-ui/react-icons"

import { handleLogOut } from "./action"

const LogoutButton: React.FC = () => {
  return (
    <form action={void handleLogOut}>
      <button
        aria-label="Keluar"
        className="inline-flex cursor-pointer flex-row"
      >
        <Icon name="LogOut" className="mr-2" />
        Keluar
      </button>
    </form>
  )
}

export default LogoutButton
