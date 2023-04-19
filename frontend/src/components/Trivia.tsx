import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Trivia() {
  const [loaded, setLoaded] = useState(false)
  const [answer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")
  const [category, setCategory] = useState("")
  const [dollars, setDollars] = useState(0)
  const [airDate, setAirDate] = useState("")
  const [hideAnswer, setHideAnswer] = useState(true)

  useEffect(() => {
    if (!loaded) {
      axios.get("http://jservice.io/api/random").then((res) => {
        setAnswer(res.data[0].answer)
        setQuestion(res.data[0].question)
        setCategory(res.data[0].category.title)
        setDollars(res.data[0].value)
        setAirDate(res.data[0].airdate)
        console.log("render")
      })
    }
    setLoaded(true)
  }, [loaded])

  function handleShowAnswer() {
    setHideAnswer(false)
  }

  function handleNewQuestion() {
    setHideAnswer(true)
    setLoaded(false)
  }

  return loaded ? (
    <>
      <p className="text-xs mb-2">
        Random trivia from the television show Jeaopardy. from&nbsp;
        <Link to="http://jservice.io/" target="_blank">
          http://jservice.io/
        </Link>
      </p>
      <b>Air Date:</b>
      <p>{new Date(airDate).toString().slice(0, 15)}</p>
      <b>Category:</b>
      <br />
      <p>{category}</p>
      <b>Question (${dollars}):</b>
      <br />
      <p>{question}</p>
      <p>
        {hideAnswer ? (
          <>
            <b>Answer:</b> &nbsp;
            <br />
            <button className="btn btn-blue" onClick={handleShowAnswer}>
              Show Answer
            </button>
          </>
        ) : (
          <>
            <b>Answer:</b> &nbsp;
            <span className="text-green-600">{answer}</span>
            <br />
            <button className="btn btn-blue" onClick={handleNewQuestion}>
              New Question
            </button>
          </>
        )}
      </p>
    </>
  ) : (
    <p>Loading</p>
  )
}

export { Trivia }
