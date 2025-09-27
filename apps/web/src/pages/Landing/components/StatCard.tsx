import { motion } from "framer-motion";
import styled, { keyframes, useTheme } from "lib/styled-components";
import { parseToRgb } from "polished";
import { Flex, Text } from "ui/src";
import { opacify } from "ui/src/theme";
import { useCurrentLocale } from "uniswap/src/features/language/hooks";

const Mask = motion(styled.div`
  position: relative;
  display: flex;
  flex: 0;
  min-height: 52px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1024px) {
    min-height: 40px;
  }
  @media (max-width: 768px) {
    min-height: 32px;
  }
`);

const Char = motion(styled.div<{ color: string }>`
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Basel;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  color: ${({ color }) => color};
  line-height: 52px;
  @media (max-width: 1280px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 1050px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (max-width: 850px) {
    font-size: 28px;
    line-height: 28px;
  }
  @media (max-width: 396px) {
    font-size: 22px;
    line-height: 22px;
  }
`);

const Container = styled.div<{ isLeft?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  max-height: 230px;
  padding: 32px;
  border-radius: 20px;

  background: linear-gradient(180deg, #00c3a020 0%, #006e6a20 100%);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  overflow: visible;

  @media (max-width: 1024px) {
    padding: 24px;
  }

  .corner {
    position: absolute;

    background-color: #7fffd6;
    border-radius: 999px;
    box-shadow: 0 0 8px #008080;
    z-index: 2;
  }

  /* Right-side borders */
  .top-line.right {
    top: -12px;
    right: -20px;
    height: 4px;
    width: 120px;
  }
  .bottom-line.right {
    bottom: -12px;
    right: -20px;
    height: 4px;
    width: 120px;
  }
  .right-line-top {
    top: -12px;
    right: -20px;
    width: 4px;
    height: 150px;
  }
  .right-line-bottom {
    bottom: -12px;
    right: -20px;
    width: 4px;
    height: 150px;
  }

  /* Left-side borders */
  .top-line.left {
    top: -12px;
    left: -20px;
    height: 4px;
    width: 120px;
  }
  .bottom-line.left {
    bottom: -12px;
    left: -20px;
    height: 4px;
    width: 120px;
  }
  .left-line-top {
    top: -12px;
    left: -20px;
    width: 4px;
    height: 150px;
  }
  .left-line-bottom {
    bottom: -12px;
    left: -20px;
    width: 4px;
    height: 150px;
  }
`;

const Container2 = styled.div<{ live?: boolean }>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 20px;

  width: 100%;
  height: 100%;
  max-height: 230px;

  padding: 32px;

  background: linear-gradient(180deg, #00c3a020 0%, #006e6a20 100%);
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 24px;
  }
  @media (max-width: 768px) {
    height: 100px;
  }
`;
const SpriteContainer = motion(styled.div`
  pointer-events: none;
  diplay: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.neutral2};
`);

const pulsate = (color: string) => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${opacify(24, color)};
  }
  100% {
    box-shadow: 0 0 0 4px ${opacify(24, color)};
  }
`;
export const LiveIcon = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.success};
  animation-name: ${({ theme }) => pulsate(theme.success)};
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const Title = styled.h3<{ color: string }>`
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 535;
  line-height: 32px; /* 133.333% */
  color: ${({ color }) => color};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }
`;
type StatCardProps = {
  title: string;
  value: string;
  icon?: string;
  live?: boolean;
  prefix?: string;
  suffix?: string;
  delay?: number;
  inView?: boolean;
  style?: React.CSSProperties;
  isLeft?: boolean;
};

function rotateArray<T>(arr: T[], n: number) {
  return arr.slice(n, arr.length).concat(arr.slice(0, n));
}

const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const currency = ["¥", "£", "€", "$"];
const suffixes = [" ", "K", "M", "B", "T"];
const delineators = [",", "."];

export function StatCard(props: StatCardProps) {
  const theme = useTheme();

  return (
    <Container style={props.style} isLeft={props.isLeft}>
      {/* Conditionally Render Border */}
      {props.isLeft == true ? (
        <>
          <span className="corner top-line left" />
          <span className="corner bottom-line left" />
          <span className="corner left-line-top" />
          <span className="corner left-line-bottom" />
        </>
      ) : props.isLeft == false ? (
        <>
          <span className="corner top-line right" />
          <span className="corner bottom-line right" />
          <span className="corner right-line-top" />
          <span className="corner right-line-bottom" />
        </>
      ) : (
        <></>
      )}
      {props.icon && (
        <img src={props.icon} alt={props.title} width={100} height={100} />
      )}
      <Flex row alignItems="center" gap="$gap4">
        <Title color={theme.neutral1}>{props.title}</Title>
      </Flex>
      <Text
        fontSize={16}
        fontWeight={500}
        color={theme.neutral2}
        allowFontScaling={false}
      >
        {props.value}
      </Text>
    </Container>
  );
}
export function StatCard2(props: StatCardProps) {
  const theme = useTheme();

  return (
    <Container2 style={props.style}>
      {props.icon && (
        <img src={props.icon} alt={props.title} width={100} height={100} />
      )}
      <Flex row alignItems="center" gap="$gap4">
        <Title color={theme.neutral1}>{props.title}</Title>
      </Flex>
      <Text
        fontSize={16}
        fontWeight={500}
        color={theme.neutral2}
        allowFontScaling={false}
      >
        {props.value}
      </Text>
    </Container2>
  );
}

function StringInterpolationWithMotion({
  value,
  delay,
  inView,
  live,
}: Omit<StatCardProps, "title">) {
  const chars = value.split("");
  const theme = useTheme();
  const locale = useCurrentLocale();

  // For Arabic locales, use simple Text component instead of animated sprites
  const isArabic = locale.startsWith("ar");
  if (isArabic) {
    return (
      <Text
        variant="heading2"
        color={live ? theme.success : theme.neutral1}
        allowFontScaling={false}
      >
        {value}
      </Text>
    );
  }

  return (
    <Mask
      initial="initial"
      animate={inView ? "animate" : "initial"}
      transition={{ staggerChildren: 0.025, delayChildren: delay }}
    >
      {chars.map((char: string, index: number) => {
        // select charset based on char
        const charset = numeric.includes(char)
          ? numeric
          : delineators.includes(char)
          ? delineators
          : currency.includes(char)
          ? currency
          : suffixes;

        return (
          <NumberSprite
            char={char}
            key={index}
            charset={charset}
            color={live ? theme.success : theme.neutral1}
          />
        );
      })}
    </Mask>
  );
}

function NumberSprite({
  char,
  charset,
  color,
}: {
  char: string;
  charset: string[];
  color: string;
}) {
  const height = 60;

  // rotate array so that the char is at the top
  const chars = rotateArray(charset, charset.indexOf(char));

  const idx = chars.indexOf(char);

  const variants = {
    initial: {
      y: idx + 3 * -height,
    },
    animate: {
      y: idx * -height,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <SpriteContainer variants={variants}>
      {chars.map((char, index) => {
        const charVariants = {
          initial: {
            opacity: 0.25,
          },
          animate: {
            opacity: idx === index ? 1 : 0,
            transition: {
              opacity: {
                duration: 0.5,
              },
              duration: 1,
              type: "spring",
            },
          },
        };

        return (
          <Char variants={charVariants} key={index} color={color}>
            {char}
          </Char>
        );
      })}
    </SpriteContainer>
  );
}
