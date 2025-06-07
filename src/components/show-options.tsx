"use client"

import type { UrlObject } from "url"
import * as React from "react"
import NextLink from "next/link"
import { Icon } from "@yopem-ui/react-icons"

import AlertDelete from "@/components/alert-delete"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTriggerItem,
} from "@/components/ui/menu"
import { Button } from "./ui/button"

interface ShowOptionsProps extends React.ComponentProps<typeof Menu> {
  onDelete?: () => void
  editUrl?: string | UrlObject
  editUrlNewTab?: string | UrlObject
  translateUrl?: string | UrlObject
  viewUrl?: string | UrlObject
  description: string | null
}

const ShowOptions = (props: ShowOptionsProps) => {
  const { onDelete, editUrl, editUrlNewTab, viewUrl, description } = props

  const [openDialogDelete, setOpenDialogDelete] = React.useState<boolean>(false)

  return (
    <>
      <Menu>
        <MenuTriggerItem asChild>
          <Button variant="ghost" size="sm" className="ml-auto flex h-8">
            <Icon name="EllipsisVertical" className="mr-2 size-4" />
          </Button>
        </MenuTriggerItem>
        <MenuContent className="w-[150px] p-2">
          {onDelete && (
            <MenuItem value="Hapus" asChild>
              <Button onClick={() => setOpenDialogDelete(true)}>
                <Icon name="Trash" className="mr-2 size-4" />
                Hapus
              </Button>
            </MenuItem>
          )}
          {editUrl && (
            <MenuItem value="Edit" asChild>
              <NextLink href={editUrl}>
                <Icon name="Edit" className="mr-2 size-4" />
                Edit
              </NextLink>
            </MenuItem>
          )}
          {editUrlNewTab && (
            <MenuItem value="Edit" asChild>
              <NextLink href={editUrlNewTab} target="_blank">
                <Icon name="Edit" className="mr-2 size-4" />
                Edit
              </NextLink>
            </MenuItem>
          )}
          {viewUrl && (
            <MenuItem value="Lihat" asChild>
              <NextLink href={viewUrl} target="_blank">
                <Icon name="Eye" className="mr-2 size-4" />
                Lihat
              </NextLink>
            </MenuItem>
          )}
        </MenuContent>
      </Menu>
      {onDelete && (
        <AlertDelete
          description={description}
          isOpen={openDialogDelete}
          className="max-w-[366px]"
          onDelete={onDelete}
          onClose={() => setOpenDialogDelete(false)}
        />
      )}
    </>
  )
}

export default ShowOptions
