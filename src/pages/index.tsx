import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Avatar from '@site/src/components/Avatar/avatar';
import styles from './index.module.css';
import VerticalScrollButton from '@site/src/components/VerticalScrollButton/VerticalScrollButton';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <br />
      <br />

      <VerticalScrollButton />
      <Avatar />
      <br />
      <h1 className='text--center'>Elcio Augusto Dalosto</h1>
      <main className='text--center padding--sm'>
        <div className={styles.container}>
          <div className={styles.menuContainer}>
            <ul className={styles.cleanList}>
              <a href="/docs/technology">
                <button className={`${styles.button} ${styles.buttonTecnologiaAnimation}`}>Hardflip</button>
              </a>
              <a href="/docs/skateboarding">
                <button className={`${styles.button} ${styles.buttonSkateboardingAnimation}`}>Flip</button>
              </a>
              <a href="/docs/skateboarding">
                <button className={`${styles.button} ${styles.buttontreFlipAnimation}`}>360 Flip</button>
              </a>
              <a href="/docs/yoga">
                <button className={`${styles.button} ${styles.buttonYogaAnimation}`}>YOGA</button>
              </a>
              {/* <a href="/docs/timeline">
                <button className={styles.button}>TIMELINE</button>
              </a>
              <a href="/blog">
                <button className={styles.button}>BLOG</button>
              </a>
              <a href="/docs/contact">
                <button className={styles.button}>CONTACT</button>
              </a> */}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
