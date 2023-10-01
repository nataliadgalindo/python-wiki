import { Helmet } from "react-helmet"
import { errors } from "../data"
import { SubSection, SSubSection } from "./Sections"

function Errors() {
  return (
    <>
      <Helmet>
        <title>Common Errors</title>
      </Helmet>

      <>
        <header id="section-header">
          <h1>Common Errors</h1>
          <p>
            In this section, we're going to take a closer look at some of the
            most common Python errors that programmers encounter.
          </p>
        </header>
        <hr />
      </>

      <div className="section-content">
        {errors.map(({ err, desc }, i) => {
          return (
            <SubSection
              title={`${err} Error`}
              desc={
                <p>
                  {err} {desc}
                </p>
              }
            ></SubSection>
          )
        })}
      </div>
    </>
  )
}

export default Errors
