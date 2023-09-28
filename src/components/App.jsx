import { Helmet } from "react-helmet"
import { NavLink } from "react-router-dom"

function App() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Python Wiki</title>
      </Helmet>

      <header className="home-header">
        <img className="logo" src="/logo.png" alt="" />
        <h1>Python</h1>
        <p>
          A programming language that lets you work quickly and integrate
          systems more effectively
        </p>

        <NavLink to={"learn"} className="main-btn">
          Learn Python
        </NavLink>
      </header>
    </div>
  )
}

export default App
