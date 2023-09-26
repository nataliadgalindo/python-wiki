import { debugging } from "../../data"
import NextPageBtn from "./PageBtns"
import LastPageBtn from "./PageBtns"

function Debugging() {
  return (
    <>
      <header>
        <h1>Debugging</h1>
      </header>

      <div>
        {debugging.map(({ title, desc }, i) => {
          return (
            <>
              <article key={i}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>

              <hr />
            </>
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

export default Debugging
