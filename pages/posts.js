import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";

import thumbFishWorkflow from "../public/images/contents/youtube-fish-workflow.jpg";
import thumbMyDeskSetup from "../public/images/contents/youtube-my-desk-setup.jpg";
import thumb500PaidUsers from "../public/images/contents/blog-500-paid-users.jpg";
import thumbFinancialGoal from "../public/images/contents/blog-financial-goal.png";
import thumbHowToPriceYourself from "../public/images/contents/blog-how-to-price-yourself.jpg";
import thumb50xFaster from "../public/images/contents/youtube-50x-faster.jpg";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="/"
          />

          <GridItem
            title="My desk setup (Late 2020)"
            thumbnail={thumbMyDeskSetup}
            href="/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"
            thumbnail={thumb500PaidUsers}
            href="/"
          />
          <GridItem
            title="I stopped setting a financial goal for my SaaS"
            thumbnail={thumbFinancialGoal}
            href="/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="/"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);
export default Posts;
