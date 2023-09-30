import { Helmet } from "react-helmet"
import { libraries } from "../data"
import { NextPageBtn, LastPageBtn } from "./PageBtns"

function Libraries() {
  return (
    <>
      <Helmet>
        <title>Python Libraries</title>
      </Helmet>

      <header id="section-header">
        <h1>Python Libraries</h1>
        <p>
          Python libraries are collections of pre-written code that provide
          useful functionality to Python programmers. They are like toolkits
          that extend Pythons capabilities and save you from having to write
          everything from scratch.
        </p>
      </header>

      <div className="section-content">
        {libraries.map(({ name, desc }, i) => {
          return (
            <div key={i}>
              <article>
                <header>
                  <h3>{name}</h3>
                  <p>
                    The {name} {desc}
                  </p>
                </header>
              </article>
              <hr />
            </div>
          )
        })}
      </div>

      <div className="page-btn-container">
        <LastPageBtn name={"Debugging"} page={"/learn/debugging"} />
        <NextPageBtn name={"Programming Styles"} page={"/learn/styles"} />
      </div>
    </>
  )
}

export default Libraries
