import { NavLink, Outlet } from "react-router-dom"

function LearnLayout() {
  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  return (
    <div className="grid-container">
      <aside>
        <nav className="side-nav">
          <NavLink to="/learn" onClick={scrollToTop}>
            The Basics
          </NavLink>

          <NavLink to="devenv" onClick={scrollToTop}>
            Development Environment
          </NavLink>

          <NavLink to="errors" onClick={scrollToTop}>
            Common Errors
          </NavLink>

          <NavLink to="debugging" onClick={scrollToTop}>
            Debugging
          </NavLink>

          <NavLink to="libraries" onClick={scrollToTop}>
            Python Libraries
          </NavLink>

          <NavLink to="styles" onClick={scrollToTop}>
            Programming Styles
          </NavLink>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default LearnLayout
