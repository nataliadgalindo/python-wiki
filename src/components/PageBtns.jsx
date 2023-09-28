import { NavLink } from "react-router-dom"

function scrollToTop() {
  window.scrollTo(0, 0)
}

export function NextPageBtn({ name, page }) {
  return (
    <NavLink to={page} onClick={scrollToTop} className="next-page-btn page-btn">
      <div>
        <p>NEXT</p>
        <span>{name}</span>
      </div>

      <img src="/assets/images/arrow-right.svg" alt="" />
    </NavLink>
  )
}

export function LastPageBtn({ name, page }) {
  return (
    <NavLink to={page} onClick={scrollToTop} className="last-page-btn page-btn">
      <img src="/assets/images/arrow-left.svg" alt="" />

      <div>
        <p>PREVIOUS</p>
        <span>{name}</span>
      </div>
    </NavLink>
  )
}
