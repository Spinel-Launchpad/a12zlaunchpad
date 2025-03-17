import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
  background: #0f0f0f;
  color: #fff;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
  border-bottom: 2px solid #f89c35;
  padding-bottom: 5px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #ccc;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const FeatureBox = styled.div`
  background: #222;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #f89c35;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const BackerList = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding-left: 0;
`;

const BackerItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  color: #ddd;
  &::before {
    content: "•";
    color: #f89c35;
    margin-right: 8px;
  }
`;

const VisionSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: #181818;
  border-radius: 8px;
`;

const TerminusComponent = () => {
  return (
    <Container>
      <Title>Introduce Terminus Network</Title>

      <Subtitle>Introduction</Subtitle>
      <Paragraph>
        Terminus.network is a Payment Association pioneering the convergence of
        Web3 and the real-world economy...
      </Paragraph>

      <Subtitle>Features</Subtitle>
      <FeatureContainer>
        <FeatureBox>
          <FeatureTitle>Universal Payment System</FeatureTitle>
          <Paragraph>
            Pay in crypto at local shops, restaurants, and merchants, who
            receive fiat seamlessly...
          </Paragraph>
        </FeatureBox>
        <FeatureBox>
          <FeatureTitle>Crypto-Fiat Integration</FeatureTitle>
          <Paragraph>
            Terminus integrates with banks, e-wallets, and fiat settlement
            networks...
          </Paragraph>
        </FeatureBox>
        <FeatureBox>
          <FeatureTitle>Market Expansion</FeatureTitle>
          <Paragraph>
            Successfully established in Thailand and Vietnam...
          </Paragraph>
        </FeatureBox>
        <FeatureBox>
          <FeatureTitle>Secure and Efficient Transactions</FeatureTitle>
          <Paragraph>
            Leveraging public chain technology and PayFi protocols...
          </Paragraph>
        </FeatureBox>
      </FeatureContainer>

      <Subtitle>Backer</Subtitle>
      <Paragraph>
        Terminus Network is supported by prominent investors...
      </Paragraph>
      <BackerList>
        <BackerItem>Ant Group (investment arm of Alibaba)</BackerItem>
        <BackerItem>SNZ – Equity investor</BackerItem>
        <BackerItem>Oak Grove Ventures – Token investor</BackerItem>
      </BackerList>

      <VisionSection>
        <Subtitle>Vision</Subtitle>
        <Paragraph>
          Terminus envisions a world where cryptocurrency payments are
          seamlessly integrated into daily life...
        </Paragraph>
      </VisionSection>
    </Container>
  );
};

export default TerminusComponent;
