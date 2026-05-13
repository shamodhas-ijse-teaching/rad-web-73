import React, { useContext } from "react"
import { XValueContext } from "./A"

const D = () => {
  const { data, xValue, setXValue } = useContext(XValueContext)

  return (
    <div className="bg-yellow-500  p-5">
      <h1 className="text-white font-bold">D</h1>
      <h1 className="text-white font-bold"> X = {xValue}</h1>
      <button
        onClick={() => {
          setXValue(xValue + 10)
        }}
      >
        Change
      </button>
    </div>
  )
}

export default D
