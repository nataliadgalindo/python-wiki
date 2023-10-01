import { NavLink, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { sideNav } from "../data.js"

function LearnLayout() {
  const [path, setPath] = useState(0)
  // const [nextPath, setNextPath] = useState(sideNav[path + 1])
  // const [lastPath, setLastPath] = useState(sideNav[path - 1])

  useEffect(() => {
    scrollToTop()
  }, [path])

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  function lastPage() {
    setPath(path - 1)
  }

  function nextPage() {
    setPath(path + 1)
  }

  return (
    <div className="grid-container">
      <aside className="side-nav">
        <nav>
          {sideNav.map(({ route, title }, i) => {
            return (
              <button key={i} onClick={() => setPath(i)}>
                <NavLink
                  to={route}
                  className={path === i ? "highlight-link" : ""}
                >
                  {title}
                  <img src="/assets/images/arrow-right.svg" alt="" />
                </NavLink>
              </button>
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
