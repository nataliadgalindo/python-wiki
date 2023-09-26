import { ide, compiler } from "../../data"

function DevEnv() {
  return (
    <>
      <header>
        <h1>Development Environment</h1>
      </header>

      <div>
        <header>
          <h2>IDE</h2>
          <p>
            An Integrated Development Environment, commonly referred to as an
            IDE is a more specialized and all-in-one software application that
            provides a comprehensive environment for software development. Its
            designed to streamline and simplify the development process by
            integrating various tools into a single user interface.
          </p>
        </header>

        <h2>Key Features</h2>

        <div>
          {ide.map(({ title, desc }, i) => {
            return (
              <>
                <article key={i}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>

                <hr />
              </>
            )
          })}
        </div>
      </div>

      <div>
        <header>
          <h2>Compilers</h2>
          <p>
            A compiler is a specialized software tool that translates high-level
            programming code (written by humans) into low-level machine code
            (understood by computers). Its a crucial component of the software
            development process.
          </p>
        </header>

        <h2>How It Works</h2>

        <div>
          {compiler.map(({ step, desc }, i) => {
            return (
              <>
                <article key={i}>
                  <h3>{step}</h3>
                  <p>{desc}</p>
                </article>

                <hr />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default DevEnv
