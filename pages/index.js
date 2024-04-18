import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Flower from "../components/flower/backup/flowerKute-originFixedtest";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    
      {/* <Link href="/flower">
        Go to Flower Page
      </Link> */}

      <Flower />
      {/* Section from the tutorial */}
      {/* <section>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <List>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`} key={id}>
              <ListItem>
                <ListItemButton
                  style={{
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "3px",
                  }}
                  color="primary"
                  variant="outlined"
                >
                  <ListItemContent>
                    {title}
                    <br />
                    <small>
                      <Date dateString={date} />
                    </small>
                    <br />
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </section> */}
    </Layout>
  );
}


