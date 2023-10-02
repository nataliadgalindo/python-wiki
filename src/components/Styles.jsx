import { Helmet } from "react-helmet"
import { styles } from "../data"
import { SubSection } from "./Sections"

function Styles() {
  return (
    <>
      <Helmet>
        <title>Programming Styles and Paradigms</title>
      </Helmet>

      <header id="section-header">
        <h1>Programming Styles and Paradigms</h1>
        <p>
          Programming styles and paradigms serve as the guiding principles that
          define not only the structure of code but also the thought processes
          and problem-solving techniques employed during software development.
        </p>
      </header>

      <div className="section-content">
        {styles.map(({ name, desc }, i) => {
          return (
            <SubSection key={i} title={name} desc={<p>{desc}</p>}></SubSection>
          )
        })}
      </div>
    </>
  )
}

export default Styles
