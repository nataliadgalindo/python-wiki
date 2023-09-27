import { Helmet } from "react-helmet"
import { basics } from "../../data"
import { NextPageBtn } from "./PageBtns"

function Basics() {
  return (
    <>
      <Helmet>
        <title>The Basics of Python</title>
      </Helmet>

      <header id="section-header">
        <h1>Python Basics</h1>
      </header>

      <div className="section-content">
        {basics.map(({ title, desc, types, funcs }, i) => {
          return (
            <div key={i}>
              <article>
                <header>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </header>

                {types && (
                  <ul>
                    {types.map((type, j) => (
                      <li key={j}>
                        {type.name}: {type.desc}
                      </li>
                    ))}
                  </ul>
                )}

                {funcs && (
                  <ul>
                    {funcs.map((func, j) => (
                      <li key={j}>
                        {func.name}(): {func.desc}
                      </li>
                    ))}
                  </ul>
                )}
              </article>

              <hr />
            </div>
          )
        })}
      </div>

      <div className="page-btn-container">
        <NextPageBtn name={"Development Environment"} page={"/learn/devenv"} />
      </div>
    </>
  )
}

export default Basics
