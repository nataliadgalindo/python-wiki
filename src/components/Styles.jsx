import { Helmet } from "react-helmet"
import { SubSection, CodeBlock } from "./Sections"

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
        <SubSection
          title={"Imperative Programming"}
          desc={
            <p>
              A style where you write code that explicitly describes the steps
              the computer should take to achieve a particular task. It focuses
              on how to perform actions.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"def sum_even_numbers(numbers):"} />
              <CodeBlock code={"  total = 0"} />
              <CodeBlock code={"  for num in numbers:"} />
              <CodeBlock code={"    if num % 2 == 0:"} />
              <CodeBlock code={"      total += num"} />
              <CodeBlock code={"  return total"} />
              <br />
              <CodeBlock code={"numbers = [1, 2, 3, 4, 5, 6]"} />
              <CodeBlock code={"result = sum_even_numbers(numbers)"} />
              <CodeBlock code={'print("Imperative result:", result)'} />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={"Procedural Programming"}
          desc={
            <p>
              A subset of imperative programming. It involves organizing code
              into reusable procedures or functions, which helps in code
              modularity and maintainability.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"def sum_even_numbers(numbers):"} />
              <CodeBlock code={"  total = 0"} />
              <CodeBlock code={"    for num in numbers:"} />
              <CodeBlock code={"      if num % 2 == 0:"} />
              <CodeBlock code={"      total += num"} />
              <CodeBlock code={"  return total"} />
              <br />
              <CodeBlock code={"def main():"} />
              <CodeBlock code={"  numbers = [1, 2, 3, 4, 5, 6]"} />
              <CodeBlock code={"  result = sum_even_numbers(numbers)"} />
              <CodeBlock code={'  print("Procedural result:", result)'} />
              <br />
              <CodeBlock code={"main()"} />
            </div>
          </div>
        </SubSection>
        <SubSection
          title={"Object-Oriented Programming"}
          desc={
            <p>
              (OOP) is a programming paradigm that focuses on modeling the real
              world using objects. Objects have attributes (data) and methods
              (functions) that operate on the data.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"class NumberList:"} />
              <CodeBlock code={"  def __init__(self, numbers):"} />
              <CodeBlock code={"  self.numbers = numbers"} />
              <br />
              <CodeBlock code={"def sum_even_numbers(self):"} />
              <CodeBlock code={"  total = 0"} />
              <CodeBlock code={"  for num in self.numbers:"} />
              <CodeBlock code={"    if num % 2 == 0:"} />
              <CodeBlock code={"    total += num"} />
              <CodeBlock code={"  return total"} />

              <br />
              <CodeBlock code={"numbers = [1, 2, 3, 4, 5, 6]"} />
              <CodeBlock code={"num_list = NumberList(numbers)"} />
              <CodeBlock code={"result = num_list.sum_even_numbers()"} />
              <CodeBlock code={'print("OOP result:", result)'} />
            </div>
          </div>
        </SubSection>
        <SubSection
          title={"Functional Programming"}
          desc={
            <p>
              Emphasizes immutability, pure functions, and the use of
              higher-order functions like map, reduce, and filter. It treats
              computation as the evaluation of mathematical functions.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"def is_even(num):"} />
              <CodeBlock code={"  return num % 2 == 0"} />
              <br />
              <CodeBlock code={"def sum_even_numbers(numbers):"} />
              <CodeBlock code={"  even_numbers = filter(is_even, numbers)"} />
              <CodeBlock code={"  return sum(even_numbers)"} />

              <br />
              <CodeBlock code={"numbers = [1, 2, 3, 4, 5, 6]"} />
              <CodeBlock code={"result = sum_even_numbers(numbers)"} />
              <CodeBlock code={'print("Functional result:", result)'} />
            </div>
          </div>
        </SubSection>
      </div>
    </>
  )
}

export default Styles
