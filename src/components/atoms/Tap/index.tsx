import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background: #111; */
  color: #fff;
  padding: 40px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 1440px;
`;

const TabMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  /* width: 460;
  height: 64; */
  width: fit-content;
  border-radius: 8px;
  gap: 16px;
  padding: 6px;
  background: linear-gradient(
    101.46deg,
    rgba(60, 60, 59, 0.24) 8.43%,
    rgba(251, 193, 126, 0.24) 91.57%
  );
  margin: 0px auto;
`;

const TabButton = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "#F89C35" : "transparent")};
  color: ${(props) =>
    props.active ? "rgba(255, 255, 255, 1)" : "#rgba(234, 238, 255, 0.48)"};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  border-radius: 8px;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  font-size: 18px;
  font-weight: 600;
  &:hover {
    background: #f89c35;
    color: #000;
  }
`;

const Content = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #f89c35;
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
`;

const FeatureBox = styled.div`
  background: #333;
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
`;

const TapComponent = ({
  listTap,
  defaultKey,
}: {
  listTap?: { title: string; key: string; item: any }[];
  defaultKey?: string;
}) => {
  const [activeTab, setActiveTab] = useState("Introduction");

  return (
    <Container>
      <TabMenu>
        <TabButton
          active={activeTab === "Introduction"}
          onClick={() => setActiveTab("Introduction")}
        >
          Introduction
        </TabButton>
        <TabButton
          active={activeTab === "Roadmap"}
          onClick={() => setActiveTab("Roadmap")}
        >
          Roadmap
        </TabButton>
        <TabButton
          active={activeTab === "Tokenomics"}
          onClick={() => setActiveTab("Tokenomics")}
        >
          Tokenomics
        </TabButton>
      </TabMenu>

      <Content>
        {activeTab === "Introduction" && (
          <>
            <Title>Introduce Terminus Network</Title>
            <Subtitle>Introduction</Subtitle>
            <Paragraph>
              Terminus.network is a Payment Association pioneering the
              convergence of Web3 and the real-world economy, revolutionizing
              how people pay at offline merchants...
            </Paragraph>
            <Subtitle>Features</Subtitle>
            <FeatureBox>
              <strong>Universal Payment System</strong>
              <p>
                Seamlessly connects cryptocurrency ecosystems with everyday
                retail transactions.
              </p>
            </FeatureBox>
          </>
        )}
        {activeTab === "Roadmap" && (
          <Title>Roadmap Content Coming Soon...</Title>
        )}
        {activeTab === "Tokenomics" && (
          <Title>Tokenomics Content Coming Soon...</Title>
        )}
      </Content>
    </Container>
  );
};

export default TapComponent;
