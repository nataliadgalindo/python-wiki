import { Helmet } from "react-helmet"
import { ide, compiler } from "../data"
import { SubSection, SSubSection } from "./Sections"

function DevEnv() {
  return (
    <>
      <Helmet>
        <title>Development Environment</title>
      </Helmet>

      <>
        <header id="section-header">
          <h1>Development Environment</h1>
          <p>
            A development environment, often referred to as a "dev environment",
            is the digital workspace where programmers design, test, and improve
            software applications.
          </p>
        </header>
        <hr />
      </>

      <div className="section-content">
        <SubSection
          title={"IDE"}
          desc={
            <p>
              An Integrated Development Environment, commonly referred to as an
              IDE is a more specialized and all-in-one software application that
              provides a comprehensive environment for software development. Its
              designed to streamline and simplify the development process by
              integrating various tools into a single user interface.
            </p>
          }
        >
          <ul>
            {ide.map(({ title, desc }, i) => {
              return (
                <div key={i}>
                  <li>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </li>
                </div>
              )
            })}
          </ul>
        </SubSection>

        <SubSection
          title={"Compilers"}
          desc={
            <p>
              A compiler is a specialized software tool that translates
              high-level programming code (written by humans) into low-level
              machine code (understood by computers). Its a crucial component of
              the software development process.
            </p>
          }
        >
          <ol>
            {compiler.map(({ step, desc }, i) => {
              return (
                <li key={i}>
                  <h3>{step}</h3>
                  <p>{desc}</p>
                </li>
              )
            })}
          </ol>
        </SubSection>
      </div>
    </>
  )
}

export default DevEnv
