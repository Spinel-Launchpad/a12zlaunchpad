import { PropsWithChildren } from "../../../../shared/types"

export type LayoutProps = PropsWithChildren & {
  isLoading: boolean
  title: string
}
