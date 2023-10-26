import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import useLearnPathStore from "../storage/learnPathStore"

function MainLayout() {
  const { setPath } = useLearnPathStore()

  return (
    <>
      <nav className="top-nav">
        <NavLink className="logo" to="/">
          <img src="/logo.png" alt="" />
        </NavLink>

        <div className="top-links">
          <NavLink
            to="learn"
            onClick={() => {
              setPath(0)
            }}
          >
            Learn
          </NavLink>
          <a href="https://docs.python.org/3/" target="_blank" rel="noreferrer">
            Docs
          </a>
          <a
            href="https://www.w3schools.com/python/python_intro.asp"
            target="_blank"
            rel="noreferrer"
          >
            W3Schools
          </a>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default MainLayout
