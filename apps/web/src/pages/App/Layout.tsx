import styled from "lib/styled-components";
import { Body } from "pages/App/Body";
import { Header } from "pages/App/Header";
import { GRID_AREAS } from "pages/App/utils/shared";
import { Footer } from "pages/Landing/sections/Footer";
import { useLocation } from "react-router";
import { breakpoints } from "ui/src/theme";

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    to bottom left,
    #00110e 0%,
    #014238 30%,
    #011e19 70%,
    #00110e 100%
  );
  // grid container settings
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas: "${GRID_AREAS.HEADER}" "${GRID_AREAS.MAIN}" "${GRID_AREAS.MOBILE_BOTTOM_BAR}";
`;
const AppBody = styled.div`
  grid-area: ${GRID_AREAS.MAIN};
  width: 100vw;
  min-height: 100%;
  max-width: ${({ theme }) => `${theme.maxWidth}px`};
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  flex: 1;
  position: relative;
  margin: auto;

  @media screen and (max-width: ${breakpoints.md}px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export function AppLayout() {
  const { pathname } = useLocation();

  return (
    <AppContainer>
      <Header />
      <AppBody>
        <Body />
        {pathname !== "/" && <Footer />}
      </AppBody>
    </AppContainer>
  );
}
