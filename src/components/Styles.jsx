import { styles } from "../../data"
import LastPageBtn from "./PageBtns"

function Styles() {
  return (
    <>
      <header>
        <h1>Programming Styles and Paradigms</h1>
      </header>

      <div>
        {styles.map(({ name, desc }, i) => {
          return (
            <article key={i}>
              <header>
                <h2>{name}</h2>
                <p>{desc}</p>
              </header>
              <hr />
            </article>
          )
        })}
      </div>

      <div className="page-btn-container">
        <LastPageBtn name={"Libraries"} page={"/learn/libraries"} />
      </div>
    </>
  )
}

export default Styles
