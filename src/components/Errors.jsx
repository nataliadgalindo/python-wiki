import { errors } from "../../data"
import NextPageBtn from "./PageBtns"
import LastPageBtn from "./PageBtns"

function Errors() {
  return (
    <>
      <header>
        <h1>Common Errors</h1>
      </header>

      <div>
        {errors.map(({ err, desc }, i) => {
          return (
            <article key={i}>
              <header>
                <h2>{err} Error</h2>
                <p>
                  {err} {desc}
                </p>
              </header>
              <hr />
            </article>
          )
        })}
      </div>

      <div className="page-btn-container">
        <NextPageBtn name={"Libraries"} page={"/learn/libraries"} />
        <LastPageBtn name={"Libraries"} page={"/learn/libraries"} />
      </div>
    </>
  )
}
export default Errors
