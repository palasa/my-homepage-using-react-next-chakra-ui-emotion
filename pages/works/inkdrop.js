import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>Inkdrop<Badge>2016</Badge></Title>
        <P>
          A Markdown note-taking app with 100+ plugins, cross-platform and encypted data sync support.  
          The life-time revenue is more than $200k.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app">
              https://www/inkdrop.app/ <ExternalLinkIcon mx={2}/>
            </Link>            
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href='https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820'>
              How I&apos;ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo 
              <ExternalLinkIcon mx={2}/>
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop"/>
        <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop"/>
      </Container>
    </Layout>
  )
}

export default Work