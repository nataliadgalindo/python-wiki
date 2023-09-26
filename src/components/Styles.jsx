import { styles } from "../../data"

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
            </article>
          )
        })}
      </div>
    </>
  )
}

export default Styles
