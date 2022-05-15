import Head from "next/head"
import classes from "src/styles/Home.module.css"
import { Header } from "src/components/Header"
import { Main } from "src/components/Main"
import { Footer } from "src/components/Footer"
import { useCounter } from "src/hooks/useCounter"
import { useInputArray } from "src/hooks/useInputArray"
import { useBgLightBlue } from "src/hooks/useBgLightBlue"

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter()
  const { text, array, handleChange, handleAdd } = useInputArray()
  useBgLightBlue()

  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      {isShow ? <h1>{count}</h1> : null}
      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <button onClick={handleAdd}>追加</button>
      <Main page="about" />

      <Footer />
    </div>
  )
}
