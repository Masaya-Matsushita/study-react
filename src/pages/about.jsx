import Head from "next/head"
import classes from "src/styles/Home.module.css"
import { Header } from "src/components/Header"
import { Main } from "src/components/Main"
import { Footer } from "src/components/Footer"

const About = (props) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <input type="text" value={props.text} onChange={props.handleChange} />
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <button onClick={props.handleAdd}>追加</button>
      <Main page="about" />

      <Footer />
    </div>
  )
}

export default About
