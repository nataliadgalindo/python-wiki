import { errors } from "../../data"
import { NextPageBtn, LastPageBtn } from "./PageBtns"

function Errors() {
  return (
    <>
      <header id="section-header">
        <h1>Common Errors</h1>
      </header>

      <div className="section-content">
        {errors.map(({ err, desc }, i) => {
          return (
            <>
              <article key={i}>
                <header>
                  <h2>{err} Error</h2>
                  <p>
                    {err} {desc}
                  </p>
                </header>
              </article>
              <hr />
            </>
          )
        })}
      </div>

      <div className="page-btn-container">
        <NextPageBtn name={"Debugging"} page={"/learn/debugging"} />
        <LastPageBtn name={"Development Environment"} page={"/learn/devenv"} />
      </div>
    </>
  )
}

export default Errors
