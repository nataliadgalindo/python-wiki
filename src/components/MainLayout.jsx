import { NavLink, Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
      <nav className="top-nav">
        <NavLink className="logo" to="/">
          <img src="/logo.png" alt="" />
        </NavLink>
        <NavLink to="learn">Learn</NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default MainLayout
