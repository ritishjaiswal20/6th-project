import React from 'react'

const SpecificBook = (props) => {
  const { img, title, author } = props.book
  const clickhandler = (e) => {
    alert('hello world')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <button type='button' onClick={clickhandler}>
        Refrence example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  )
}

export default SpecificBook
