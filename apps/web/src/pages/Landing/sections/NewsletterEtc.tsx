import React from "react";
import { useTranslation } from "react-i18next";
import { ClickableTamaguiStyle } from "theme/components/styles";
import { Anchor, Flex, styled, Text } from "ui/src";
import { ArrowUpRight } from "ui/src/components/icons/ArrowUpRight";
import { StatCard } from "../components/StatCard";
import { useIsMobile } from "hooks/screenSize/useIsMobile";

const SectionLayout = styled(Flex, {
  width: "100%",
  maxWidth: 1360,
  alignItems: "center",
  gap: 40,
  p: 40,

  background:
    "radial-gradient( circle at center center, #01130f80 0%,     #01130f80 20%,   #01130f50 50%,    #01504200 70%,     #b6fcd500 100%     )",

  $lg: {
    p: 48,
  },

  $sm: {
    p: 24,
  },
});

const RowContent = React.memo(function RowContent({
  icon,
  title,
  description,
  showArrow,
}: {
  icon: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
  showArrow: boolean;
}) {
  return (
    <Flex
      row
      py="$gap32"
      borderTopWidth={1}
      borderTopColor="$surface3"
      alignItems="center"
      width="100%"
      $lg={{ alignItems: "flex-start" }}
    >
      <Flex
        row
        gap="$gap24"
        alignItems="center"
        flex={1}
        $lg={{ alignItems: "flex-start", gap: "$gap16" }}
      >
        <Flex flexShrink={0}>{icon}</Flex>
        <Flex
          row
          alignItems="center"
          flex={1}
          gap="$gap16"
          $lg={{ flexDirection: "column", alignItems: "flex-start" }}
        >
          <Text
            variant="heading2"
            minWidth={220}
            $xl={{ minWidth: 180 }}
            $lg={{ flexBasis: 0 }}
            $md={{ variant: "heading3", lineHeight: 36 }}
          >
            {title}
          </Text>
          <Text
            variant="heading3"
            $lg={{ ml: -48 }}
            $md={{ fontSize: 18, lineHeight: 24 }}
          >
            {description}
          </Text>
        </Flex>
      </Flex>
      {showArrow && (
        <Flex flexShrink={0}>
          <ArrowUpRight size="$icon.36" color="$neutral1" />
        </Flex>
      )}
    </Flex>
  );
});

RowContent.displayName = "RowContent";

function UniverseRow({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string | React.ReactNode;
  href?: string;
}) {
  const showArrow = Boolean(href);

  if (href) {
    return (
      <Anchor
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        textDecorationLine="none"
        {...ClickableTamaguiStyle}
      >
        <RowContent
          icon={icon}
          title={title}
          description={description}
          showArrow={showArrow}
        />
      </Anchor>
    );
  }

  return (
    <RowContent
      icon={icon}
      title={title}
      description={description}
      showArrow={showArrow}
    />
  );
}

const SocialLink = styled(Anchor, {
  fontSize: "inherit",
  lineHeight: "inherit",
  fontWeight: "inherit",
  color: "$neutral2",
  target: "_blank",
  rel: "noopener noreferrer",
  ...ClickableTamaguiStyle,
  style: {
    textDecoration: "none",
  },
});

export function NewsletterEtc() {
  const { t } = useTranslation();

  return (
    <SectionLayout>
      <Flex
        justifyContent="center"
        alignItems="center"
        maxWidth="50%"
        $md={{
          maxWidth: "90%",
        }}
        mx="auto"
        flex={0}
        gap="$gap32"
      >
        <Text variant="heading1" width="100%" $md={{ variant: "heading2" }}>
          {"Roadmap"}
        </Text>
      </Flex>

      <Cards inView />
    </SectionLayout>
  );
}
const GridArea = styled(Flex, {
  className: "grid-area",

  "$platform-web": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "48px",
    position: "relative",
    padding: "48px 0",
  },
});

const RoadmapLine = styled(Flex, {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "3px",
  background: "linear-gradient(to bottom, #00C3A0, #006e6a)",
  borderRadius: "9999px",
  zIndex: 0,
  $md: {
    left: "95%",
  },
});

type CardData = {
  title: string;
  value: string;
  delay?: number;
  live?: boolean;
};

const cards: CardData[] = [
  {
    title: "Website & Platform Creation",
    value:
      "Develop the HyperOrbit website and set up core infrastructure for onboarding, UI/UX, and community information. Deploy secure Uniswap-inspired smart contracts for swaps and liquidity pools.",
  },
  {
    title: "Security Audit & Testing",
    value:
      "Complete third-party security audits of all smart contract code and run extensive beta/mainnet simulations.",
  },
  {
    title: " Mainnet Launch",
    value:
      "Go live with HyperOrbit on public mainnet—opening protocol access for trading, liquidity, and new user onboarding.",
  },
  {
    title: "Airdrop Points Campaign",
    value:
      "Start the airdrop campaign where users can swap and provide liquidity to earn leaderboard points and exclusive rewards.",
  },
  {
    title: "Growth, Marketing & Partnerships",
    value:
      "Launch advertising campaigns and partner with other ecosystem projects to attract liquidity and offer best-in-class swap rates at minimal fees.",
  },
  {
    title: "NFT Utility & Airdrop Distribution",
    value:
      "Release HyperOrbit NFTs that grant special privileges within the protocol. This will be followed by a community airdrop distributed based on points, NFT ownership, and ongoing engagement.",
  },
];

export default function Cards({ inView }: { inView: boolean }) {
  const isMobile = useIsMobile();
  return (
    <GridArea>
      <RoadmapLine />
      {cards.map((card, i) => {
        const side = i % 2 === 0 ? "left" : "right";
        return (
          <div
            key={i}
            style={{
              width: "80%",
              display: "flex",

              justifyContent: isMobile
                ? "flex-start"
                : side === "left"
                ? "flex-start"
                : "flex-end",
            }}
          >
            <StatCard
              title={card.title}
              value={card.value}
              delay={i * 0.2}
              live={card.live}
              inView={inView}
              style={{
                maxWidth: isMobile ? "100%" : "45%",
                transform: inView ? "translateY(0)" : "translateY(200px)",
                opacity: inView ? 1 : 0,
                transition: `all 0.6s ease ${i * 0.15}s`,
                zIndex: 1,
              }}
            />
          </div>
        );
      })}
    </GridArea>
  );
}
