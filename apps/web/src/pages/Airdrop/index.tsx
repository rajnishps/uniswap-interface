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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
  display: flex;
  gap: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  padding: 20px;
  width: 100%;

  margin-top: 20px;
  @media (max-width: 768px) {
    justify-content: center;
    gap: 0;
    flex-direction: column;
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
      <p>Username</p>
      <Container>
        <StatCard title={"2"} value={"Your points"} delay={0} />
        <StatCard title={"235"} value={"Your rank"} delay={0.2} />
        <StatCard title={"0/100"} value={"Loyalty Rating"} delay={0.4} />
        <StatCard title={"0%"} value={"Active Boosts"} delay={0.6} />
        <StatCard title={"0"} value={"Boost Daily Earnings"} delay={0.8} />
      </Container>
    </Box>
  );
};
const InviteBlock = () => {
  return (
    <InviteContainer>
      <InviteContainerInside>
        <div>
          <p>Invite Friends</p>
          <p>Earn 10% of what your friends earn, plus they get 10% boost! </p>
        </div>
        <Container>
          <StatCard2 title={"2"} value={"Invited Count"} delay={0} />
          <StatCard2 title={"1"} value={"Referral Points Earned"} delay={0.2} />
        </Container>
      </InviteContainerInside>
      <img src="/images/invite.png" alt="invite" width={280} />
    </InviteContainer>
  );
};

const leaderBoardData = [
  {
    address: "FiNb...u9TD",
    swaps: 42351,
    liquidity: 3592822183,
    referral: 0,
    bonus: 0,
    totalPoints: 3592864534,
  },
  {
    address: "FiNb...u9TD",
    swaps: 42351,
    liquidity: 3592822183,
    referral: 0,
    bonus: 0,
    totalPoints: 3592864534,
  },
  {
    address: "FiNb...u9TD",
    swaps: 42351,
    liquidity: 3592822183,
    referral: 0,
    bonus: 0,
    totalPoints: 3592864534,
  },
  {
    address: "FiNb...u9TD",
    swaps: 42351,
    liquidity: 3592822183,
    referral: 0,
    bonus: 0,
    totalPoints: 3592864534,
  },
  {
    address: "FiNb...u9TD",
    swaps: 42351,
    liquidity: 3592822183,
    referral: 0,
    bonus: 0,
    totalPoints: 3592864534,
  },
  {
    address: "FiNb...u9TD",
    swaps: 42351,
    liquidity: 3592822183,
    referral: 0,
    bonus: 0,
    totalPoints: 3592864534,
  },
  {
    address: "FiNb...u9TD",
    swaps: 42351,
    liquidity: 3592822183,
    referral: 0,
    bonus: 0,
    totalPoints: 3592864534,
  },
  {
    address: "FiNb...u9TD",
    swaps: 42351,
    liquidity: 3592822183,
    referral: 0,
    bonus: 0,
    totalPoints: 3592864534,
  },
  {
    address: "FiNb...u9TD",
    swaps: 42351,
    liquidity: 3592822183,
    referral: 0,
    bonus: 0,
    totalPoints: 3592864534,
  },
];

export interface LeaderBoardData {
  address: string;
  swaps: number;
  liquidity: number;
  referral: number;
  bonus: number;
  totalPoints: number;
}

const LeaderBoardBlock = () => {
  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<LeaderBoardData>();
    return [
      columnHelper.accessor((row) => row, {
        id: "address",
        header: () => (
          <Cell>
            <Flex row gap="4px">
              <p>Address</p>
            </Flex>
          </Cell>
        ),
        cell: (row) => (
          <Cell>
            <p>{row.getValue?.().address}</p>
          </Cell>
        ),
      }),
      columnHelper.accessor((row) => row, {
        id: "swaps",
        header: () => (
          <Cell>
            <Flex row gap="4px">
              <p>Swaps</p>
            </Flex>
          </Cell>
        ),
        cell: (row) => (
          <Cell>
            <p>{row.getValue?.().swaps}</p>
          </Cell>
        ),
      }),
      columnHelper.accessor((row) => row, {
        id: "liquidity",
        header: () => (
          <Cell>
            <Flex row gap="4px">
              <p>Liquidity</p>
            </Flex>
          </Cell>
        ),
        cell: (row) => (
          <Cell>
            <p>{row.getValue?.().liquidity}</p>
          </Cell>
        ),
      }),
      columnHelper.accessor((row) => row, {
        id: "referral",
        header: () => (
          <Cell>
            <Flex row gap="4px">
              <p>Referral</p>
            </Flex>
          </Cell>
        ),
        cell: (row) => (
          <Cell>
            <p>{row.getValue?.().referral}</p>
          </Cell>
        ),
      }),
      columnHelper.accessor((row) => row, {
        id: "bonus",
        header: () => (
          <Cell>
            <Flex row gap="4px">
              <p>Bonus</p>
            </Flex>
          </Cell>
        ),
        cell: (row) => (
          <Cell>
            <TableText>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{row.getValue?.().bonus}</span>
              </div>
            </TableText>
          </Cell>
        ),
      }),
      columnHelper.accessor((row) => row, {
        id: "totalPoints",
        header: () => (
          <Cell>
            <Flex row gap="4px">
              <p>Total Points</p>
            </Flex>
          </Cell>
        ),
        cell: (row) => (
          <Cell>
            <p>{row.getValue?.().totalPoints}</p>
          </Cell>
        ),
      }),
    ];
  }, []);
  return (
    <Box>
      <p>LeaderBoard</p>
      <Table
        showHeader
        columns={columns}
        data={leaderBoardData}
        maxHeight={600}
      />
    </Box>
  );
};
export default function Airdrop() {
  return (
    <Trace page={InterfacePageName.LandingPage}>
      <UserBlock />
      <InviteBlock />
      <LeaderBoardBlock />
    </Trace>
  );
}
