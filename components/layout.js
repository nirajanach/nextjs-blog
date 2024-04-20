import Head from "next/head";
import Image from "next/image";
import styles from  "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = 'Nirajan Acharya';
export const siteTitle = 'Portfolio';

export default function Layout({ children  }) {
  return (
    <div className={styles.container}>
      {/* {children} */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
         <>

          <div  className={styles.navButtonGroup}>               
                <button type="button" id="slideUpButton">Home</button>
                <button type="button" id="slideLeftButton">Contact</button>
                <button type="button" id="slideDownButton">About</button>
                <button type="button" id="slideRightButton">Skills</button>
                <button type="button" id="resetButton">Reset</button>
                <button type="button" id="playButton">Play</button>
                <button type="button" id="pauseButton">Pause</button>

            </div>

            {/* <div className={styles.introduction}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={96}
              width={96}
              alt="Profile-Image"
            />
           
            <div className={styles.nameAndPosition}>
            <h2 className={utilStyles.headingLg}>
            {name}
            </h2>
            <p className={utilStyles.subHeading}>Software Developer</p>
            </div>
            </div> */}
          </>    
      </header>
      <main>{children}</main>    
    </div>
  );
}