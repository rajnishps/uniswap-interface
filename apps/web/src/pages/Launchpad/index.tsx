import { useIsMobile } from "hooks/screenSize/useIsMobile";
import { Flex, Text } from "ui/src";
import { InterfacePageName } from "uniswap/src/features/telemetry/constants";
import Trace from "uniswap/src/features/telemetry/Trace";

export default function Launchpad() {
  const isMobile = useIsMobile();

  const fontSize = isMobile ? 20 : 24;
  const lineHeight = isMobile ? 28 : 32;
  return (
    <Trace page={InterfacePageName.LandingPage}>
      <Flex
        maxWidth={800}
        mt={100}
        gap={40}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize={fontSize} lineHeight={lineHeight} textAlign="center">
          Want to be an early private investor in HyperOrbit?
        </Text>
        <Text fontSize={fontSize} lineHeight={lineHeight} textAlign="center">
          Contact us directly via Telegram @OrbitNeo or Email us to explore
          exclusive investment opportunities at early stage. <br />
          Email:{" "}
          <a target="_blank" href="mailto:admin@hyperorbit.exchange">
            <Text
              fontSize={fontSize}
              lineHeight={lineHeight}
              textAlign="center"
            >
              admin@HyperOrbit.exchange
            </Text>
          </a>
        </Text>
        <Text fontSize={fontSize} lineHeight={lineHeight} textAlign="center">
          HyperOrbit Launchpad fuels innovation on HyperEVM, helping projects
          raise funds and build communities with a secure, simple, and fair
          token launch platform rewarding early supporters. For inquiries or
          partnership opportunities.
        </Text>
        <Text fontSize={fontSize} lineHeight={lineHeight} textAlign="center">
          Contact us via Telegram @OrbitNeo Or Email <br />
          at:{" "}
          <a target="_blank" href="mailto:admin@hyperorbit.exchange">
            <Text
              fontSize={fontSize}
              lineHeight={lineHeight}
              textAlign="center"
            >
              admin@HyperOrbit.exchange
            </Text>
          </a>
        </Text>
      </Flex>
    </Trace>
  );
}
