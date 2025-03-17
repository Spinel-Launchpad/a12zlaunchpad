import { ReactNode } from "react";
import { Images } from "../../../../shared/const/Images";
import Image from "next/image";
import { Styled } from "./styled";
const { DEFI_APP, WORLD, TELE, X, DISCORD, SOCIAL_DOT, DEFI, BNB, ARB } =
  Images;

const {
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
} = Styled;

function Hero() {
  return (
    <HeroContainer style={{ marginTop: "100px" }}>
      <ImageWrapper>
        <Image src={DEFI_APP} alt="main hero" width={382} height={260} />
      </ImageWrapper>
      <ContentContainer>
        <Header>
          <TitleContainer>
            <Title>Terminus Network</Title>
            <Tag>TERM/USDT</Tag>
          </TitleContainer>
          <IconsContainer>
            <Image src={WORLD} alt="icon" width={32} height={32} />
            <Image src={TELE} alt="icon" width={32} height={32} />
            <Image src={X} alt="icon" width={32} height={32} />
            <Image src={DISCORD} alt="icon" width={32} height={32} />
            <Image src={SOCIAL_DOT} alt="icon" width={32} height={32} />
          </IconsContainer>
        </Header>
        <Description>
          Terminus.network is a Payment Association merging Web3 with the
          real-world economy, transforming offline payments. It connects crypto
          ecosystems to retail via banks, e-wallets, and fiat networks. With its
          Universal Payment system, users pay in crypto at local shops, while
          merchants receive fiat using existing QR codes. Established in
          Thailand and Vietnam, Terminus is expanding across Southeast Asia,
          making crypto payments practical for everyday use.
        </Description>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <CardBlackStyle>
            Backed by{" "}
            <span
              style={{
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Ant Group, SNZ
            </span>
            , and{" "}
            <span
              style={{
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Oak Grove Ventures
            </span>{" "}
            , prominent investors supporting its mission to revolutionize crypto
            payments and bridge Web3 with real-world economies.
          </CardBlackStyle>
          <CardBlackStyle>
            Demo video:{" "}
            <IframeStyled
              width="326"
              height="579.5555419921875"
              style={{ borderRadius: "8px" }}
              src="https://www.youtube.com/embed/3Mng0VGBuVo"
              frameBorder="0"
              allowFullScreen
            ></IframeStyled>
            <LinkStyled
              href="https://www.youtube.com/shorts/3Mng0VGBuVo"
              target="_blank"
              style={{
                display: "inline-block",
              }}
            >
              https://www.youtube.com/shorts/3Mng0VGBuVo
            </LinkStyled>
          </CardBlackStyle>
        </div>

        <StatsContainer>
          <StatsColumn>
            <CardHero
              title="Symbol"
              content={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img src={DEFI} alt="icon" width={24} height={24} /> TERM
                </div>
              }
            />
            <CardHero
              title="Join Network:"
              content={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img src={BNB} alt="icon" width={24} height={24} /> BNB Chain
                </div>
              }
            />
            <CardHero
              title="Token Network:"
              content={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img src={BNB} alt="icon" width={24} height={24} /> BNB Chain
                </div>
              }
            />
          </StatsColumn>
          <StatsColumn>
            <CardHero title="Market cap:" content="35,000,000.0 USDT" />
            <CardHero title="Total Raise:" content="150,000.0 USDT" />
            {/* <CardHero title="Total Supply:" content="100,000,000 TERM" /> */}
          </StatsColumn>
        </StatsContainer>
      </ContentContainer>
    </HeroContainer>
  );
}

export default Hero;

const CardHero = ({
  title,
  content,
}: {
  title: string;
  content?: ReactNode;
}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </Card>
  );
};
