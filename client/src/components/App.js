import React from "react"
import { useExample } from "../hooks"

export default props => {
  const { foo, get } = useExample()

  return (
    <div>
      <h1>Hello World {foo}</h1>
      <button onClick={e => get()}>GET</button>
    </div>
  )
}
