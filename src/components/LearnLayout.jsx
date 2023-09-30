import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react"
import { sideNav } from "../data.js"

function LearnLayout() {
  const [path, setPath] = useState(0)

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  return (
    <div className="grid-container">
      <aside className="side-nav">
        <nav>
          {sideNav.map(({ route, title }, i) => {
            return (
              <NavLink
                key={i}
                to={route}
                onClick={() => {
                  setPath(i)
                  scrollToTop()
                }}
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
      </main>
    </div>
  )
}

export default LearnLayout
