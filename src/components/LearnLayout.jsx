import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { sideNav } from "../data.js"
import useLearnPathStore from "../storage/learnPathStore"

function LearnLayout() {
  const { path, setPath, increment, decrement } = useLearnPathStore()
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    scrollToTop()
  }, [path])

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  function lastPage() {
    decrement()
  }

  function nextPage() {
    increment()
  }

  return (
    <div className="grid-container">
      <aside>
        <button
          className="hamburger"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <img src="/logo.png" alt="python wiki" />
        </button>
        <nav className={`side-nav ${showNav && "show-nav"}`}>
          {sideNav.map(({ route, title }, i) => {
            return (
              <NavLink
                key={i}
                onClick={() => setPath(i)}
                to={route}
                className={path === i ? "highlight-link" : ""}
              >
                {title}
                <img src="/assets/images/arrow-right.svg" alt="" />
              </NavLink>
            )
          })}
        </nav>
      </aside>

      <main>
        <Outlet />

        <footer className="page-btn-container">
          {path !== 0 && (
            <NavLink
              className="last-page-btn page-btn"
              onClick={lastPage}
              to={sideNav[path - 1].route}
            >
              <img src="/assets/images/arrow-left.svg" alt="" />

              <div>
                <p>PREVIOUS</p>
                <span>{sideNav[path - 1].title}</span>
              </div>
            </NavLink>
          )}

          {path !== 5 && (
            <NavLink
              className="next-page-btn page-btn"
              onClick={nextPage}
              to={sideNav[path + 1].route}
            >
              <div>
                <p>NEXT</p>
                <span>{sideNav[path + 1].title}</span>
              </div>

              <img src="/assets/images/arrow-right.svg" alt="" />
            </NavLink>
          )}
        </footer>
      </main>
    </div>
  )
}

export default LearnLayout
