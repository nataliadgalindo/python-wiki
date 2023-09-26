import { libraries } from "../../data"

function Libraries() {
  return (
    <>
      <header>
        <h1>Libraries</h1>
        <p>
          Python libraries are collections of pre-written code that provide
          useful functionality to Python programmers. They are like toolkits
          that extend Pythons capabilities and save you from having to write
          everything from scratch.
        </p>
      </header>

      <h2>Simple Examples</h2>

      <div>
        {libraries.map(({ name, desc }, i) => {
          return (
            <article key={i}>
              <header>
                <h3>{name}</h3>
                <p>
                  The {name} {desc}
                </p>
              </header>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default Libraries
