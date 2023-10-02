import { Helmet } from "react-helmet"
import { SubSection, CodeBlock } from "./Sections"

function Libraries() {
  return (
    <>
      <Helmet>
        <title>Python Libraries</title>
      </Helmet>

      <header id="section-header">
        <h1>Python Libraries</h1>
        <p>
          Libraries are collections of pre-written code that provide useful
          functionality to programmers. They are like toolkits that extend
          programming languages' capabilities and save you from having to write
          everything from scratch.
        </p>
      </header>

      <div className="section-content">
        <SubSection
          title={"math"}
          desc={
            <p>
              The math library provides mathematical functions and constants.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"import math"} />
              <br />
              <CodeBlock code={"# Calculate the square root of a number"} />
              <CodeBlock code={"num = 16"} />
              <CodeBlock code={"sqrt_num = math.sqrt(num)"} />
              <CodeBlock
                code={'print("Square root of", num, "is", sqrt_num)'}
              />
              <br />
              <CodeBlock code={"# Calculate the value of pi"} />
              <CodeBlock code={"pi = math.pi"} />
              <CodeBlock code={'print("Value of pi:", pi)'} />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={"random"}
          desc={
            <p>The random library allows you to work with random numbers.</p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>

            <div className="code-block">
              <CodeBlock code={"import random"} />
              <br />
              <CodeBlock
                code={"# Generate a random integer between 1 and 10"}
              />
              <CodeBlock code={"random_int = random.randint(1, 10)"} />
              <CodeBlock code={'print("Random integer:", random_int)'} />
              <br />
              <CodeBlock code={"# Select a random item from a list"} />
              <CodeBlock
                code={'fruits = ["apple", "banana", "cherry", "date"]'}
              />
              <CodeBlock code={"random_fruit = random.choice(fruits)"} />
              <CodeBlock code={'print("Random fruit:", random_fruit)'} />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={"datetime"}
          desc={
            <p>The datetime library helps with date and time manipulation.</p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"from datetime import datetime"} />
              <br />
              <CodeBlock code={"# Get the current date and time"} />
              <CodeBlock code={"current_datetime = datetime.now()"} />
              <CodeBlock
                code={'print("Current date and time:", current_datetime)'}
              />
              <br />
              <CodeBlock code={"# Format a date as a string"} />
              <br />
              <CodeBlock
                code={
                  'formatted_date = current_datetime.strftime("%Y-%m-%d %H:%M:%S")'
                }
              />
              <CodeBlock code={'print("Formatted date:", formatted_date)'} />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={"pandas"}
          desc={
            <p>
              The pandas library provides data structures and data analysis
              tools, mainly for working with tabular data.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"import pandas as pd"} />
              <br />
              <CodeBlock code={"# Create a DataFrame from a dictionary"} />
              <CodeBlock
                code={
                  'data = {"Name": ["Alice", "Bob", "Charlie"], "Age": [25, 30, 35]}'
                }
              />
              <CodeBlock code={"df = pd.DataFrame(data)"} />
              <br />
              <CodeBlock code={"# Display the DataFrame"} />
              <CodeBlock code={'print("DataFrame:")'} />
              <CodeBlock code={"print(df)"} />
              <br />
              <CodeBlock code={"# Calculate statistics on the DataFrame"} />
              <CodeBlock code={'mean_age = df["Age"].mean()'} />
              <CodeBlock code={'print("Mean age:", mean_age)'} />
            </div>
          </div>
        </SubSection>

        <SubSection
          title={"matplotlib"}
          desc={
            <p>
              The matplotlib library is used for creating data visualizations,
              such as graphs and charts.
            </p>
          }
        >
          <div className="example-block">
            <h3>Example</h3>
            <div className="code-block">
              <CodeBlock code={"import matplotlib.pyplot as plt"} />
              <br />
              <CodeBlock code={"# Create a simple line plot"} />
              <CodeBlock code={"x = [1, 2, 3, 4, 5]"} />
              <CodeBlock code={"y = [10, 12, 5, 8, 15]"} />
              <CodeBlock code={"plt.plot(x, y)"} />
              <br />
              <CodeBlock code={'plt.xlabel("X-axis")'} />
              <CodeBlock code={'plt.ylabel("Y-axis")'} />
              <CodeBlock code={'pplt.title("Simple Line Plot")'} />
              <CodeBlock code={"plt.show()"} />
            </div>
          </div>
        </SubSection>
      </div>
    </>
  )
}

export default Libraries
