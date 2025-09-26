import { useIsMobile } from "hooks/screenSize/useIsMobile";
import { Flex } from "ui/src";

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
        {isMobile ? null : <img height={140} src="/images/btc.png" alt="" />}
      </div>
      <img height={240} src="/images/usdt-graph.png" alt="" />
      <img height={240} src="/images/hype-graph.png" alt="" />

      {isMobile ? (
        <Flex gap={16} flexDirection="row">
          <img height={140} src="/images/btc.png" alt="" />
          <img height={140} src="/images/eth.png" alt="" />
        </Flex>
      ) : (
        <img height={140} src="/images/eth.png" alt="" />
      )}
    </Flex>
  );
};

export default SwapElements;
