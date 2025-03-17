import { AnchorHTMLAttributes, ReactNode } from "react"

export type PropsWithChildren = {
  children: ReactNode
}

export type HTMLAnchorElementType = AnchorHTMLAttributes<HTMLAnchorElement>
