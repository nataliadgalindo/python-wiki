import { Helmet } from "react-helmet"
import { basics } from "../../data"
import { NextPageBtn } from "./PageBtns"

function Basics() {
  const [{ types }, { funcs }] = basics

  function SubSection({ children, title, desc }) {
    return (
      <>
        <article className="subsection">
          <header className="subsection-header">
            <h2>{title}</h2>
            {desc}
          </header>

          <div>{children}</div>
        </article>
        <hr />
      </>
    )
  }

  function TableRow({ symbol, operation }) {
    return (
      <tr>
        <td>{symbol}</td>
        <td>{operation}</td>
      </tr>
    )
  }

  return (
    <>
      <Helmet>
        <title>The Basics of Python</title>
      </Helmet>

      <header id="section-header">
        <h1>Python Basics</h1>
        <p>
          Welcome to Python 101! Here are the must-knows of Python and the basic
          principles you need to know.
        </p>
      </header>

      <div className="section-content">
        <SubSection
          title={"Comments"}
          desc={
            <p>
              Comments are notes you can add to your code for yourself or other
              programmers to read. They dont affect how the program runs.
            </p>
          }
        >
          <div>
            <h3>Example</h3>
            <pre>
              <code>#this is a comment</code>
            </pre>
          </div>

          <p>
            Comments are defined by the hashtag symbol<code>#</code>at the
            beginning of a line.
          </p>
        </SubSection>

        <SubSection
          title={"Variables"}
          desc={
            <p>
              Variables are containers for storing data values. All you need to
              do is assign a piece of data to a value of your choice with the
              equal sign.
            </p>
          }
        >
          <div>
            <h3>Example</h3>
            <pre>
              <code>
                x = "Hello World"
                <br />y = 12
              </code>
            </pre>
          </div>
        </SubSection>

        <SubSection
          title={"Data Types"}
          desc={
            <p>
              There are many different data types in programming and they can
              all do different things.
            </p>
          }
        >
          <p>Here are the most basic, important data types you should know:</p>

          <ul>
            {types.map(({ name, desc }, i) => {
              return (
                <li key={i}>
                  {name}: {desc}
                </li>
              )
            })}
          </ul>
        </SubSection>

        <SubSection
          title={"Lists"}
          desc={
            <p>
              Lists are a way of keeping multiple items together in one place.
              Like a container that can store many things at once, lists store
              many pieces of data at once when assigned to a variable.
            </p>
          }
        >
          <div>
            <h3>Example</h3>

            <pre>
              <code>fruits = ["apple", "banana", "orange"]</code>
            </pre>

            <p>
              Lists are created with the square brackets<code>[]</code>.They're
              also an example of <u>data structures</u>.
            </p>
          </div>

          <article>
            <header>
              <h3>Index</h3>
              <p>
                Since data structures hold multiple items, those individual
                items can also be accessed by their unique number, called an
                index. Indexing always starts at 0 for the first item, and
                increases by 1 for each remaining item.
              </p>
              <p>
                To retrieve a specific item from a list, you can use its index.
                You just need to wrap it in square brackets and attach it to the
                list you need.
              </p>
            </header>

            <div>
              <pre>
                <code>
                  fruits = ["apple", "banana", "orange"]
                  <br />
                  <br />
                  print(fruits[1])
                  <br />
                  <br /># this will print "banana" since indexes start at 0.
                </code>
              </pre>
            </div>
          </article>

          <article>
            <header>
              <h3>Changeable</h3>
              <p>
                Lists are changeable, meaning you can add, remove, change or
                replace values after it's been created.
              </p>
            </header>
          </article>

          <article>
            <header>
              <h3>Duplicates</h3>
              <p>
                If you want, you can have items with the same value since lists
                are indexed.
              </p>
            </header>
          </article>
        </SubSection>

        <SubSection
          title={"Dictionaries"}
          desc={
            <p>
              Dictionaries are collections of key:value pairs.
              <br />
              Another example of <u>data structures</u>, dictionaries can hold
              multiple data values of any type.
            </p>
          }
        >
          <div>
            <h3>Example</h3>
            <pre>
              <code>
                car = {"{"}
                <br />
                {'  "brand": "Ford",'}
                <br />
                {'  "model": "Mustang",'}
                <br />
                {'  "year": 1964'}
                <br />
                {"}"}
              </code>
            </pre>
          </div>

          <p>
            Dictionaries are written with curly brackets<code>{"{}"}</code>and
            each item, separated by a comma, is defined as a key:value pair.
          </p>
          <p>
            Keys are always written as strings, with the quotation marks, and
            values can be any data type you want.
          </p>

          <article>
            <header>
              <h3>Index</h3>
              <p>
                Like lists, you can also access specific values in a dictionary,
                the syntax is just a little bit different.
              </p>
              <p>
                To retrieve the item you want, it's almost the same as lists but
                instead of the index number, you use the corresponding key name.
              </p>
            </header>

            <div>
              <pre>
                <code>
                  car = {"{"}
                  <br />
                  {'  "brand": "Ford",'}
                  <br />
                  {'  "model": "Mustang",'}
                  <br />
                  {'  "year": 1964'}
                  <br />
                  {"}"}
                  <br />
                  <br />
                  {'print(car["brand"]) # will print "Ford"'}
                </code>
              </pre>
            </div>
          </article>

          <article>
            <header>
              <h3>Changeable</h3>
              <p>
                Dictionaries are also changeable, like lists, and items can be
                added, removed, changed or replaced after it's been created.
              </p>
            </header>
          </article>

          <article>
            <header>
              <h3>Duplicates</h3>
              <p>
                Unlike lists, dictionaries cannot have multiple keys of the same
                name, the value will just overwrite any previous existing ones.
              </p>
            </header>

            <div>
              <pre>
                <code>
                  car = {"{"}
                  <br />
                  {'  "brand": "Ford",'}
                  <br />
                  {'  "model": "Mustang",'}
                  <br />
                  {'  "year": 1964'}
                  <br />
                  {'  "year": 2071'}
                  <br />
                  {"}"}
                  <br />
                  <br />
                  {'print(car["year"]) # will print 2071, not 1964'}
                </code>
              </pre>
            </div>
          </article>
        </SubSection>

        <SubSection
          title={"Basic Operations"}
          desc={
            <p>
              Python allows you to perform arithmetic operations like addition,
              subtraction, multiplication, and division.
            </p>
          }
        >
          <div>
            <h3>Example</h3>
            <pre>
              <code>
                x = 3<br />y = 5<br />z = x * y<br />
                <br />
                #z would equal 15
              </code>
            </pre>
          </div>

          <table className="operation-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <TableRow symbol={"+"} operation={"Add"} />
              <TableRow symbol={"-"} operation={"Subtract"} />
              <TableRow symbol={"*"} operation={"Multiply"} />
              <TableRow symbol={"/"} operation={"Divide"} />
              <TableRow symbol={"**"} operation={"Power (to the power of)"} />
            </tbody>
          </table>
        </SubSection>

        <SubSection
          title={"Common Functions"}
          desc={
            <p>
              Python has many built-in functions that we can use to save code
              and take advantage of all the features available to us.
            </p>
          }
        >
          <ul>
            {funcs.map(({ name, desc, code }, i) => {
              return (
                <li key={i}>
                  <p>
                    <strong>{name}():</strong> {desc}
                  </p>

                  <div>
                    <pre>
                      <code>
                        {code.map((line, j) => {
                          return <p key={j}>{line}</p>
                        })}
                      </code>
                    </pre>
                  </div>
                </li>
              )
            })}
          </ul>
        </SubSection>

        <SubSection
          title={"Conditional Statements"}
          desc={
            <p>
              Conditional statements are used when you want to execute code
              based off a logical or mathematical condition.
            </p>
          }
        >
          <p>
            The most common use of this in Python are<code>if</code>
            statements.
          </p>

          <h3>Example</h3>

          <pre>
            <code>
              a = 24
              <br />
              b = 132
              <br />
              <br />
              if b {">"} a:
              <br />
              {'  print("b is greater than a")'}
            </code>
          </pre>

          <p>
            On the first line of the if statement, we check if the value of
            <code>b</code>is greater than<code>a</code>, and if it's true, the
            rest of the code after the colon<code>:</code>is executed and we get
            the printed message.
          </p>

          <article>
            <header>
              <h3>Elif and Else</h3>
              <p>
                These are keywords used if the previous conditions of an if
                statement were false.
              </p>
            </header>

            <ol>
              <li>
                <strong>elif:</strong>
                <br />
                Short for else if, elif is like trying another condition if the
                last one was false.
                <pre>
                  <code>
                    temperature = 25
                    <br />
                    <br />
                    if temperature {">"} 30:
                    <br />
                    {'  print("It is hot outside!")'}
                    <br />
                    elif temperature {">"} 20:
                    <br />
                    {'  print("It is warm, but not too hot.")'}
                  </code>
                </pre>
                Since<code>temperature</code>is equal to 25, the first condition
                would be false as it's not greater than 30. However, it is
                greater than 20 so the second condition would be true and the
                print statement would execute.
              </li>

              <br />

              <li>
                <strong>else:</strong>
                <br />
                When none of the conditions turned out to be true, you can use
                an else statement. It's basically like a last resort if
                everything else failed.
                <pre>
                  <code>
                    temperature = 10
                    <br />
                    <br />
                    if temperature {">"} 30:
                    <br />
                    {'  print("It is hot outside!")'}
                    <br />
                    elif temperature {">"} 20:
                    <br />
                    {'  print("It is warm, but not too hot.")'}
                    <br />
                    else:
                    <br />
                    {'  print("It is cold!")'}
                  </code>
                </pre>
                Since<code>temperature</code>is 10, the first condition would be
                false. Moving on to the second condition, that would also be
                false and as there's no more conditions to check, it defaults to
                the<code>else</code>block and executes the final print
                statement.
              </li>
            </ol>
          </article>
        </SubSection>

        <SubSection
          title={"Functions"}
          desc={
            <p>
              Functions are reusable blocks of code that perform specific tasks
              and only run when you call it.
            </p>
          }
        >
          <p>
            In Python, they are defined with the<code>def</code>keyword.
          </p>

          <h3>Example</h3>

          <pre>
            <code>
              def my_function():
              <br />
              {'  print("Hello, world! I was printed from a function")'}
            </code>
          </pre>

          <p>
            In order to call it and run the code within, you just use the
            function name and attach the parenthesis.
          </p>

          <pre>
            <code>
              def my_function():
              <br />
              {'  print("Hello, world! I was printed from a function")'}
              <br />
              <br />
              <strong>my_function()</strong>
            </code>
          </pre>

          <article>
            <header>
              <h3>Arguments and Parameters</h3>
              <p>
                Both terms can be used for the same thing: information passed
                into a function.
              </p>
            </header>

            <div>
              <br />
              <p>
                A <i>parameter</i> is a variable set inside the parenthesis of
                the function when you define it. You can have as many as you
                want, as long as they're separated by a comma.
              </p>
              <br />
              <p>
                An <i>argument</i> is the value that is sent back to the
                function when you call it, also set in the parenthesis.
              </p>

              <pre>
                <code>
                  def my_function(fname, lname):
                  <br />
                  {"  print(fname)"}
                  <br />
                  {"  print(lname)"}
                  <br />
                  <br />
                  my_function("John", "Doe")
                </code>
              </pre>

              <p>
                When the function is defined, two parameters are set,
                <code>fname</code>and<code>lname</code>. When it's called, the
                two corresponding arguments,<code>"John"</code>and
                <code>"Doe"</code>, are sent back and will replace the variables
                in the print statements.
              </p>
            </div>
          </article>
        </SubSection>

        <SubSection
          title={"Indentation"}
          desc={
            <p>
              Python uses indentation (whitespace) to indicate blocks of code.
            </p>
          }
        >
          <p>
            Proper indentation is essential for readability and to define the
            scope of statements within loops, functions, and conditional
            statements.
          </p>

          <article>
            <header>
              <h3>Scope</h3>
              <p>
                Scope is like a rulebook that tells you where can use certain
                variables in your code. There are two main types of scope.
              </p>
            </header>

            <ol>
              <br />
              <li>
                <strong>Local Scope:</strong>
                <br />
                Think of this as a small box inside your code where certain
                variables or functions live. Variables in a local scope can only
                be used and seen from within that box. When you create a
                variable inside a function, it belongs to the local scope of
                that function, meaning you can't use it anywhere else except
                there.
                <pre>
                  <code>
                    def my_function():
                    <br />
                    {"  x = 10"}
                  </code>
                </pre>
              </li>
              <br />
              <li>
                <strong>Global Scope:</strong>
                <br />
                This is a bigger box that contains everything in your code.
                Variables and functions in the global scope can be used and seen
                from anywhere in your code. When you create a variable or
                function outside of any function or anywhere in a local scope,
                it's in the global scope.
                <pre>
                  <code>
                    x = 30 # This is in the global scope
                    <br />
                    <br />
                    def my_function():
                    <br />
                    {"  x = 10"} # This is in the local scope of my_function
                    <br />
                    {"  print(x)"} # This will print the local x, which is 40
                    <br />
                    <br />
                    my_function()
                    <br />
                    <br />
                    print(x) # This will print the global x, which is 30
                  </code>
                </pre>
              </li>
            </ol>
          </article>
        </SubSection>

        <SubSection
          title={"Loops"}
          desc={
            <p>Python supports for and while loops for repetitive tasks.</p>
          }
        >
          <article>
            <header>
              <h3>For Loops</h3>
              <p>
                A for loop is used to iterate over a sequence or data structure
                and execute a set of statements to the items.
              </p>
            </header>

            <div>
              <pre>
                <code>
                  fruits = ["apple", "banana", "orange"]
                  <br />
                  <br />
                  for f in fruits:
                  <br />
                  {"  print(f)"}
                </code>
              </pre>

              <p>
                In for loops, you define a temporary variable to each item in
                the iterable (in this case, a list), and run some code to it.
                The loop will literally loop through the structure and execute
                the specified code to every item.
              </p>
              <p>
                On the first line, we declare a variable<code>fruits</code>to a
                list of fruits. When we begin writing the for loop, we set the
                variable<code>f</code>that'll temporarily assign itself to the
                value of the current item until the code to it executes, the
                item gets printed, and moves on the next item.
              </p>
            </div>
          </article>

          <article>
            <header>
              <h3>While Loops</h3>
              <p>
                A while loop is used to continuously run specified code based
                off a condition, as long as its true.
              </p>
            </header>

            <div>
              <pre>
                <code>
                  i = 1
                  <br />
                  <br />
                  while i {"<"} 6:
                  <br />
                  {"  print(i)"}
                  <br />
                  {"  i += 1"}
                </code>
              </pre>

              <p>Once the condition becomes false, the loop will end.</p>
              <p>
                If we didn't add the last line <code>i += 1</code>, which
                increments it (increases the value), the loop would continue
                forever and cause the program to crash.
              </p>
            </div>
          </article>
        </SubSection>
      </div>

      <div className="page-btn-container">
        <NextPageBtn name={"Development Environment"} page={"/learn/devenv"} />
      </div>
    </>
  )
}

export default Basics
