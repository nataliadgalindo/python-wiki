export const sideNav = [
  {
    route: "/learn",
    title: "The Basics",
  },
  {
    route: "devenv",
    title: "Development Environment",
  },
  {
    route: "errors",
    title: "Common Errors",
  },
  {
    route: "debugging",
    title: "Debugging",
  },
  {
    route: "libraries",
    title: "Python Libraries",
  },
  {
    route: "styles",
    title: "Programming Styles",
  },
]

export const basics = [
  {
    types: [
      {
        name: "Strings",
        desc:
          "Text enclosed in single or double quotes like " +
          '"Hello"' +
          " or 'Python'.",
      },
      { name: "Integers", desc: "Whole numbers like 1, 2, -3." },
      { name: "Floats", desc: "Numbers with decimal points like 3.14, -0.5." },
      { name: "Boolean", desc: "Represents either True or False." },
    ],
  },
  {
    funcs: [
      {
        name: "print",
        desc: "Used to display text or values on the screen.",
        code: ['print("Hello, World!")'],
      },
      {
        name: "input",
        desc: "Used to get user input from the console. It waits for the user to enter something and returns it as a string.",
        code: ['name = input("Enter your name: ")'],
      },
      {
        name: "len",
        desc: "Returns the length (number of elements) of a variable, such as a string, list, or dictionary.",
        code: ['text = "Python"', "length = len(text) # length is 6"],
      },
      {
        name: "int",
        desc: "Functions for converting between different data types (integer, floating-point, and string).",
        code: [
          'num_str = "42"',
          "num_int = int(num_str) # Convert to integer",
          "num_float = float(num_str) # Convert to floating-point",
        ],
      },
      {
        name: "type",
        desc: "Returns the data type of an object.",
        code: ["x = 42", "print(type(x))  # <class 'int'>"],
      },
      {
        name: "range",
        desc: "Generates a sequence of numbers.",
        code: ["numbers = range(1, 6) # Generates 1, 2, 3, 4, 5"],
      },
      {
        name: "max()/min",
        desc: "Returns the maximum or minimum value in an iterable (e.g. a list).",
        code: [
          "numbers = [5, 2, 9, 1, 8]",
          "max_value = max(numbers)  # 9",
          "min_value = min(numbers)  # 1",
        ],
      },
      {
        name: "sum",
        desc: "Calculates the sum of all elements in an iterable.",
        code: ["numbers = [1, 2, 3, 4, 5]", "total = sum(numbers) # 15"],
      },
      {
        name: "round",
        desc: "Rounds a floating-point number to the nearest integer.",
        code: ["pi = 3.14159", "rounded_pi = round(pi) # 3"],
      },
      {
        name: "sorted",
        desc: "Returns a sorted version of a list.",
        code: [
          "unsorted_list = [3, 1, 2, 5, 4]",
          "sorted_list = sorted(unsorted_list) # [1, 2, 3, 4, 5]",
        ],
      },
    ],
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
    img: "/assets/images/code.png",
  },
  {
    title: "Debugger",
    desc: "IDEs typically have a built-in debugger for finding and fixing code errors.",
    img: "/assets/images/debug.png",
  },
  {
    title: "Build and Compilation Tools",
    desc: "IDEs often come with tools for building and compiling code, making it easy to create executable programs.",
    img: "/assets/images/execute.png",
  },
  {
    title: "Language and Framework Support",
    desc: "IDEs are typically designed for specific programming languages or frameworks, and they may offer advanced features tailored to those technologies.",
    img: "/assets/images/python.png",
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
    desc: "A style where you write code that explicitly describes the steps the computer should take to achieve a particular task. It focuses on how to perform actions.",
  },
  {
    name: "Procedural Programming",
    desc: "A subset of imperative programming. It involves organizing code into reusable procedures or functions, which helps in code modularity and maintainability.",
  },
  {
    name: "Object-Oriented Programming",
    desc: "(OOP) is a programming paradigm that focuses on modeling the real world using objects. Objects have attributes (data) and methods (functions) that operate on the data.",
  },
  {
    name: "Functional Programming",
    desc: "Emphasizes immutability, pure functions, and the use of higher-order functions like map, reduce, and filter. It treats computation as the evaluation of mathematical functions.",
  },
]
