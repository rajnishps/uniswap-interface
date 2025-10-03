import { useIsMobile } from "hooks/screenSize/useIsMobile";
import styled, { keyframes } from "styled-components";
import { Flex } from "ui/src";

const spinAndZoom = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(720deg) ;
  }
  75% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.25);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Styled components for animated images
const AnimatedBtcImage = styled.img`
  height: 100px;
  animation: ${spinAndZoom} 2s ease-in-out infinite;
  filter: grayscale(100%);
  position: relative;
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const AnimatedEthImage = styled.img`
  height: 140px;
  animation: ${pulse} 1.5s ease-in-out infinite;
  filter: grayscale(100%);
  position: relative;
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const SwapElements = () => {
  const isMobile = useIsMobile();
  return (
    <Flex
      mt={isMobile ? 24 : 100}
      flexDirection={isMobile ? "column" : "row"}
      gap={isMobile ? 16 : "auto"}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <div>
        {isMobile ? null : <AnimatedBtcImage src="/images/btc.png" alt="" />}
      </div>
      <img height={240} src="/images/usdt-graph.png" alt="" />
      <img height={240} src="/images/hype-graph.png" alt="" />

      {isMobile ? (
        <Flex gap={16} mt={40} flexDirection="row">
          <AnimatedBtcImage src="/images/btc.png" alt="" />
          <AnimatedEthImage src="/images/eth.png" alt="" />
        </Flex>
      ) : (
        <AnimatedEthImage src="/images/eth.png" alt="" />
      )}
    </Flex>
  );
};

export default SwapElements;
