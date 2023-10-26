import React from "react"
import { Helmet } from "react-helmet"
import { SubSection, CodeBlock } from "./Sections"

function Errors() {
  return (
    <>
      <Helmet>
        <title>Common Errors</title>
      </Helmet>

      <>
        <header id="section-header">
          <h1>Common Errors</h1>
          <p>
            In this section, we&apos;re going to take a closer look at some of
            the most common Python errors that programmers encounter.
          </p>
        </header>
        <hr />
      </>

      <div className="section-content">
        <SubSection
          title={`Syntax Error`}
          desc={
            <p>
              Syntax errors occur when you write code that doesnt follow the
              rules of the programming language. These errors prevent your code
              from running at all.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock
                code={'print("Hello, World" # Missing closing parenthesis'}
              />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={`Runtime Error`}
          desc={
            <p>
              Runtime errors occur when your code runs but encounters a problem
              while executing, causing it to crash.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"num1 = 10"} />
              <CodeBlock code={"num2 = 0"} />
              <CodeBlock code={"result = num1 / num2 # Division by zero"} />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={`Index Error`}
          desc={
            <p>
              Index errors occur when you try to access an element in a data
              structure (like a list or string) using an index that is out of
              bounds.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"my_list = [1, 2, 3]"} />
              <CodeBlock
                code={"element = my_list[5] # Index 5 is out of range"}
              />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={`Name Error`}
          desc={
            <p>
              Name errors happen when you try to use a variable or function that
              hasnt been defined or is out of scope.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"print(undefined_variable)"} />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={`Type Error`}
          desc={
            <p>
              Type errors occur when you try to perform operations on data of
              incompatible types.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"num1 = 10"} />
              <CodeBlock code={'text = "5"'} />
              <CodeBlock
                code={"result = num1 + text # Cannot add int and str"}
              />
            </div>
          </div>
        </SubSection>
      </div>
    </>
  )
}

export default Errors
