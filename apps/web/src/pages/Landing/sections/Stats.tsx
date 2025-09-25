import { StatCard } from "pages/Landing/components/StatCard";
import { useInView } from "pages/Landing/sections/useInView";
import { parseToRgb } from "polished";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "theme/components/Links";
import { Flex, styled, Text, useSporeColors } from "ui/src";
import { RightArrow } from "ui/src/components/icons/RightArrow";

const Container = styled(Flex, {
  width: "100%",
  maxWidth: 1360,
  alignItems: "center",
  p: 40,

  $lg: {
    p: 48,
  },

  $sm: {
    p: 24,
  },
});

const SectionLayout = styled(Flex, {
  width: "100%",
  maxWidth: 1280,
});

const GridArea = styled(Flex, {
  className: "grid-area",

  "$platform-web": {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gridColumnGap: "12px",
    gridRowGap: "12px",
  },

  $xs: {
    height: 320,
  },

  $xxs: {
    "$platform-web": {
      gridColumnGap: "8px",
      gridRowGap: "8px",
    },
  },
});

const LearnMoreButton = styled(Flex, {
  p: 12,
  px: 16,
  borderRadius: 24,
  backgroundColor: "$surface2",
  alignSelf: "flex-start",
});

function GetStarted() {
  const { t } = useTranslation();

  return (
    <LearnMoreButton href="/explore">
      <ExternalLink href="/explore" style={{ stroke: "unset" }}>
        <Flex row gap="$gap8" alignItems="center">
          <Text variant="buttonLabel1">{t("landing.getStarted")}</Text>
          <RightArrow size="$icon.24" color="$neutral1" />
        </Flex>
      </ExternalLink>
    </LearnMoreButton>
  );
}

export function Stats() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const colors = useSporeColors();
  const { red, green, blue } = parseToRgb(colors.neutral2.val);

  return (
    <Container
      background="radial-gradient(
            circle at center top,
            #01130f 0%,    
            #01130f 20%,  
            #01130f50 50%,  
            #01504200 70%,   
            #b6fcd500 100%   
          )"
    >
      <SectionLayout ref={ref}>
        <Flex
          justifyContent="center"
          mx="auto"
          gap="$gap24"
          maxWidth="80%"
          $lg={{ flexDirection: "column", gap: "$gap32" }}
        >
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
            <Text variant="heading1" $md={{ variant: "heading2" }}>
              {t("landing.trusted")}
            </Text>
            <Flex gap="$spacing24">
              <Text textAlign="center" fontSize={20} lineHeight={24}>
                {t("landing.protocolDescription")}
              </Text>
              {/* <GetStarted /> */}
            </Flex>
          </Flex>
          <Flex gap="$gap12" maxWidth="100%">
            <Cards inView={inView} />
          </Flex>
        </Flex>
      </SectionLayout>
    </Container>
  );
}

const LeftTop = styled(Flex, {
  "$platform-web": {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 3,
  },
  $md: {
    gridColumnStart: 1,
    gridColumnEnd: 5,
    gridRowStart: 1,
    gridRowEnd: 2,
  },
});

const RightTop = styled(Flex, {
  "$platform-web": {
    gridColumnStart: 3,
    gridColumnEnd: 5,
    gridRowStart: 1,
    gridRowEnd: 3,
  },
  $md: {
    gridColumnStart: 1,
    gridColumnEnd: 5,
    gridRowStart: 2,
    gridRowEnd: 3,
  },
});

const LeftBottom = styled(Flex, {
  "$platform-web": {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 3,
    gridRowEnd: 5,
  },
  $md: {
    gridColumnStart: 1,
    gridColumnEnd: 5,
    gridRowStart: 3,
    gridRowEnd: 4,
  },
});

const RightBottom = styled(Flex, {
  "$platform-web": {
    gridColumnStart: 3,
    gridColumnEnd: 5,
    gridRowStart: 3,
    gridRowEnd: 5,
  },
  $md: {
    gridColumnStart: 1,
    gridColumnEnd: 5,
    gridRowStart: 4,
    gridRowEnd: 5,
  },
});

function Cards({ inView }: { inView: boolean }) {
  const { t } = useTranslation();
  // const { convertFiatAmountFormatted, formatNumberOrString } =
  //   useLocalizationContext();
  // const { totalVolume } = use24hProtocolVolume();
  // const { totalTVL } = useDailyTVLWithChange();
  // // Currently hardcoded, BE task [DAT-1435] to make this data available
  // const allTimeVolume = 3.3 * 10 ** 12;
  // const allTimeSwappers = 119 * 10 ** 6;

  return (
    <GridArea>
      <LeftTop>
        <StatCard
          icon={"/images/icon2.png"}
          title={"Seamless Swaps"}
          value={"Swap any token with lightning-fast execution."}
          delay={0}
          inView={inView}
        />
      </LeftTop>
      <RightTop>
        <StatCard
          icon={"/images/icon1.png"}
          title={"Deep Liquidity Pools"}
          value={"Earn yield by providing liquidity."}
          delay={0.2}
          inView={inView}
        />
      </RightTop>
      <LeftBottom>
        <StatCard
          icon={"/images/icon4.png"}
          title={"Transparent Analytics"}
          value={"Stay informed with real-time data."}
          delay={0.4}
          inView={inView}
        />
      </LeftBottom>
      <RightBottom>
        <StatCard
          icon={"/images/icon3.png"}
          title={"Community Driven"}
          value={"Powered by you, owned by no one."}
          live
          delay={0.6}
          inView={inView}
        />
      </RightBottom>
    </GridArea>
  );
}
