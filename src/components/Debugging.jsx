import { Helmet } from "react-helmet"
import { debugging } from "../../data"
import { NextPageBtn, LastPageBtn } from "./PageBtns"

function Debugging() {
  return (
    <>
      <Helmet>
        <title>Debugging</title>
      </Helmet>

      <header id="section-header">
        <h1>Debugging</h1>
      </header>

      <div className="section-content">
        {debugging.map(({ title, desc }, i) => {
          return (
            <div key={i}>
              <article>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>

              <hr />
            </div>
          )
        })}
      </div>

      <div className="page-btn-container">
        <LastPageBtn name={"Common Errors"} page={"/errors"} />
        <NextPageBtn name={"Python Libraries"} page={"/learn/libraries"} />
      </div>
    </>
  )
}

export default Debugging
