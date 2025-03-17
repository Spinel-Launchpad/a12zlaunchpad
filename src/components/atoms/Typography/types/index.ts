import { MouseEventHandler } from "react"
import { PropsWithChildren } from "../../../../shared/types"

declare const GradientTextStyleTypes: ["primary", "secondary", "none"]
declare type GradientTextStyleType = (typeof GradientTextStyleTypes)[number]

export type StyledGradientTextProps = PropsWithChildren & {
  $styleType: GradientTextStyleType
}

export type GradientTextProps = PropsWithChildren & {
  styleType?: GradientTextStyleType
}

export type StyledTypographyProps = PropsWithChildren & {
  $isCenter: boolean
  $isShadow: boolean
}

export type TypographyProps = GradientTextProps & {
  isCenter?: boolean
  isShadow?: boolean
  onClick?: MouseEventHandler<HTMLParagraphElement>
}
