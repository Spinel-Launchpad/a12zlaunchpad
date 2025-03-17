import { HTMLAttributes, MouseEventHandler, ReactNode } from "react"
import { PropsWithChildren } from "../../../../shared/types"

export type StyledFaqItemProps = HTMLAttributes<HTMLLIElement> & {
  $isActive?: boolean
}

export type SocialListType = {
  icon: ReactNode
  link: string
}

type MenuHeaderItemType = {
  label: string
  link?: string
}

export type MenuHeaderListType = MenuHeaderItemType & {
  items?: MenuHeaderItemType[]
}

export type MenuItemProps = MenuHeaderListType

export type StyledHeaderMobileProps = PropsWithChildren & {
  $isActive: boolean
}

export type MenuMobileProps = {
  handleToggleActive: MouseEventHandler<HTMLDivElement>
  isActive: boolean
}
