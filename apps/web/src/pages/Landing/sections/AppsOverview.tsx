// import { DownloadWalletCard } from "pages/Landing/components/cards/DownloadWalletCard";
// import { LiquidityCard } from "pages/Landing/components/cards/LiquidityCard";
// import { TradingApiCard } from "pages/Landing/components/cards/TradingApiCard";
// import { UnichainCard } from "pages/Landing/components/cards/UnichainCard";
// import { UniswapXCard } from "pages/Landing/components/cards/UniswapXCard";
// import { WebappCard } from "pages/Landing/components/cards/WebappCard";
import { H2 } from "pages/Landing/components/Generics";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button, Flex } from "ui/src";
import { Text } from "ui/src";
import styled from "styled-components";

const Img1 = styled.img`
  position: absolute;
  top: 20px;
  left: -20px;
  width: 32px;
  @media (max-width: 768px) {
    left: 20px;
    top: -50px;
  }
`;

const Img2 = styled.img`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 60px;
  @media (max-width: 768px) {
    right: 20px;
    top: -80px;
  }
`;

const Img3 = styled.img`
  position: absolute;
  bottom: -50px;
  left: -100px;
  width: 66px;
  @media (max-width: 768px) {
    left: 20px;
    bottom: -100px;
  }
`;

const Img4 = styled.img`
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 40px;
  @media (max-width: 768px) {
    right: 20px;
  }
`;

export function AppsOverview() {
  const { t } = useTranslation();
  return (
    <Flex alignItems="center" px={40} $md={{ px: 48 }} $sm={{ px: 24 }}>
      <Flex maxWidth={1280} alignItems="center" gap={14} $md={{ gap: 14 }}>
        <H2 fontSize={42} textAlign="center">
          {t("landing.appsOverview")}
        </H2>
        <Text fontSize={18} textAlign="center">
          {"Earn points, climb the leaderboard, and unlock exclusive rewards."}
        </Text>
        <Link to="/swap">
          <Button
            backgroundImage="#000"
            hoverStyle={{
              backgroundImage: "#000",
            }}
            pressStyle={{
              backgroundImage: "#000",
            }}
            size="medium"
            emphasis="secondary"
            variant="default"
          >
            Join Airdrop
          </Button>
        </Link>
      </Flex>

      <Img1 src="/images/drop1.png" alt="" />
      <Img2 src="/images/drop2.png" alt="" />
      <Img3 src="/images/drop3.png" alt="" />
      <Img4 src="/images/drop1.png" alt="" />
    </Flex>
  );
}
