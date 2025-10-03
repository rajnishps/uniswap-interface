import { Wiggle } from "components/animations/Wiggle";
import { MenuItem } from "components/NavBar/CompanyMenu/Content";
import { MenuLink } from "components/NavBar/CompanyMenu/MenuDropdown";
import {
  Discord,
  Github,
  Telegram,
  Twitter,
  Docs,
} from "pages/Landing/components/Icons";
import { Anchor, Flex, Separator, styled, Text } from "ui/src";
import { iconSizes } from "ui/src/theme";

const SOCIAL_ICONS_SIZE = `${iconSizes.icon32}px`;

const SocialIcon = styled(Wiggle, {
  cursor: "pointer",
  flex: 0,
});

const PolicyLink = styled(Text, {
  variant: "body3",
  animation: "100ms",
  color: "$neutral2",
  cursor: "pointer",
  hoverStyle: { color: "$neutral1" },
});

export function Socials({ iconSize }: { iconSize?: string }) {
  return (
    <Flex row gap="$spacing24" maxHeight={iconSize} alignItems="flex-start">
      <SocialIcon iconColor="#3fb3e0">
        <Anchor href="https://docs.hyperorbit.exchange" target="_blank">
          <Docs size={iconSize} fill="inherit" />
        </Anchor>
      </SocialIcon>
      <SocialIcon iconColor="#3fb3e0">
        <Anchor href="https://t.me/HyperOrbit_Exc" target="_blank">
          <Telegram size={iconSize} fill="inherit" />
        </Anchor>
      </SocialIcon>
      <SocialIcon iconColor="#00C32B">
        <Anchor href="https://github.com/HyperOrbitExc" target="_blank">
          <Github size={iconSize} fill="inherit" />
        </Anchor>
      </SocialIcon>
      <SocialIcon iconColor="#20BAFF">
        <Anchor href="https://x.com/HyperOrbitExc" target="_blank">
          <Twitter size={iconSize} fill="inherit" />
        </Anchor>
      </SocialIcon>
      <SocialIcon iconColor="#5F51FF">
        <Anchor href="https://discord.gg/f5QWXenp" target="_blank">
          <Discord size={iconSize} fill="inherit" />
        </Anchor>
      </SocialIcon>
    </Flex>
  );
}

function FooterSection({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <Flex
      width={130}
      $md={{ width: "100%" }}
      flexGrow={0}
      flexShrink={1}
      flexBasis="auto"
      gap={8}
    >
      <Text variant="subheading2">{title}</Text>
      <Flex gap={5}>
        {items.map((item, index) => (
          <MenuLink
            key={`footer_${title}_${index}}`}
            label={item.label}
            href={item.href}
            internal={item.internal}
            overflow={item.overflow}
            textVariant="subheading2"
          />
        ))}
      </Flex>
    </Flex>
  );
}

export function Footer() {
  // const { t } = useTranslation();
  // const { toggleModal: togglePrivacyPolicy } = useModalState(
  //   ModalName.PrivacyPolicy
  // );
  // const sectionContent = useMenuContent();
  // const productsSection = sectionContent[MenuSectionTitle.Products];
  // const protocolSection = sectionContent[MenuSectionTitle.Protocol];
  // const companySection = sectionContent[MenuSectionTitle.Company];
  // const needHelpSection = sectionContent[MenuSectionTitle.NeedHelp];
  // const brandAssets = {
  //   label: t("common.brandAssets"),
  //   href: "https://github.com/Uniswap/brand-assets/raw/main/Uniswap%20Brand%20Assets.zip",
  //   internal: false,
  // };
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      maxWidth="100vw"
      width="100%"
      gap="$spacing24"
      mt="$spacing60"
      alignItems="center"
      justifyContent="center"
      pt="$none"
      px="$spacing48"
      pb={40}
      $lg={{ px: "$spacing40" }}
    >
      <Text variant="heading2">Connect with us</Text>
      <Flex
        row
        $md={{ flexDirection: "column" }}
        justifyContent="space-between"
        gap="$spacing32"
      >
        <Flex height="100%" gap="$spacing60">
          <Flex $md={{ display: "none" }}>
            <Socials iconSize={SOCIAL_ICONS_SIZE} />
          </Flex>
        </Flex>
        {/* <Flex
          row
          $md={{ flexDirection: "column" }}
          height="100%"
          gap="$spacing16"
        >
          <Flex
            row
            gap="$spacing16"
            justifyContent="space-between"
            $md={{ width: "auto" }}
          >
            {productsSection && (
              <FooterSection
                title={productsSection.title}
                items={productsSection.items}
              />
            )}
            {protocolSection && (
              <FooterSection
                title={protocolSection.title}
                items={protocolSection.items}
              />
            )}
          </Flex>
          <Flex row gap="$spacing16" $md={{ width: "auto" }}>
            {companySection && (
              <FooterSection
                title={companySection.title}
                items={[...companySection.items, brandAssets]}
              />
            )}
            {needHelpSection && (
              <FooterSection
                title={needHelpSection.title}
                items={needHelpSection.items}
              />
            )}
          </Flex>
        </Flex> */}
        <Flex $md={{ display: "flex" }} display="none">
          <Socials iconSize={SOCIAL_ICONS_SIZE} />
        </Flex>
      </Flex>
      <Separator />
      <Flex
        row
        alignItems="center"
        $md={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        width="100%"
        justifyContent="center"
      >
        <Text variant="body3">© {currentYear} - Hyperorbit</Text>
      </Flex>
    </Flex>
  );
}
