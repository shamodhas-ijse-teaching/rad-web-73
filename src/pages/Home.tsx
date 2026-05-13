import React, { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"

const Home = () => {
  const { user } = useAuth()
  console.log(user)

  // useEffect(() => {
  //   if (!user) {
  //     // redirect to home
  //   }
  // }, [])

  return (
    <div>
      <h1>Home page component</h1>
      <h2>{user?.email || ""}</h2>
      <p>{user?.email || ""}</p>
    </div>
  )
}

export default Home
