import { FC } from "react";
import { Constants } from "../const";
import { MenuItem } from "./Item";
import { Styled } from "./styled";

const { MENU_HEADER_LIST } = Constants;
const { StyledHeaderMenu } = Styled;

export const Menu: FC = () => (
  <StyledHeaderMenu>
    {MENU_HEADER_LIST.slice(0, 1).map((item) => (
      <MenuItem
        items={item.items}
        key={item.label}
        label={item.label}
        link={item.link}
      />
    ))}
  </StyledHeaderMenu>
);
