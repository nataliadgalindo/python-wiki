import { NavLink, Outlet } from "react-router-dom"

function LearnLayout() {
  return (
    <div className="grid-container">
      <aside>
        <nav className="side-nav">
          {/* -342px */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/learn">Basics</NavLink>
          <NavLink to="debugging">Debugging</NavLink>
          <NavLink to="devenv">DevEnv</NavLink>
          <NavLink to="errors">Errors</NavLink>
          <NavLink to="libraries">Libraries</NavLink>
          <NavLink to="styles">Styles</NavLink>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default LearnLayout
