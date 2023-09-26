import { basics } from "../../data"
import { NextPageBtn } from "./PageBtns"

function Basics() {
  return (
    <>
      <header>
        <h1>Python Basics</h1>
      </header>

      <div>
        {basics.map(({ title, desc, types, funcs }, i) => {
          return (
            <>
              <article key={i}>
                <header>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </header>

                {types && (
                  <ul>
                    {types.map((type, i) => (
                      <li key={i}>
                        {type.name}: {type.desc}
                      </li>
                    ))}
                  </ul>
                )}

                {funcs && (
                  <ul>
                    {funcs.map((func, i) => (
                      <li key={i}>
                        {func.name}(): {func.desc}
                      </li>
                    ))}
                  </ul>
                )}
              </article>

              <hr />
            </>
          )
        })}
      </div>

      <div className="page-btn-container">
        <NextPageBtn name={"Libraries"} page={"/learn/libraries"} />
      </div>
    </>
  )
}

export default Basics
