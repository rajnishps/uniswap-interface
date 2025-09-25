import { AppsOverview } from "pages/Landing/sections/AppsOverview";
import { Footer } from "pages/Landing/sections/Footer";
import { NewsletterEtc } from "pages/Landing/sections/NewsletterEtc";
import { Stats } from "pages/Landing/sections/Stats";
import { forwardRef } from "react";
import { Flex } from "ui/src";

const Fold = forwardRef<HTMLDivElement>(function Fold(_props, scrollAnchor) {
  return (
    <Flex
      gap={120}
      $sm={{ gap: 80 }}
      position="relative"
      alignItems="center"
      width="100%"
      zIndex={1}
      maxWidth="100vw"
      ref={scrollAnchor}
      background="radial-gradient(
        circle at center top,
        #b6fcd5 0%,    
       
        #015042 7.5%,  
        #013e33 20%,  
        #01241d 70%,   
        #01130f 100%   
      )"
    >
      <Stats />
      <AppsOverview />
      <NewsletterEtc />
      <Footer />
    </Flex>
  );
});

export default Fold;
