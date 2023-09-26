import { debugging } from "../../data"

function Debugging() {
  return (
    <>
      <header>
        <h1>Debugging</h1>
      </header>

      <div>
        {debugging.map(({ title, desc }, i) => {
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
    </>
  )
}

export default Debugging
