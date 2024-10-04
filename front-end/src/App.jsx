import { useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState("<h2>Content will appear here</>h2")

  // these functions need to fetch from your backend using the right endpoint and setContent with the response data
  function fetchText(){

  }

  function fetchImage(){

  }

  function fetchTextAndImage(){

  }


  return (
    <>
      <h1>Click buttons to see content</h1>
      <button onClick={fetchText}>Click me for text</button>
      <button onClick={fetchImage}>Click me for an image</button>
      <button onClick={fetchTextAndImage}>Click me for text and an image in a flexbox</button>
      <div>{content}</div>
    </>
  )
}

export default App
