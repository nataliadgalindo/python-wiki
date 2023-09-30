import { NavLink, Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
      <nav className="top-nav">
        <NavLink className="logo" to="/">
          <img src="/logo.png" alt="" />
        </NavLink>

        <div className="top-links">
          <NavLink to="learn">Learn</NavLink>
          <a href="https://docs.python.org/3/" target="_blank">
            Docs
          </a>
          <a
            href="https://www.w3schools.com/python/python_intro.asp"
            target="_blank"
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
