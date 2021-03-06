import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import testStyles from '../styles/Test.module.scss';
import { useState, useEffect } from 'react';

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TALK</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-192x192.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>人との話し方</h1>
        <ul>
          <li>ギアを意識する</li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
