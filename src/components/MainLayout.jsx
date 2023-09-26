import { NavLink, Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
      <nav className="top-nav">
        <NavLink to="/">
          <img className="logo" src="/images/logo.png" alt="" />
        </NavLink>
        <h1>top nav</h1>
        <NavLink to="learn">Learn</NavLink>
      </nav>

      <>
        <Outlet />
      </>
    </>
  )
}

export default MainLayout
