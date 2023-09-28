import { Helmet } from "react-helmet"
import { ide, compiler } from "../../data"
import { NextPageBtn, LastPageBtn } from "./PageBtns"
import { SubSection } from "./Basics"

function DevEnv() {
  return (
    <>
      <Helmet>
        <title>Development Environment</title>
      </Helmet>

      <header id="section-header">
        <h1>Development Environment</h1>
      </header>

      <SubSection></SubSection>

      <div className="subsection devenv">
        <header className="subsection-header">
          <h2>IDE</h2>
          <p>
            An Integrated Development Environment, commonly referred to as an
            IDE is a more specialized and all-in-one software application that
            provides a comprehensive environment for software development. Its
            designed to streamline and simplify the development process by
            integrating various tools into a single user interface.
          </p>
        </header>

        <div className="section-content">
          {ide.map(({ title, desc, img }, i) => {
            return (
              <div key={i}>
                <article className="devenv-article">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
                <hr />
              </div>
            )
          })}
        </div>
      </div>

      <div className="subsection">
        <header className="subsection-header">
          <h2>Compilers</h2>
          <p>
            A compiler is a specialized software tool that translates high-level
            programming code (written by humans) into low-level machine code
            (understood by computers). Its a crucial component of the software
            development process.
          </p>
        </header>

        <div className="section-content">
          {compiler.map(({ step, desc }, i) => {
            return (
              <div key={i}>
                <article className="compiler-article">
                  <h3>{step}</h3>
                  <p>{desc}</p>
                </article>

                <hr />
              </div>
            )
          })}
        </div>
      </div>

      <div className="page-btn-container">
        <LastPageBtn name={"The Basics"} page={"/learn"} />
        <NextPageBtn name={"Common Errors"} page={"/learn/errors"} />
      </div>
    </>
  )
}

export default DevEnv
