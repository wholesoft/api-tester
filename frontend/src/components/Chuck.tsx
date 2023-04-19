import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Chuck() {
  const [joke, setJoke] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
        setJoke(res.data.value)
      })
    }
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <p className="text-xs mb-2">
        Random Chuck Norris jokes from{" "}
        <Link to="https://api.chucknorris.io/" target="_blank">
          https://api.chucknorris.io/
        </Link>
      </p>
      <p className="text-lg">
        <span className="italic">{joke}</span>
      </p>
      <button className="btn btn-blue" onClick={() => setLoaded(false)}>
        Next Joke
      </button>
    </>
  )
}

export { Chuck }
