/* eslint-disable react/prop-types */
import React from "react"
import { Helmet } from "react-helmet"
import { funcs } from "../data"
import { SubSection, SSubSection, CodeBlock } from "./Sections"

function Basics() {
  function OperationRow({ symbol, operation }) {
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

      <>
        <header id="section-header">
          <h1>Python Basics</h1>
          <p>
            Welcome to Python 101! Here are the must-knows of Python and basic
            principles you need to know.
          </p>
        </header>
        <hr />
      </>

      <div className="section-content">
        <SubSection
          title={"Intro"}
          desc={
            <p>
              Get to know more about Python and why, where and how it&apos;s
              used.
            </p>
          }
        >
          <SSubSection
            title={"What is Python?"}
            desc={
              <p>
                Python is one of the most popular programming languages in the
                world, known for its simplicity, readability, and the vast
                community of developers who contribute to its growth and use it
                in a wide range of applications.
              </p>
            }
          />

          <SSubSection
            title={"A Brief History of Python"}
            desc={
              <p>
                Python was created by a programmer named Guido van Rossum in the
                late 1980s, released in 1991. Guido wanted to make a programming
                language that was easy to read and write. He named it
                &quot;Python&quot; after the British comedy group Monty Python
                because he liked their TV shows.
              </p>
            }
          />

          <SSubSection
            title={"What Can You Do with Python?"}
            desc={
              <p>
                Python is a versatile language, and people use it for many
                things:
              </p>
            }
          >
            <ul>
              <li>
                Web Development: You can build websites and web applications
                using Python. Popular frameworks like Django and Flask make it
                easier to create web projects.
              </li>
              <li>
                Data Analysis and Data Science: Python is widely used for
                analyzing data, making predictions, and creating visualizations.
                Libraries like Pandas, NumPy, and Matplotlib are helpful for
                these tasks.
              </li>
              <li>
                Machine Learning and Artificial Intelligence: Python is a go-to
                language for developing machine learning models and AI
                applications. Libraries like TensorFlow and PyTorch are popular
                in this field.
              </li>
              <li>
                Automation: You can write Python scripts to automate repetitive
                tasks on your computer.
              </li>
              <li>
                Game Development: Although not as common as other languages like
                C++, Python can be used for game development. Libraries like
                Pygame make it possible.
              </li>
              <li>
                Educational Programming: Python is often used to teach
                programming to beginners because of its easy-to-read syntax.
              </li>
            </ul>
          </SSubSection>
        </SubSection>

        <SubSection
          title={"Comments"}
          desc={
            <p>
              Comments are notes you can add to your code for yourself or other
              programmers to read. They can also be used to stop Python from
              running certain code.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>

            <div className="code-block">
              <CodeBlock code={"#I'm a comment"} />
            </div>
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
          <div className="example-block">
            <h3>Example</h3>

            <div className="code-block">
              <CodeBlock code={'x = "Hello World"'} />
              <CodeBlock code={"y = 12"} />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={"Data Types"}
          desc={
            <>
              <p>
                There are many different data types in programming and they can
                all do different things.
              </p>
              <br />
              <p>
                Here are the most basic, important data types you should know:
              </p>
            </>
          }
        >
          <div className="example-block">
            <div className="code-block">
              <CodeBlock
                code={"#strings -> text enclosed in single or double quotes"}
              />
              <CodeBlock code={'fname = "John"'} />
              <CodeBlock code={'lname = "Doe"'} />
              <br />
              <CodeBlock code={"#integers -> whole numbers"} />
              <CodeBlock code={"hand_bones = 27"} />
              <CodeBlock code={"eyes = 2"} />
              <br />
              <CodeBlock code={"#floats -> numbers with decimal points"} />
              <CodeBlock code={"pi = 3.14159"} />
              <CodeBlock code={"half = 0.5"} />
              <br />
              <CodeBlock
                code={"#booleans -> represents either True or False"}
              />
              <CodeBlock code={"x = True"} />
              <CodeBlock code={"y = False"} />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={"Lists"}
          desc={
            <>
              <p>
                Lists are a way of keeping multiple items together in one place.
                Like a container that can store many things at once, lists store
                many pieces of data at once when assigned to a variable.
              </p>
              <br />
              <p>
                Lists are created with the square brackets<code>[]</code>
                .They&apos;re also an example of <u>data structures</u>.
              </p>
            </>
          }
        >
          <div className="example-block">
            <h3>Example</h3>

            <div className="code-block">
              <CodeBlock code={'fruits = ["apple", "banana", "orange"]'} />
            </div>
          </div>

          <SSubSection
            title={"Index"}
            desc={
              <>
                <p>
                  Since data structures hold multiple items, those individual
                  items can also be accessed by their unique number, called an
                  index. Indexing always starts at 0 for the first item, and
                  increases by 1 for each remaining item.
                </p>
                <p>
                  <br />
                  To retrieve a specific item from a list, you can use its
                  index. You just need to wrap it in square brackets and attach
                  it to the list you need.
                </p>
              </>
            }
          >
            <div className="example-block">
              <h3>Example</h3>
              <div className="code-block">
                <CodeBlock code={'fruits = ["apple", "banana", "orange"]'} />
                <CodeBlock code={"a_fruit = fruits[1]"} />
                <CodeBlock
                  code={
                    '# a_fruit would equal "banana" since indexes start at 0.'
                  }
                />
              </div>
            </div>
          </SSubSection>

          <SSubSection
            title={"Changeable"}
            desc={
              <p>
                Lists are changeable, meaning you can add, remove, change or
                replace values after it&apos;s been created.
              </p>
            }
          />

          <SSubSection
            title={"Duplicates"}
            desc={
              <p>
                If you want, you can have items with the same value since lists
                are indexed.
              </p>
            }
          />
        </SubSection>

        <SubSection
          title={"Dictionaries"}
          desc={
            <>
              <p>Dictionaries are collections of key:value pairs.</p>
              <br />
              <p>
                Another example of <u>data structures</u>, dictionaries can hold
                multiple data values of any type.
              </p>
              <br />
              <p>
                Dictionaries are written with curly brackets<code>{"{}"}</code>
                and each item, separated by a comma, is defined as a key:value
                pair.
              </p>
              <br />
              <p>
                Keys are always written as strings, with the quotation marks,
                and values can be any data type you want.
              </p>
            </>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"car = {"} />
              <CodeBlock code={'  "brand": "Ford",'} />
              <CodeBlock code={'  "model": "Mustang",'} />
              <CodeBlock code={'  "year": 1964'} />
              <CodeBlock code={"}"} />
            </div>
          </div>

          <SSubSection
            title={"Index"}
            desc={
              <>
                <p>
                  Like lists, you can also access specific values in a
                  dictionary, the syntax is just a little bit different.
                </p>
                <br />
                <p>
                  To retrieve the item you want, it&apos;s almost the same as
                  lists but instead of the index number, you use the
                  corresponding key name.
                </p>
              </>
            }
          >
            <div className="example-block">
              <h3>Example</h3>
              <div className="code-block">
                <CodeBlock code={"car = {"} />
                <CodeBlock code={'  "brand": "Ford",'} />
                <CodeBlock code={'  "model": "Mustang",'} />
                <CodeBlock code={'  "year": 1964'} />
                <CodeBlock code={"}"} />
                <CodeBlock
                  code={'car_brand = car["brand"]) # would equal "Ford"'}
                />
              </div>
            </div>
          </SSubSection>

          <SSubSection
            title={"Changeable"}
            desc={
              <p>
                Dictionaries are also changeable, like lists, and items can be
                added, removed, changed or replaced after it&apos;s been
                created.
              </p>
            }
          ></SSubSection>

          <SSubSection
            title={"Duplicates"}
            desc={
              <p>
                Unlike lists, dictionaries cannot have multiple keys of the same
                name, the value will just overwrite any previously existing
                ones.
              </p>
            }
          >
            <div className="example-block">
              <h3>Example</h3>
              <div className="code-block">
                <CodeBlock code={"car = {"} />
                <CodeBlock code={'  "brand": "Ford",'} />
                <CodeBlock code={'  "model": "Mustang",'} />
                <CodeBlock code={'  "year": 1964'} />
                <CodeBlock code={'  "year": 2071'} />
                <CodeBlock code={"}"} />
                <CodeBlock
                  code={'car_year = car["year"] # would equal 2071, not 1964'}
                />
              </div>
            </div>
          </SSubSection>
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
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"x = 3"} />
              <CodeBlock code={"y = 5"} />
              <CodeBlock code={"z = x * y"} />
              <CodeBlock code={"#z would equal 15"} />
            </div>
          </div>

          <table className="operation-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <OperationRow symbol={"+"} operation={"Add"} />
              <OperationRow symbol={"-"} operation={"Subtract"} />
              <OperationRow symbol={"*"} operation={"Multiply"} />
              <OperationRow symbol={"/"} operation={"Divide"} />
              <OperationRow symbol={"**"} operation={"Power"} />
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

                  <div className="example-block">
                    <div className="code-block">
                      {code.map((line, j) => {
                        return <CodeBlock key={j} code={line} />
                      })}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </SubSection>

        <SubSection
          title={"Conditional Statements"}
          desc={
            <>
              <p>
                Conditional statements are used when you want to execute code
                based off a logical or mathematical condition.
              </p>
              <br />
              <p>
                The most common use of this in Python are<code>if</code>
                statements.
              </p>
            </>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"a = 24"} />
              <CodeBlock code={"b = 132"} /> <br />
              <CodeBlock code={"if b > a:"} />
              <CodeBlock code={'  print("b is greater than a")'} />
            </div>
          </div>

          <p>
            On the first line of the if statement, we check if the value of
            <code>b</code>is greater than<code>a</code>, and if it&apos;s true,
            the rest of the code after the colon<code>:</code>is executed and we
            get the printed message.
          </p>

          <SSubSection
            title={"Elif and Else"}
            desc={
              <p>
                These are keywords used if the previous conditions of an if
                statement were false.
              </p>
            }
          >
            <ol>
              <li>
                <strong>elif:</strong>
                <br />
                Short for else if, elif is like trying another condition if the
                last one was false.
                <div className="example-block">
                  <h3>Example</h3>
                  <div className="code-block">
                    <CodeBlock code={"temperature = 25"} />
                    <CodeBlock code={"a = 24"} /> <br />
                    <CodeBlock code={"if temperature > 30:"} />
                    <CodeBlock code={'  print("It is hot outside!")'} />
                    <CodeBlock code={"elif temperature > 20:"} />
                    <CodeBlock
                      code={'  print("It is warm, but not too hot.")'}
                    />
                  </div>
                </div>
                <p>
                  Since<code>temperature</code>is equal to 25, the first
                  condition would be false as it&apos;s not greater than 30.
                  However, it is greater than 20 so the second condition would
                  be true and the print statement would execute.
                </p>
              </li>

              <br />

              <li>
                <strong>else:</strong>
                <br />
                When none of the conditions turned out to be true, you can use
                an else statement. It&apos;s basically like a last resort if
                everything else failed.
                <div className="example-block">
                  <h3>Example</h3>
                  <div className="code-block">
                    <CodeBlock code={"temperature = 10"} /> <br />
                    <CodeBlock code={"if temperature > 30:"} />
                    <CodeBlock code={'  print("It is hot outside!")'} />
                    <CodeBlock code={"elif temperature > 20:"} />
                    <CodeBlock
                      code={'  print("It is warm, but not too hot.")'}
                    />
                    <CodeBlock code={"else:"} />
                    <CodeBlock code={'  print("It is cold!")'} />
                  </div>
                </div>
                <p>
                  Since<code>temperature</code>is 10, the first condition would
                  be false. Moving on to the second condition, that would also
                  be false and as there&apos;s no more conditions to check, it
                  defaults to the<code>else</code>block and executes the final
                  print statement.
                </p>
              </li>
            </ol>
          </SSubSection>
        </SubSection>

        <SubSection
          title={"Functions"}
          desc={
            <>
              <p>
                Functions are reusable blocks of code that perform specific
                tasks and only run when you call it.
              </p>
              <br />
              <p>
                In Python, they are defined with the<code>def</code>keyword.
              </p>
            </>
          }
        >
          <div className="example-block">
            <h3>Example</h3>

            <div className="code-block">
              <CodeBlock code={"def my_function():"} />
              <CodeBlock
                code={'  print("Hello, world! I was printed from a function")'}
              />
            </div>
          </div>

          <p>
            In order to call it and run the code within, you just use the
            function name and attach the parenthesis.
          </p>

          <br />

          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"def my_function():"} />
              <CodeBlock
                code={'  print("Hello, world! I was printed from a function")'}
              />
              <br />
              <CodeBlock code={"my_function()"} />
            </div>
          </div>
          <SSubSection
            title={"Arguments and Parameters"}
            desc={
              <p>
                Both terms can be used for the same thing: information passed
                into a function.
              </p>
            }
          >
            <p>
              A <i>parameter</i> is a variable set inside the parenthesis of the
              function when you define it. You can have as many as you want, as
              long as they&apos;re separated by a comma.
            </p>
            <br />
            <p>
              An <i>argument</i> is the value that is sent back to the function
              when you call it, also set in the parenthesis.
            </p>

            <br />

            <div className="example-block">
              <h3>Example</h3>
              <div className="code-block">
                <CodeBlock code={"def my_function(fname, lname):"} />
                <CodeBlock code={"  print(fname)"} />
                <CodeBlock code={"  print(lname)"} />
                <br />
                <CodeBlock code={'my_function("John", "Doe")'} />
              </div>
            </div>
            <p>
              When the function is defined, two parameters are set,
              <code>fname</code>and<code>lname</code>. When it&apos;s called,
              the two corresponding arguments,<code>&quot;John&quot;</code>and
              <code>&quot;Doe&quot;</code>, are sent back and will replace the
              variables within the function when executed.
            </p>
          </SSubSection>
        </SubSection>

        <SubSection
          title={"Indentation"}
          desc={
            <>
              <p>
                Python uses indentation (whitespace) to indicate blocks of code.
              </p>
              <br />
              <p>
                Proper indentation is essential for readability and to define
                the scope of statements within loops, functions, and conditional
                statements.
              </p>
            </>
          }
        >
          <SSubSection
            title={"Scope"}
            desc={
              <p>
                Scope is like a rulebook that tells you where can use certain
                variables in your code. There are two main types of scope.
              </p>
            }
          >
            <ol>
              <br />
              <li>
                <strong>Local Scope:</strong>
                <br />
                Think of this as a small box inside your code where certain
                variables or functions live. Variables in a local scope can only
                be used and seen from within that box. When you create a
                variable inside a function, it belongs to the local scope of
                that function, meaning you can&apos;t use it anywhere else
                except there.
                <div className="example-block">
                  <h3>Example</h3>
                  <div className="code-block">
                    <CodeBlock code={"def my_function():"} />
                    <CodeBlock code={"  x = 10"} />
                  </div>
                </div>
              </li>
              <br />
              <li>
                <strong>Global Scope:</strong>
                <br />
                This is a bigger box that contains everything in your code.
                Variables and functions in the global scope can be used and seen
                from anywhere in your code. When you create a variable or
                function outside of any function or anywhere in a local scope,
                it&apos;s in the global scope.
                <div className="example-block">
                  <h3>Example</h3>

                  <div className="code-block">
                    <CodeBlock code={"x = 30 #This is in the global scope"} />
                    <br />
                    <CodeBlock code={"def my_function():"} />
                    <CodeBlock
                      code={
                        "  x = 10 #This is in the local scope of my_function"
                      }
                    />
                    <CodeBlock
                      code={
                        "  print(x) #This will print the local x, which is 40"
                      }
                    />
                    <br />
                    <CodeBlock code={"my_function()"} /> <br />
                    <CodeBlock
                      code={
                        "print(x) # This will print the global x, which is 30"
                      }
                    />
                  </div>
                </div>
              </li>
            </ol>
          </SSubSection>
        </SubSection>

        <SubSection
          title={"Loops"}
          desc={
            <p>Python supports for and while loops for repetitive tasks.</p>
          }
        >
          <SSubSection
            title={"For Loops"}
            desc={
              <p>
                A for loop is used to iterate over a sequence or data structure
                and execute a set of statements to the items.
              </p>
            }
          >
            <div className="example-block">
              <h3>Example</h3>
              <div className="code-block">
                <CodeBlock code={'fruits = ["apple", "banana", "orange"]'} />
                <br />
                <CodeBlock code={"for f in fruits:"} />
                <CodeBlock code={"  print(f)"} />
              </div>
            </div>

            <p>
              In for loops, you define a temporary variable to each item in the
              iterable (in this case, a list), and run some code to it. The loop
              will literally loop through the structure and execute the
              specified code to every item.
            </p>
            <br />
            <p>
              On the first line, we declare a variable<code>fruits</code>to a
              list of fruits. When we begin writing the for loop, we set the
              variable<code>f</code>that&apos;ll temporarily assign itself to
              the value of the current item until the code to it executes, the
              item gets printed, and moves on the next item.
            </p>
          </SSubSection>

          <SSubSection
            title={"While Loops"}
            desc={
              <p>
                A while loop is used to continuously run specified code based
                off a condition, as long as its true.
              </p>
            }
          >
            <div className="example-block">
              <h3>Example</h3>
              <div className="code-block">
                <CodeBlock code={"i = 1"} />
                <br />
                <CodeBlock code={"while i < 6:"} />
                <CodeBlock code={"  print(i)"} />
                <CodeBlock code={"  i += 1"} />
              </div>
            </div>

            <p>Once the condition becomes false, the loop will end.</p>
            <p>
              If we didn&apos;t add the last line <code>i += 1</code>, which
              increments it (increases the value), the loop would continue
              forever and cause the program to crash.
            </p>
          </SSubSection>
        </SubSection>
      </div>
    </>
  )
}

export default Basics
