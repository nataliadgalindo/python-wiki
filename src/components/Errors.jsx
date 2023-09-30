import { Helmet } from "react-helmet"
import { errors } from "../data"
import { NextPageBtn, LastPageBtn } from "./PageBtns"

function Errors() {
  return (
    <>
      <Helmet>
        <title>Common Errors</title>
      </Helmet>

      <header id="section-header">
        <h1>Common Errors</h1>
      </header>

      <div className="section-content">
        {errors.map(({ err, desc }, i) => {
          return (
            <div key={i}>
              <article>
                <header>
                  <h2>{err} Error</h2>
                  <p>
                    {err} {desc}
                  </p>
                </header>
              </article>
              <hr />
            </div>
          )
        })}
      </div>

      <div className="page-btn-container">
        <LastPageBtn name={"Development Environment"} page={"/learn/devenv"} />
        <NextPageBtn name={"Debugging"} page={"/learn/debugging"} />
      </div>
    </>
  )
}

export default Errors
