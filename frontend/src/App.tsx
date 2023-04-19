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

// https://cataas.com/cat/says/nigger?size=50&color=red
// https://cataas.com/doc.html

// https://meowfacts.herokuapp.com/

// https://github.com/movebank/movebank-api-doc/blob/master/movebank-api.md#introduction

// https://dev.to/biplov/15-fun-apis-for-your-next-project-5053

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <div className="p-5">
        <List
          items={["coffee", "tacos", "code"]}
          render={(item: string) => (
            <span className="text-yellow-500">{item}</span>
          )}
        />
        <hr />
        <Counter setCount={setCount}>Count is {count}</Counter>
        <hr />
        <Heading title={"Howdy"} />
        <hr />
        <Section>Hey</Section>
        <hr />
        <div className="text-4xl flex justify-center">API Tester</div>
        <p className="py-3">
          A simple page experimenting with various public API's found on the
          internet.
        </p>
        <hr className="my-4" />
        <Nasa />
        <hr className="my-4" />
        <Chuck />
        <hr className="my-4" />
        <Advice />
        <hr className="my-4" />
        <Ye />
        <hr className="my-4" />
        <Trivia />
      </div>
    </>
  )
}

export default App
