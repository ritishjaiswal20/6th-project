import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
// jsk rules
//return single elements

function Greeting() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => {
  return (
    <img src='https://m.media-amazon.com/images/I/81xE--f8K3L._AC_UY327_FMwebp_QL65_.jpg' />
  )
}
const Title = () => <h1>this is maths book</h1>
const Author = () => <h2>By A dass</h2>
ReactDom.render(<Greeting />, document.getElementById('root'))
