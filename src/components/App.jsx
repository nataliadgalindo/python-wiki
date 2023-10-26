import React from "react"
import { Helmet } from "react-helmet"
import { NavLink } from "react-router-dom"

function App() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Python Wiki</title>
      </Helmet>

      <header className="home-header">
        <img className="logo" src="/logo.png" alt="" />
        <h1>Python Wiki</h1>
        <p>
          A guide to progressing at Python, everything you need to know all in
          one place
        </p>

        <NavLink to={"learn"} className="main-btn">
          Learn Python
        </NavLink>
      </header>
    </div>
  )
}

export default App
