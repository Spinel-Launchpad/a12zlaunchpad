import { FC } from "react"
import { MenuItemProps } from "../../types"
import { useHandle } from "./modules/useHandle"
import { Styled } from "./styled"

const {
  StyledHeaderMenuDropdown,
  StyledHeaderMenuDropdownItem,
  StyledHeaderMenuItem,
  StyledHeaderMenuItemHref,
  StyledHeaderMenuItemIcon,
  StyledHeaderMenuItemLabel,
} = Styled

export const MenuItem: FC<MenuItemProps> = ({ items, label, link }) => {
  const { handleToggleActive, isActive } = useHandle()

  return (
    <StyledHeaderMenuItem key={label} $isActive={isActive}>
      {items ? (
        <StyledHeaderMenuItemLabel onClick={handleToggleActive}>
          {label}
          <StyledHeaderMenuItemIcon />
        </StyledHeaderMenuItemLabel>
      ) : (
        <StyledHeaderMenuItemHref href={link}>{label}</StyledHeaderMenuItemHref>
      )}
      <StyledHeaderMenuDropdown>
        {items?.map((menuItem) => (
          <StyledHeaderMenuDropdownItem key={menuItem.label}>
            <StyledHeaderMenuItemHref href={menuItem.link}>
              {menuItem.label}
            </StyledHeaderMenuItemHref>
          </StyledHeaderMenuDropdownItem>
        ))}
      </StyledHeaderMenuDropdown>
    </StyledHeaderMenuItem>
  )
}
