import { NavLink } from "react-router-dom"

function App() {
  return (
    <>
      <header>
        <img className="logo" src="/images/logo.png" alt="" />
        <h1>Python</h1>
        <p>
          A programming language that lets you work quickly and integrate
          systems more effectively
        </p>

        <NavLink to={"learn"}>learn</NavLink>
      </header>
    </>
  )
}

export default App
