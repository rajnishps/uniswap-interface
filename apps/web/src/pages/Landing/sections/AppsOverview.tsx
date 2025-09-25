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

      <img
        style={{ position: "absolute", top: 20, left: -20 }}
        src="/images/drop1.png"
        alt=""
        width={32}
      />
      <img
        style={{ position: "absolute", top: -50, right: -50 }}
        src="/images/drop2.png"
        alt=""
        width={60}
      />
      <img
        style={{ position: "absolute", bottom: -50, left: -100 }}
        src="/images/drop3.png"
        alt=""
        width={66}
      />
      <img
        style={{ position: "absolute", bottom: -50, right: -50 }}
        src="/images/drop1.png"
        alt=""
        width={40}
      />
    </Flex>
  );
}
