import { NavLink } from "react-router-dom"

export function NextPageBtn({ name, page }) {
  return (
    <NavLink to={page} className="next-page-btn page-btn">
      <div>
        <p>NEXT</p>
        <span>{name}</span>
      </div>
      {/* arrow icon */}
    </NavLink>
  )
}

export function LastPageBtn({ name, page }) {
  return (
    <NavLink to={page} className="last-page-btn page-btn">
      <div>
        <p>PREVIOUS</p>
        <span>{name}</span>
      </div>
      {/* arrow icon */}
    </NavLink>
  )
}
