import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

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
      <header className="sub-subsection-header">
        <h3>{title}</h3>
        {desc}
      </header>

      <div className="sub-subsection-content">{children}</div>
    </article>
  )
}

export function CodeBlock({ code }) {
  const customStyles = {
    backgroundColor: "rgb(28, 36, 48)",
    margin: "0",
    padding: "0",
  }

  return (
    <SyntaxHighlighter
      style={tomorrow}
      customStyle={customStyles}
      language="python"
    >
      {code}
    </SyntaxHighlighter>
  )
}
