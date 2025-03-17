import { ReactNode } from "react"

type MenuFooterItemType = {
  icon?: ReactNode
  label: string
  link: string
}

export type MenuFooterListType = {
  heading: string
  items: MenuFooterItemType[]
}
