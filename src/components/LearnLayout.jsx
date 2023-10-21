import { NavLink, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { sideNav } from "../data.js"
import { useGlobalContext } from "../context.jsx"

function LearnLayout() {
  const { path, setPath } = useGlobalContext()
  const [showNav, setShowNav] = useState(false)

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
