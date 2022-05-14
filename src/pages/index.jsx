/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head"
import styles from "src/styles/Home.module.css"
import { Header } from "src/components/Header"
import { Main } from "src/components/Main"
import { Footer } from "src/components/Footer"
import { useCallback } from "react/cjs/react.production.min"

export default function Home() {
  const foo = 1

  const handleClick = useCallback((e) => {
    console.log(e.target.href)
    e.preventDefault()
    alert(foo)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      <a href="/about" onClick={handleClick}>
        a
      </a>
      <Main page="index" />

      <Footer />
    </div>
  )
}