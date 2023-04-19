import { useState } from "react"
import { Link } from "react-router-dom"
import { Ye } from "./components/Ye"
import { Chuck } from "./components/Chuck"
import { Trivia } from "./components/Trivia"
import { Nasa } from "./components/Nasa"
import { Advice } from "./components/Advice"
import { Heading } from "./test/Heading"
import { Section } from "./test/Section"
import { Counter } from "./test/Counter"
import { List } from "./test/List"

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <div className="p-5">
        <div className="text-4xl flex justify-center">API Tester</div>
        <p className="py-3">
          A simple page experimenting with various public API's found on the
          internet.
        </p>
        <hr className="my-4" />
        <Chuck />
        <hr className="my-4" />
        <Advice />
        <hr className="my-4" />
        <Trivia />
        <hr className="my-4" />
        <Nasa />
      </div>
    </>
  )
}

export default App
