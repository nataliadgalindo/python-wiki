export const basics = [
  {
    title: "Variables",
    desc: "You can create variables to store data",
  },
  {
    title: "Data Types",
    desc: "You can create variables to store data",
    types: [
      {
        name: "Strings",
        desc: "Text enclosed in single or double quotes like Hello or Python.",
      },
      { name: "Intergers", desc: "Whole numbers like 1, 2, -3." },
      { name: "Floats", desc: "Numbers with decimal points like 3.14, -0.5." },
      { name: "Boolean", desc: "Represents either True or False." },
    ],
  },
  {
    title: "Common Functions",
    desc: "Common functions",
    funcs: [
      {
        name: "print",
        desc: "a built-in Python function used to display text or values on the screen.",
      },
    ],
  },
  {
    title: "Lists",
    desc: "Lists are ordered collections of items",
  },
  {
    title: "Dictionaries",
    desc: "Dictionaries are collections of key-value pairs",
  },
  {
    title: "Conditional Statements",
    desc: "You can use if, elif (short for else if), and else to create conditional statements",
  },
  {
    title: "Basic Operations",
    desc: "Python allows you to perform arithmetic operations like addition, subtraction, multiplication, and division",
  },
  {
    title: "Functions",
    desc: "Functions are reusable blocks of code that perform specific tasks. You can define your functions",
  },
  {
    title: "Loops",
    desc: "Python supports for and while loops for repetitive tasks",
  },
  {
    title: "Comments",
    desc: "Comments are notes you can add to your code for yourself or other programmers to read. They dont affect how the program runs",
  },
  {
    title: "Indentation",
    desc: "Python uses indentation (whitespace) to indicate blocks of code. Proper indentation is essential for readability and to define the scope of statements within loops, functions, and conditional statements.",
  },
]

export const debugging = [
  {
    title: "Identifying and Fixing Errors",
    desc: "The primary purpose of debugging is to find and correct errors or bugs in your code. These errors can prevent your program from working correctly or cause it to produce unexpected results. Debugging allows you to pinpoint the source of these issues and apply fixes.",
  },
  {
    title: "Ensuring Correct Functionality",
    desc: "Debugging ensures that your code performs as intended. By thoroughly testing and debugging your code, you can have confidence that your software behaves correctly under different scenarios and edge cases.",
  },
  {
    title: "Saving Time and Resources",
    desc: "Debugging early in the development process can save a substantial amount of time and resources in the long run. Identifying and addressing issues as they arise is more efficient than waiting until the end of a project, when debugging can become more challenging and time-consuming.",
  },
  {
    title: "Enhancing Code Quality",
    desc: "Debugging is an integral part of code quality assurance. Well-debugged code is more reliable and easier to maintain. It also leads to a better user experience, as it reduces the likelihood of crashes or unexpected behavior.",
  },
  {
    title: "Learning and Skill Development",
    desc: "Debugging is an opportunity to learn and improve your programming skills. It requires analytical thinking, problem-solving, and familiarity with the programming language and tools. Over time, debugging helps you become a more proficient developer.",
  },
  {
    title: "Security",
    desc: "Debugging can uncover security vulnerabilities in your code. Identifying and addressing these vulnerabilities before they are exploited by malicious actors is essential for the security of your application and user data.",
  },
]

export const ide = [
  {
    title: "Code Editor",
    desc: "An IDE includes a code editor with features like syntax highlighting, auto-completion, and code navigation.",
  },
  {
    title: "Debugger",
    desc: "IDEs typically have a built-in debugger for finding and fixing code errors.",
  },
  {
    title: "Build and Compilation Tools",
    desc: "IDEs often come with tools for building and compiling code, making it easy to create executable programs.",
  },
  {
    title: "Language and Framework Support",
    desc: "IDEs are typically designed for specific programming languages or frameworks, and they may offer advanced features tailored to those technologies.",
  },
]

export const compiler = [
  {
    step: "Source Code",
    desc: "A programmer writes code in a high-level programming language, such as Python, C++, or Java. This code is called source code.",
  },
  {
    step: "Compilation",
    desc: "The source code is processed by the compiler, which analyzes it for syntax errors and converts it into an equivalent set of machine instructions, known as object code or binary code.",
  },
  {
    step: "The Result",
    desc: "The resulting object code can be executed directly by the computers processor. It doesnt need to be translated again, making it faster to run than interpreting the original source code.",
  },
  {
    step: "Executable Program",
    desc: "The object code can be linked with other necessary object code files and libraries to create a complete executable program, which can be run on a computer.",
  },
]

export const errors = [
  {
    err: "Syntax",
    desc: "errors occur when you write code that doesnt follow the rules of the programming language. These errors prevent your code from running at all.",
  },
  {
    err: "Runtime",
    desc: "errors occur when your code runs but encounters a problem while executing, causing it to crash.",
  },
  {
    err: "Index",
    desc: "errors occur when you try to access an element in a data structure (like a list or string) using an index that is out of bounds.",
  },
  {
    err: "Name",
    desc: "errors happen when you try to use a variable or function that hasnt been defined or is out of scope.",
  },
  {
    err: "Type",
    desc: "errors occur when you try to perform operations on data of incompatible types.",
  },
]

export const libraries = [
  {
    name: "math",
    desc: "library provides mathematical functions and constants.",
  },
  {
    name: "random",
    desc: "library allows you to work with random numbers.",
  },
  {
    name: "datetime",
    desc: "library helps with date and time manipulation.",
  },
  {
    name: "pandas",
    desc: "library provides data structures and data analysis tools, mainly for working with tabular data.",
  },
  {
    name: "matplotlib",
    desc: "library is used for creating data visualizations, such as graphs and charts.",
  },
]

export const styles = [
  {
    name: "Imperative Programming",
    desc: "a style where you write code that explicitly describes the steps the computer should take to achieve a particular task. It focuses on how to perform actions.",
  },
  {
    name: "Procedural Programming",
    desc: "a subset of imperative programming. It involves organizing code into reusable procedures or functions, which helps in code modularity and maintainability.",
  },
  {
    name: "Object-Oriented Programming",
    desc: "(OOP) is a programming paradigm that focuses on modeling the real world using objects. Objects have attributes (data) and methods (functions) that operate on the data.",
  },
  {
    name: "Functional Programming",
    desc: "emphasizes immutability, pure functions, and the use of higher-order functions like map, reduce, and filter. It treats computation as the evaluation of mathematical functions",
  },
]
