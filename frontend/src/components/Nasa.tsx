import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Nasa() {
  const [loaded, setLoaded] = useState(false)
  const [nasa, setNasa] = useState({
    image: "",
    hd_image: "",
    title: "",
    explanation: "",
    date: "",
  })

  useEffect(() => {
    if (!loaded) {
      axios.get("http://localhost:8001/nasa").then((res) => {
        setNasa({
          image: res.data.url,
          hd_image: res.data.hdurl,
          title: res.data.title,
          explanation: res.data.explanation,
          date: res.data.date,
        })
      })
    }
    setLoaded(true)
  }, [loaded])

  return (
    <>
      <p className="text-xs mb-2">
        Astronomy Picture of the Day from{" "}
        <Link to="https://api.nasa.gov/" target="_blank">
          https://api.nasa.gov/
        </Link>
      </p>
      <p className="text-lg">
        <span className="italic">{nasa.title}</span>
        <a target="_blank" href={nasa.hd_image}>
          <img src={nasa.image} />
        </a>
      </p>
      <p>{nasa.explanation}</p>
    </>
  )
}

export { Nasa }
