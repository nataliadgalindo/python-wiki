import { errors } from "../../data"

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
    </>
  )
}
export default Errors
