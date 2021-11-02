import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
// jsk rules
//return single elements
//css
import './index.css'
import { books } from './books'
import SpecificBook from './Book'
import { greeting } from './testing/testing.js'
function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <SpecificBook key={book.id} book={book} />
      })}
    </section>
  )
}
ReactDom.render(<BookList />, document.getElementById('root'))
