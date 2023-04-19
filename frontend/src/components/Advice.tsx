import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Advice() {
  const [advice, setAdvice] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      axios.get("https://api.adviceslip.com/advice").then((res) => {
        setAdvice(res.data.slip.advice)
      })
    }
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <p className="text-xs mb-2">
        Random advice from{" "}
        <Link to="https://api.adviceslip.com/" target="_blank">
          https://api.adviceslip.com/
        </Link>
      </p>
      <p className="text-lg">
        <span className="italic">{advice}</span>
      </p>
      <button className="btn btn-blue" onClick={() => setLoaded(false)}>
        Next Advice
      </button>
    </>
  )
}

export { Advice }
