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
import Flower from "../components/flower";





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
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I am Mr. Nirajan Acharya. I am software developer with the domain
          in .NET family.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Link href="/flower">
        Go to Flower Page
      </Link>

      <Flower />
      <section>
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
      </section>
    </Layout>
  );
}




{/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
            </li>
          ))}
        </ul>
      </section> */}