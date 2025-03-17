import { HTMLAttributes } from "react";
import styled from "styled-components";
import { DeviceSizes } from "../../../../shared/const/DeviceSizes";
import { Button } from "../../Button";
import { Logo } from "../../Logo";

const { LAPTOP_DEVICE, MOBILE_S_DEVICE } = DeviceSizes;

const StyledHeader = styled.header`
  background-color: #090612;
  border-bottom: 0.0625rem solid #ffffff26;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  @media (${LAPTOP_DEVICE}) {
    background-color: transparent;
    border: none;
  }
`;

const StyledHeaderLogo = styled(Logo)`
  @media (${MOBILE_S_DEVICE}) {
    > span {
      &:first-child {
        width: 5.3875rem !important;
      }
    }
  }
  @media (${LAPTOP_DEVICE}) {
    > span {
      &:first-child {
        width: 7rem !important;
      }
    }
  }
`;

const StyledHeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 4.563rem;
  justify-content: space-between;
  @media (${LAPTOP_DEVICE}) {
    height: 5.6875rem;
  }
`;

const StyledHeaderRight = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StyledHeaderButton = styled(Button)`
  span span {
    padding: 0.5rem;
  }
  @media (${MOBILE_S_DEVICE}) {
    font-size: 0.875rem;
  }
  @media (${LAPTOP_DEVICE}) {
    font-size: 1.25rem;
    span span {
      padding: 0.5rem 1.375rem 0.5625rem;
    }
  }
`;

const StyledHistoryButton = styled.div`
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  border-radius: 8px;
  border-width: 1px;
  border: 1px solid rgba(255, 255, 255, 0.16);

  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0%;
  color: rgba(248, 248, 248, 1);
  cursor: pointer;
`;

const StyledHeaderLeft = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  @media (${LAPTOP_DEVICE}) {
    gap: 5.875rem;
  }
`;

const StyledHeaderMobileToggle = styled.div<HTMLAttributes<HTMLDivElement>>``;

export const Styled = {
  StyledHeader,
  StyledHeaderButton,
  StyledHeaderContainer,
  StyledHeaderLeft,
  StyledHeaderLogo,
  StyledHeaderMobileToggle,
  StyledHeaderRight,
  StyledHistoryButton,
};
