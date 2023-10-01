import { Helmet } from "react-helmet"
import { libraries } from "../data"
import { SubSection, SSubSection } from "./Sections"

function Libraries() {
  return (
    <>
      <Helmet>
        <title>Python Libraries</title>
      </Helmet>

      <header id="section-header">
        <h1>Python Libraries</h1>
        <p>
          Libraries are collections of pre-written code that provide useful
          functionality to programmers. They are like toolkits that extend
          programming languages' capabilities and save you from having to write
          everything from scratch.
        </p>
      </header>

      <div className="section-content">
        {libraries.map(({ name, desc }, i) => {
          return (
            <SubSection
              key={i}
              title={name}
              desc={
                <p>
                  The {name} {desc}
                </p>
              }
            ></SubSection>
            // <div key={i}>
            //   <article>
            //     <header>
            //       <h3>{name}</h3>
            //       <p>
            //         The {name} {desc}
            //       </p>
            //     </header>
            //   </article>
            //   <hr />
            // </div>
          )
        })}
      </div>
    </>
  )
}

export default Libraries
