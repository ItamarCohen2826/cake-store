import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// Importing bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
// import Map from './Map/Map';
import client from "../apolloclient";
import Register, { getServerSideProps } from './server-side';
import { ApolloProvider } from '@apollo/client';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterUser';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cake Store</title>
        <meta name='description' content='Cake Store' />
        <meta name='author' content='Itamar Cohen' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} text-3xl font-bold`}>
          Cake Store
        </h1>
        <p></p>
        <p className={styles.description}>
          We make delicious cakes!
        </p>
      {/* <Map></Map> */}
      {/* <ApolloProvider client={client}>
        <Register />
      </ApolloProvider> */}
      <ApolloProvider client={client}>
        <LoginPage />
        <RegisterPage />
      </ApolloProvider>
      </main>
    </div>
  )
}
