import { HTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../../../../shared/const/Colors";
import { DeviceSizes } from "../../../../../shared/const/DeviceSizes";
import { HTMLAnchorElementType } from "../../../../../shared/types";

const { COLOR_BORDER } = Colors;
const { LAPTOP_DEVICE } = DeviceSizes;

const StyledHeaderSocialList = styled.ul`
  bottom: 1rem;
  column-gap: 0.5rem;
  display: flex;
  left: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  @media (${LAPTOP_DEVICE}) {
    bottom: 0;
    left: 0;
    /* margin-right: 1.875rem; */
    position: relative;
  }
`;

const StyledHeaderSocialItem = styled.li<HTMLAttributes<HTMLLIElement>>``;

const StyledHeaderSocialLink = styled.a<HTMLAnchorElementType>`
  border-radius: 50%;
  border: 0.0625rem solid ${COLOR_BORDER};
  color: ${COLOR_BORDER};
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  width: 2rem;
`;

export const Styled = {
  StyledHeaderSocialItem,
  StyledHeaderSocialLink,
  StyledHeaderSocialList,
};
