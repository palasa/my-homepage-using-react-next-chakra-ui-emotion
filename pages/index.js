import {
  Container,
  Box,
  Heading,
  Link,
  Image,
  useColorModeValue,
  Button,
  // SimpleGrid,
  Icon,
  List,
  ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import { SiSinaweibo } from "react-icons/si";
// import { GridItem } from "../components/grid-item";
// import thumbYouTube from "../public/images/links/youtube.png";
// import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
// import theme from "../theme/index"

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in China!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Parasa Xu
            </Heading>
            <p>Digital Craftzman ( Artist / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whitelAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/parasa.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Parasa is a freelance and a full-stack developer based in Shanghai
            with a passion for building digital services/stuff he wants. He has
            a knack for all things launching products, from planning and
            designing all the way to solving real-life problems with code. When
            offline, he loves hanging out with his camera.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1984</BioYear>
            Born in Shanghai (上海), China.
          </BioSection>
          <BioSection>
            <BioYear>2008</BioYear>
            Completed the Master&apos;s Program in the Graduate School of
            Electrical/Electronic at Tongji Univercity
            (同济大学电信学院电子与信息工程系通信工程专业)
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Worked at BiliBili (哔哩哔哩弹幕网)
          </BioSection>
          <BioSection>
            <BioYear>2018 to present</BioYear>
            Works as a freelance
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music,{" "}
            <Link href="/" target="_blank">
              Travelling
            </Link>
            , Cooking, Machine Learning
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/palasa" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @parasa
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/blue_deep_blue/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @parasa
                </Button>
              </Link>
            </ListItem>
            {/* <ListItem>
              <Link href="https://twitter.com/parasa22877422" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @parasa
                </Button>
              </Link>
            </ListItem> */}
            {/* <ListItem>
              <Link href="https://www.youtube.com/channel/UCIOsDGRCg25-4PlQnmGYabg" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoYoutube} />}
                >
                  @parasa
                </Button>
              </Link>
            </ListItem> */}
            <ListItem>
              <Link href="https://weibo.com/u/2001242941" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={SiSinaweibo} />}
                >
                  @parasa
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="My Life"
              thumbnail={thumbYouTube}
            >
              My YouTube channel
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid> */}
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
