import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Ye() {
  const [quote, setQuote] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      axios.get("https://api.kanye.rest/").then((res) => {
        setQuote(res.data.quote)
      })
    }
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <p className="text-xs mb-2">
        Random Ye quotes from{" "}
        <Link to="https://api.kanye.rest/" target="_blank">
          https://api.kanye.rest/
        </Link>
      </p>
      <p className="text-lg">
        <span className="italic">{quote}</span>
      </p>
      <button className="btn btn-blue" onClick={() => setLoaded(false)}>
        Next Quote
      </button>
    </>
  )
}

export { Ye }
