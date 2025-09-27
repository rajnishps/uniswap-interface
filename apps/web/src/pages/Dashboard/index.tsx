import { StatCard, StatCard2 } from "pages/Landing/components/StatCard";
import { Flex } from "ui/src";
import { InterfacePageName } from "uniswap/src/features/telemetry/constants";
import Trace from "uniswap/src/features/telemetry/Trace";
import styled from "styled-components";
import { Table } from "components/Table";
import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Cell } from "components/Table/Cell";
import { TableText } from "components/Table/styled";
import Web3Status from "components/Web3Status";

const Box = styled.div<{ live?: boolean }>`
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
`;
const Container = styled.div<{ live?: boolean }>`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 160px;
  width: 100%;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: 320px;
  }
`;
const InviteContainer = styled.div<{ live?: boolean }>`
  display: grid;
  gap: 20px;
  margin-top: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  height: 120px;
  width: 100%;

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    height: 320px;
  }
`;
const ConnectButtonBg = styled.div<{}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 120px;
  background: linear-gradient(to left, #00987c 25%, #05e5df 75%);
  border-radius: 20px;
  padding: 40px 100px;

  @media (max-width: 768px) {
  }
`;
const InviteContainerInside = styled.div<{ live?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 240px;
  }
`;

const UserBlock = () => {
  return (
    <Box>
      <p>Overview</p>
      <Container>
        <StatCard title={"$341,493"} value={"Hyper Orbit Holdings"} delay={0} />
        <StatCard title={"$0"} value={"LP Portfolio"} delay={0.2} />
        <StatCard title={"$5,493"} value={"Rewards"} delay={0.4} />
        <StatCard title={"$3"} value={"LP Rewards"} delay={0.4} />
      </Container>
    </Box>
  );
};
const PointsBlock = () => {
  return (
    <InviteContainer>
      <StatCard title={"0"} value={"Total Points"} delay={0} />
      <StatCard title={"0"} value={"Invited Users"} delay={0.2} />
      <StatCard title={"0"} value={"Point Boost"} delay={0.4} />
    </InviteContainer>
  );
};

export default function Dashboard() {
  return (
    <Trace page={InterfacePageName.LandingPage}>
      <UserBlock />
      <PointsBlock />
      <ConnectButtonBg>
        <img
          src="/images/logo-icon.png"
          width={100}
          style={{ filter: "brightness(0) invert(0)" }}
          alt="ConnectButton"
        />
        <Web3Status />
      </ConnectButtonBg>
    </Trace>
  );
}
