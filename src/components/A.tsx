import React, { createContext, useState } from "react"
import B from "./B"

export const XValueContext = createContext()

const A = () => {
  const [xValue, setXValue] = useState(10)

  return (
    <div className="bg-red-600  p-5">
      <h1 className="text-white font-bold">A</h1>
      <h1 className="text-white font-bold"> X = {xValue}</h1>

      <XValueContext.Provider value={{ data: xValue, xValue, setXValue }}>
        <B />
      </XValueContext.Provider>
    </div>
  )
}

export default A
