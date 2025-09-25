import { ColumnCenter } from "components/deprecated/Column";
import { useCurrency } from "hooks/Tokens";
import { useScroll } from "hooks/useScroll";
import { Hover, RiseIn, RiseInText } from "pages/Landing/components/animations";
import { TokenCloud } from "pages/Landing/components/TokenCloud";
import { Swap } from "pages/Swap";
import { Fragment, useCallback, useMemo } from "react";
import { ChevronDown } from "react-feather";
import { Trans, useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { serializeSwapStateToURLParameters } from "state/swap/hooks";
import { Button, Flex, Text, useMedia } from "ui/src";
import { INTERFACE_NAV_HEIGHT } from "ui/src/theme";
import { useEnabledChains } from "uniswap/src/features/chains/hooks/useEnabledChains";
import { SwapRedirectFn } from "uniswap/src/features/transactions/components/TransactionModal/TransactionModalContext";
import ValuePropCard from "../components/cards/ValuePropCard";
import { CardContents } from "../components/cards/CardContents";

interface HeroProps {
  scrollToRef: () => void;
  transition?: boolean;
}

export function Hero({ scrollToRef, transition }: HeroProps) {
  const media = useMedia();
  const { height: scrollPosition } = useScroll({ enabled: !media.sm });
  const { defaultChainId } = useEnabledChains();
  const initialInputCurrency = useCurrency({
    address: "ETH",
    chainId: defaultChainId,
  });
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { translateY, opacityY } = useMemo(
    () => ({
      translateY: !media.sm ? -scrollPosition / 7 : 0,
      opacityY: !media.sm ? 1 - scrollPosition / 1000 : 1,
    }),
    [media.sm, scrollPosition]
  );

  const swapRedirectCallback = useCallback(
    ({
      inputCurrency,
      outputCurrency,
      typedValue,
      independentField,
      chainId,
    }: Parameters<SwapRedirectFn>[0]) => {
      navigate(
        `/swap${serializeSwapStateToURLParameters({
          inputCurrency,
          outputCurrency,
          typedValue,
          independentField,
          chainId,
        })}`
      );
    },
    [navigate]
  );

  const renderRiseInText = useMemo(() => {
    return t("hero.swap.title")
      .split(/(<br\/>)|\s+/)
      .filter(Boolean) // splits the string by spaces but also captures "<br/>" as a separate element in the array
      .map((word, index) => {
        if (word === "<br/>") {
          return <br key={`${index}-${word}-br`} />;
        } else {
          return (
            <Fragment key={`${index}-${word}`}>
              <RiseInText delay={index * 0.1}>{word}</RiseInText>{" "}
            </Fragment>
          );
        }
      });
  }, [t]);

  return (
    <Flex
      position="relative"
      justifyContent="center"
      y={translateY}
      opacity={opacityY}
      minWidth="100%"
      minHeight="90vh"
      height="min-content"
      pt={INTERFACE_NAV_HEIGHT}
      pointerEvents="none"
    >
      {/* {!media.sm && <TokenCloud />} */}

      <Flex
        alignSelf="center"
        maxWidth="85vw"
        pointerEvents="none"
        pt={48}
        gap="$gap20"
        transform={`translate(0px, ${translateY}px)`}
        opacity={opacityY}
        $lg={{ pt: 24 }}
        $sm={{ pt: 8 }}
        $platform-web={{
          transition: transition
            ? "shrinkAndFade 1s ease-in-out forwards"
            : undefined,
        }}
      >
        <Flex maxWidth={920} alignItems="center" pointerEvents="none">
          <Text
            variant="heading1"
            fontSize={64}
            lineHeight={76}
            textAlign="center"
            fontWeight="$book"
            $md={{ fontSize: 52 }}
            $sm={{ variant: "heading2", fontSize: 36 }}
            $short={{ variant: "heading2", fontSize: 36 }}
          >
            {renderRiseInText}
          </Text>
        </Flex>
        <RiseIn delay={0.3}>
          <Text
            variant="body1"
            textAlign="center"
            maxWidth={620}
            color="$neutral2"
            $short={{ variant: "body2" }}
          >
            <Trans i18nKey="hero.subtitle" />
          </Text>
        </RiseIn>

        <RiseIn delay={0.4}>
          <Flex
            pointerEvents="auto"
            p="$padding8"
            borderRadius="$rounded24"
            alignItems="center"
            justifyContent="center"
            gap="$gap20"
            // backgroundColor="$surface1"
            enterStyle={{ opacity: 0 }}
          >
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
                Launch DEX
              </Button>
            </Link>

            <img src="/images/secure.png" width={180} />
            <Text variant="body4">Security Audited by Packshield</Text>
          </Flex>
        </RiseIn>
      </Flex>

      <Flex
        alignSelf="center"
        flexDirection="row"
        pointerEvents="none"
        pt={48}
        gap={50}
        // transform={`translate(0px, ${translateY}px)`}
        opacity={opacityY}
        $lg={{ pt: 24 }}
        $sm={{ pt: 8 }}
        $platform-web={{
          transition: transition
            ? "shrinkAndFade 1s ease-in-out forwards"
            : undefined,
        }}
      >
        <ValuePropCard
          backgroundColor="#00000020"
          width={400}
          subtitle={"Total Value Locked (TVL)"}
          bodyText={"$42.7M+"}
          alignTextToBottom
        >
          <CardContents pr="$padding16">
            <img
              src="/images/graph1.png"
              width="35%"
              height="100%"
              style={{ objectFit: "contain" }}
              alt={"Total Value Locked (TVL)"}
            />
          </CardContents>
        </ValuePropCard>

        <ValuePropCard
          backgroundColor="#00000020"
          width={400}
          subtitle={"24h Trading Volume"}
          bodyText={"$7.9M+"}
          alignTextToBottom
        >
          <CardContents pr="$padding16">
            <img
              src="/images/graph2.png"
              width="35%"
              height="100%"
              style={{ objectFit: "contain" }}
              alt={"24h Trading Volume"}
            />
          </CardContents>
        </ValuePropCard>
      </Flex>
    </Flex>
  );
}
