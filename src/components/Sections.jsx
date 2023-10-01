export function SubSection({ children, title, desc }) {
  return (
    <>
      <article className="subsection">
        <header className="subsection-header">
          <h2>{title}</h2>
          {desc}
        </header>

        <div className="subsection-content">{children}</div>
      </article>
      <hr />
    </>
  )
}

export function SSubSection({ children, title, desc }) {
  return (
    <article className="sub-subsection">
      {/* <hr /> */}
      <header className="sub-subsection-header">
        <h3>{title}</h3>
        {desc}
      </header>

      <div className="sub-subsection-content">{children}</div>
    </article>
  )
}
