import { Helmet } from "react-helmet"
import { debugging } from "../data"
import { SubSection, SSubSection } from "./Sections"

function Debugging() {
  return (
    <>
      <Helmet>
        <title>Debugging</title>
      </Helmet>

      <header id="section-header">
        <h1>Debugging</h1>
        <p>
          Debugging is a critical skill that separates the novices from the
          experts. It's the art of finding and fixing errors, ensuring that your
          code runs smoothly and produces the desired results.
        </p>
      </header>

      <div className="section-content">
        {debugging.map(({ title, desc }, i) => {
          return (
            <SubSection key={i} title={title} desc={<p>{desc}</p>}></SubSection>

            // <div key={i}>

            /* <article>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article> */

            // <hr />
            // </div>
          )
        })}
      </div>
    </>
  )
}

export default Debugging
