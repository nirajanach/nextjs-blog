import Head from "next/head";
import Image from "next/image";
import styles from  "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";


const name = 'Nirajan Acharya';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children,home  }) {
  return (
    <div className={styles.container}>
      {/* {children} */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add the CSS link for the "Josefin Sans" font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta
          name="desciption"
          content="Learn how to buiild a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={96}
              width={96}
              alt="Profile-Image"
            />
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherits}>
                {name}
              </Link>
            </h2>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherits}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
    </div>
  );
}