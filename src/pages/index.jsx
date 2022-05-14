import Head from "next/head"
import styles from "src/styles/Home.module.css"
import { Header } from "src/components/Header"
import { Main } from "src/components/Main"
import { Footer } from "src/components/Footer"
import { useEffect, useState, useCallback } from "react"

export default function Home() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState("")
  const [isShow, setIsShow] = useState(true)

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1)
    }
  }, [count])

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow)
  }, [])

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください")
      return
    }
    setText(e.target.value.trim())
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />

      <Footer />
    </div>
  )
}
