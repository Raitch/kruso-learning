import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import UserForm from '../components/UserForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kruso</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <UserForm /> 
      </main>
    </>
  )
}
