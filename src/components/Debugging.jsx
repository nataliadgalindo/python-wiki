import React from "react"
import { Helmet } from "react-helmet"
import { debugging } from "../data"
import { SubSection } from "./Sections"

function Debugging() {
  return (
    <>
      <Helmet>
        <title>Debugging</title>
      </Helmet>

      <>
        <header id="section-header">
          <h1>Debugging</h1>
          <p>
            Debugging is a critical skill that separates the novices from the
            experts. It&apos;s the art of finding and fixing errors, ensuring
            that your code runs smoothly and produces the desired results.
          </p>
        </header>
        <hr />
      </>

      <div className="section-content">
        {debugging.map(({ title, desc, img, reverse }, i) => {
          return (
            <SubSection key={i} title={title}>
              <div
                className={`img-subtitle ${reverse && "reverse-img-subtitle"}`}
              >
                <p>{desc}</p>
                <img src={img} alt={title} />
              </div>
            </SubSection>

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
