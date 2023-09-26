import { basics } from "../../data"

function Basics() {
  return (
    <>
      <header>
        <h1>Python Basics</h1>
      </header>

      <div>
        {basics.map(({ title, desc, types, funcs }, i) => {
          return (
            <>
              <article key={i}>
                <header>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </header>

                {types && (
                  <ul>
                    {types.map((type, i) => (
                      <li key={i}>
                        {type.name}: {type.desc}
                      </li>
                    ))}
                  </ul>
                )}

                {funcs && (
                  <ul>
                    {funcs.map((func, i) => (
                      <li key={i}>
                        {func.name}(): {func.desc}
                      </li>
                    ))}
                  </ul>
                )}
              </article>

              <hr />
            </>
          )
        })}
      </div>
    </>
  )
}

export default Basics
