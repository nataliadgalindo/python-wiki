import { libraries } from "../../data"
import NextPageBtn from "./PageBtns"
import LastPageBtn from "./PageBtns"

function Libraries() {
  return (
    <>
      <header>
        <h1>Libraries</h1>
        <p>
          Python libraries are collections of pre-written code that provide
          useful functionality to Python programmers. They are like toolkits
          that extend Pythons capabilities and save you from having to write
          everything from scratch.
        </p>
      </header>

      <h2>Simple Examples</h2>

      <div>
        {libraries.map(({ name, desc }, i) => {
          return (
            <article key={i}>
              <header>
                <h3>{name}</h3>
                <p>
                  The {name} {desc}
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

export default Libraries
