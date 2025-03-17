import { MouseEventHandler } from "react"
import { PropsWithChildren } from "../../../../shared/types"

declare const ButtonTypes: ["button", "a"]
declare type ButtonType = (typeof ButtonTypes)[number]
declare const ButtonStyleTypes: ["primary", "secondary"]
declare type ButtonStyleType = (typeof ButtonStyleTypes)[number]

export type StyledButtonProps = {
  $styleType: ButtonStyleType
}

export type ButtonProps = PropsWithChildren & {
  href?: string
  htmlType?: ButtonType
  onClick?: MouseEventHandler<HTMLButtonElement>
  styleType?: ButtonStyleType
  target?: string
}
