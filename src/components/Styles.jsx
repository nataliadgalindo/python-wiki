import { Helmet } from "react-helmet"
import { styles } from "../data"
import { SubSection, SSubSection } from "./Sections"

function Styles() {
  return (
    <>
      <Helmet>
        <title>Programming Styles and Paradigms</title>
      </Helmet>

      <header id="section-header">
        <h1>Programming Styles and Paradigms</h1>
      </header>

      <div className="section-content">
        {styles.map(({ name, desc }, i) => {
          return (
            <SubSection key={i} title={name} desc={<p>{desc}</p>}></SubSection>
            // <div key={i}>
            //   <article>
            //     <header>
            //       <h2>{name}</h2>
            //       <p>{desc}</p>
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

export default Styles
