import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>
        amembo <Badge>2005-2008</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/amembo_icon.png" alt="icon" />
      </Center>
      <P>
        P2P private file sharing tool with MSN Messenger integration for Windows
      </P>
      <P>
        基于Windows平台集成于MSN之上的P2P私有文件分享工具
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>高速传输文件，并且文件大小没有限制。</ListItem>
        <ListItem>可以在多台电脑间同时传输数据。</ListItem>
        <ListItem>
          开袋即食，无需复杂的设置。
        </ListItem>
        <ListItem>
          使用通用的协议，只需开放一个端口即可。
        </ListItem>
        <ListItem>
          可以进行会话聊天，也可以在会话窗口发送图片。
        </ListItem>
        <ListItem>
          共享文件功能，对方可以查看公开的文件夹中的内容。
        </ListItem>
        <ListItem>集成于MSN之上</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>平台</Meta>
          <span>Windows 2000/XP</span>
        </ListItem>
        <ListItem>
          <Meta>技术栈</Meta>
          <span>Delphi</span>
        </ListItem>
        <ListItem>
          <Meta>下载</Meta>
          <Link href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
            v0.5.15.123
          </Link>
        </ListItem>
        <ListItem>
          <Meta>最后更新于</Meta>
          <span>2008/03/23</span>
        </ListItem>
        <ListItem>
          <Meta>使用指南</Meta>
          <Link href="https://w.atwiki.jp/amembo/">https://w.atwiki.jp/amembo/</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      {/* <UnorderedList my={4}>
        <ListItem>
          <Link href="/">
            <Badge mr={2}>窓の杜</Badge>
            「MSN
            Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/amembo_01.gif" alt="amembo" />
        <WorkImage src="/images/works/amembo_02.gif" alt="amembo" />
      </SimpleGrid>
      <WorkImage src="/images/works/amembo_03.jpg" alt="amembo" />
      <WorkImage src="/images/works/amembo_04.jpg" alt="amembo" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
