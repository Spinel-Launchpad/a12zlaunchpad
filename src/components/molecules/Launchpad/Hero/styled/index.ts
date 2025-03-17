import styled from "styled-components";

const HeroContainer = styled.div`
  margin-top: 200px;
  /* border: 1px solid #303030; */
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
  max-width: 1440px;
  margin: 0px auto;
  background: radial-gradient(
      122.44% 260.07% at 0% 0%,
      rgba(241, 149, 37, 0.288) 0%,
      rgba(241, 149, 37, 0) 50%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border: 1px solid rgba(241, 149, 38, 0.24);
  @media (min-width: 768px) {
    padding: 32px;
    flex-direction: row;
    gap: 48px;
  }
`;

const ImageWrapper = styled.div`
  width: fit-content;
  max-width: 380px;
  width: 100%;
  @media (min-width: 768px) {
    width: 382px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #fbfeff;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const Tag = styled.div`
  background: rgba(227, 236, 255, 0.16);
  border-radius: 4px;
  padding: 6px 12px;
  font-weight: bold;
  font-size: 14px;
  color: #c0c0cd;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #888597;
  font-weight: medium;
  margin: 0px;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
  flex-wrap: nowrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StatsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Card = styled.div`
  /* background: #2a2a2a; */
  background: linear-gradient(
    90deg,
    rgba(251, 193, 126, 0.12) 0%,
    rgba(251, 193, 126, 0) 89.1%
  );

  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;

const CardTitle = styled.div`
  color: #888597;
  font-size: 16px;
  font-weight: medium;
`;

const CardContent = styled.div`
  color: #fbfeff;
  font-size: 16px;
  font-weight: medium;
`;

const CardBlackStyle = styled.div`
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  border-radius: 4px;
  background: rgba(255, 237, 227, 0.08);
  color: rgba(136, 133, 151, 1);
`;

const LinkStyled = styled.a`
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  text-decoration: underline;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const IframeStyled = styled.iframe`
  width: 326px;
  height: 580px;
  border-radius: 8px;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Styled = {
  HeroContainer,
  ImageWrapper,
  ContentContainer,
  Header,
  TitleContainer,
  Title,
  Tag,
  IconsContainer,
  Description,
  StatsContainer,
  StatsColumn,
  Card,
  CardTitle,
  CardContent,
  CardBlackStyle,
  LinkStyled,
  IframeStyled,
};
