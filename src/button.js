import React, { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)
  const Pluralize = (count, like, suffix = "s") =>
    `${count} ${like}${count !== 1 ? suffix : ""}`

  function updateCount(e) {
    e.preventDefault()
    setCount(count + 1)
  }

  return <button onClick={updateCount}>{Pluralize(count, "like")}</button>
}

export default Counter
