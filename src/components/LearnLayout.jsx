import { NavLink, Outlet } from "react-router-dom"

function LearnLayout() {
  return (
    <div className="grid-container">
      <aside>
        <nav className="side-nav">
          {/* -342px */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/learn">The Basics</NavLink>
          <NavLink to="devenv">Development Environment</NavLink>
          <NavLink to="errors">Common Errors</NavLink>
          <NavLink to="debugging">Debugging</NavLink>
          <NavLink to="libraries">Python Libraries</NavLink>
          <NavLink to="styles">Programming Styles</NavLink>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default LearnLayout
