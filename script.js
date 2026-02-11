const quizData = {
    HTML: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Markup Language", "None of the above"],
        correct: 0,
        explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages."
      },
      {
        question: "Which of the following is a valid HTML tag?",
        options: ["<div>", "<section>", "<span>", "All of the above"],
        correct: 3,
        explanation: "<div>, <section>, and <span> are all valid HTML tags used for different purposes in web development."
      },
      {
        question: "What is the correct HTML tag for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<hr>"],
        correct: 1,
        explanation: "<br> is the correct HTML tag for inserting a line break. <hr> creates a horizontal rule, not a line break."
      },
      {
        question: "Which attribute is used to define the background color in HTML?",
        options: ["bgcolor", "background", "color", "bg"],
        correct: 0,
        explanation: "The bgcolor attribute is used to define the background color of an HTML element (though it's deprecated in favor of CSS)."
      },
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correct: 0,
        explanation: "The <a> tag (anchor tag) is used to create hyperlinks in HTML, with the href attribute specifying the link destination."
      },
      {
        question: "What is the correct HTML tag for inserting an image?",
        options: ["<image>", "<src>", "<img>", "<picture>"],
        correct: 2,
        explanation: "The <img> tag is used to embed images in HTML documents, with the src attribute specifying the image source."
      },
      {
        question: "Which tag is used for creating an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: 0,
        explanation: "<ul> stands for unordered list and is used to create bulleted lists. <ol> is for ordered (numbered) lists."
      },
      {
        question: "Which tag is used for creating an ordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: 1,
        explanation: "<ol> stands for ordered list and is used to create numbered lists. <ul> is for unordered (bulleted) lists."
      },
      {
        question: "Which HTML element is used to define important text?",
        options: ["<b>", "<i>", "<strong>", "<important>"],
        correct: 2,
        explanation: "The <strong> element is used to define text with strong importance, typically displayed in bold."
      },
      {
        question: "What is the correct HTML tag for inserting a table?",
        options: ["<table>", "<tab>", "<tr>", "<thead>"],
        correct: 0,
        explanation: "The <table> tag is used to create a table in HTML. <tr> creates table rows, and <thead> creates the table header section."
      },
      {
        question: "Which HTML tag is used to define the largest heading?",
        options: ["<h2>", "<h1>", "<h3>", "<h4>"],
        correct: 1,
        explanation: "<h1> is the largest heading tag in HTML, with <h2> through <h6> representing progressively smaller headings."
      },
      {
        question: "What does the <meta> tag define in HTML?",
        options: ["Metadata about the document", "Styles of the document", "Content of the document", "None of the above"],
        correct: 0,
        explanation: "The <meta> tag provides metadata about the HTML document, such as character set, viewport settings, and keywords."
      },
      {
        question: "Which HTML tag is used to define a paragraph?",
        options: ["<p>", "<para>", "<text>", "<div>"],
        correct: 0,
        explanation: "The <p> tag is used to define a paragraph in HTML. <div> is a generic container, not specifically for paragraphs."
      },
      {
        question: "What is the purpose of the <form> tag in HTML?",
        options: ["To display text", "To add an image", "To link to another page", "To create a form for user input"],
        correct: 3,
        explanation: "The <form> tag is used to create an HTML form for collecting user input, which can include text fields, checkboxes, buttons, etc."
      },
      {
        question: "Which attribute is used to specify the source of an image in HTML?",
        options: ["href", "src", "link", "url"],
        correct: 1,
        explanation: "The src attribute specifies the source (URL or path) of an image in the <img> tag."
      }
    ],
    
    CSS: [
      {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "None of the above", "Cascading Style Sheets"],
        correct: 3,
        explanation: "CSS stands for Cascading Style Sheets, which is used to style and layout web pages."
      },
      {
        question: "Which property is used to change the background color in CSS?",
        options: ["bgcolor", "background-color", "color", "background"],
        correct: 1,
        explanation: "The background-color property is used to set the background color of an element in CSS."
      },
      {
        question: "Which property is used to change the font size in CSS?",
        options: ["font-size", "text-size", "font", "size"],
        correct: 0,
        explanation: "The font-size property is used to specify the size of text in CSS."
      },
      {
        question: "Which property is used to change the text color in CSS?",
        options: ["text-color", "color", "font-color", "bg-color"],
        correct: 1,
        explanation: "The color property is used to set the color of text in CSS."
      },
      {
        question: "Which CSS property is used to add space between elements?",
        options: ["padding", "spacing", "margin", "gap"],
        correct: 2,
        explanation: "The margin property is used to create space around elements, outside of any defined borders."
      },
      {
        question: "Which CSS property is used to set the font family?",
        options: ["font-family", "font-style", "font-type", "text-font"],
        correct: 0,
        explanation: "The font-family property is used to specify the font for an element in CSS."
      },
      {
        question: "Which CSS property is used to control the spacing between lines of text?",
        options: ["text-spacing", "line-height", "letter-spacing", "text-line"],
        correct: 1,
        explanation: "The line-height property is used to specify the height of a line box, which controls the spacing between lines of text."
      },
      {
        question: "How do you add a background image in CSS?",
        options: ["background-image: url('image.jpg')", "bg-image: url('image.jpg')", "background: url('image.jpg')", "image-background: url('image.jpg')"],
        correct: 0,
        explanation: "The background-image property is used to set one or more background images for an element."
      },
      {
        question: "Which property is used to create a border around an element in CSS?",
        options: ["border", "border-style", "border-color", "outline"],
        correct: 0,
        explanation: "The border property is a shorthand property for setting border-width, border-style, and border-color."
      },
      {
        question: "Which CSS property is used to change the display of an element?",
        options: ["visibility", "show", "position", "display"],
        correct: 3,
        explanation: "The display property specifies the display behavior (the type of rendering box) of an element."
      },
      {
        question: "Which CSS property is used to align text in the center?",
        options: ["text-align", "align-text", "center-align", "align"],
        correct: 0,
        explanation: "The text-align property is used to set the horizontal alignment of text within an element."
      },
      {
        question: "Which CSS selector is used to select all paragraphs in a document?",
        options: [".p", "#p", "p", "all-p"],
        correct: 2,
        explanation: "The element selector 'p' selects all <p> elements in the document."
      },
      {
        question: "Which CSS property is used to make text bold?",
        options: ["font-weight", "text-weight", "font-style", "text-bold"],
        correct: 0,
        explanation: "The font-weight property sets the weight (or boldness) of the font."
      },
      {
        question: "Which CSS property is used to set the width of an element?",
        options: ["width", "height", "size", "dimension"],
        correct: 0,
        explanation: "The width property sets the width of an element."
      },
      {
        question: "How do you create a comment in CSS?",
        options: ["// comment", "# comment", "<!-- comment -->", "/* comment */"],
        correct: 3,
        explanation: "CSS comments start with /* and end with */."
      }
    ],
    
    JavaScript: [
      {
        question: "What is the correct syntax to print a message in JavaScript?",
        options: ["echo('Hello World')", "console.log('Hello World')", "print('Hello World')", "None of the above"],
        correct: 1,
        explanation: "console.log() is used to print messages to the browser's console in JavaScript."
      },
      {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Google", "Oracle"],
        correct: 0,
        explanation: "JavaScript was developed by Netscape Communications Corporation in 1995."
      },
      {
        question: "What is the correct way to create a variable in JavaScript?",
        options: ["var x;", "let x;", "const x;", "All of the above"],
        correct: 3,
        explanation: "JavaScript provides three ways to declare variables: var, let, and const, each with different scoping rules."
      },
      {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        options: ["=", "==", "===", ":="],
        correct: 0,
        explanation: "The = operator is used for assignment in JavaScript. == and === are comparison operators."
      },
      {
        question: "Which of the following is a JavaScript data type?",
        options: ["String", "Integer", "Boolean", "All of the above"],
        correct: 3,
        explanation: "JavaScript has several data types including String, Number (which includes integers), Boolean, Object, etc."
      },
      {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0,
        explanation: "The push() method adds one or more elements to the end of an array and returns the new length."
      },
      {
        question: "Which of the following is a loop in JavaScript?",
        options: ["for", "while", "do-while", "All of the above"],
        correct: 3,
        explanation: "JavaScript supports several loop types: for, while, and do-while loops."
      },
      {
        question: "Which function is used to parse a string into an integer in JavaScript?",
        options: ["parseFloat()", "parseInt()", "toInt()", "toNumber()"],
        correct: 1,
        explanation: "parseInt() parses a string argument and returns an integer. parseFloat() returns a floating-point number."
      },
      {
        question: "What is the correct syntax for a function in JavaScript?",
        options: ["function myFunction() {}", "function: myFunction() {}", "def myFunction() {}", "None of the above"],
        correct: 0,
        explanation: "The function keyword is used to define a function in JavaScript, followed by the function name and parentheses."
      },
      {
        question: "Which keyword is used to create a constant in JavaScript?",
        options: ["var", "let", "const", "constant"],
        correct: 2,
        explanation: "The const keyword is used to declare a constant (a variable that cannot be reassigned) in JavaScript."
      },
      {
        question: "Which of the following is not a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Node.js"],
        correct: 3,
        explanation: "Node.js is a JavaScript runtime environment, not a front-end framework. React, Angular, and Vue are frameworks/libraries."
      },
      {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: ["pop()", "shift()", "unshift()", "push()"],
        correct: 0,
        explanation: "The pop() method removes the last element from an array and returns that element."
      },
      {
        question: "Which of the following is used to call a function in JavaScript?",
        options: ["()", "{}", "[]", "<>"],
        correct: 0,
        explanation: "Parentheses () are used to call a function in JavaScript, e.g., myFunction()."
      },
      {
        question: "What is the correct way to define a class in JavaScript?",
        options: ["class MyClass {}", "class: MyClass {}", "define MyClass {}", "None of the above"],
        correct: 0,
        explanation: "The class keyword was introduced in ES6 to define classes in JavaScript."
      },
      {
        question: "What does 'this' refer to in JavaScript?",
        options: ["The parent object", "The global object", "The current object", "None of the above"],
        correct: 2,
        explanation: "In JavaScript, 'this' refers to the object that is executing the current function."
      }
    ],
    
    Python: [
      {
        question: "What is the correct way to define a function in Python?",
        options: ["function myFunction()", "def myFunction():", "func myFunction():", "None of the above"],
        correct: 1,
        explanation: "In Python, functions are defined using the 'def' keyword followed by the function name and parentheses."
      },
      {
        question: "Which of the following is used to declare a variable in Python?",
        options: ["var", "let", "const", "None of the above"],
        correct: 3,
        explanation: "Python doesn't require special keywords to declare variables. You simply assign a value to a name: x = 5"
      },
      {
        question: "What is the correct syntax to output 'Hello World' in Python?",
        options: ["echo('Hello World')", "print('Hello World')", "console.log('Hello World')", "write('Hello World')"],
        correct: 1,
        explanation: "The print() function is used to output text to the console in Python."
      },
      {
        question: "Which of the following is not a valid data type in Python?",
        options: ["int", "float", "boolean", "real"],
        correct: 3,
        explanation: "Python has int, float, and bool data types. 'real' is not a built-in Python data type."
      },
      {
        question: "Which keyword is used to create a function in Python?",
        options: ["def", "function", "func", "define"],
        correct: 0,
        explanation: "The 'def' keyword is used to define functions in Python."
      },
      {
        question: "Which of the following is used to create a list in Python?",
        options: ["[]", "{}", "()", "<>"],
        correct: 0,
        explanation: "Square brackets [] are used to create lists in Python. {} creates dictionaries or sets, and () creates tuples."
      },
      {
        question: "Which of the following is used to comment in Python?",
        options: ["//", "/* */", "#", "<!-- -->"],
        correct: 2,
        explanation: "The hash symbol # is used for single-line comments in Python."
      },
      {
        question: "Which function is used to find the length of a list in Python?",
        options: ["len()", "length()", "size()", "count()"],
        correct: 0,
        explanation: "The len() function returns the number of items in an object like a list, string, or tuple."
      },
      {
        question: "Which of the following is a correct way to open a file in Python?",
        options: ["open('file.txt')", "open('file.txt', 'r')", "file.open('file.txt')", "open('file.txt', 'read')"],
        correct: 1,
        explanation: "The open() function is used to open files, with the second parameter specifying the mode ('r' for read)."
      },
      {
        question: "Which of the following methods is used to remove an item from a list in Python?",
        options: ["remove()", "pop()", "del()", "All of the above"],
        correct: 3,
        explanation: "Python provides multiple ways to remove items: remove() removes by value, pop() removes by index, and del removes by index or slice."
      },
      {
        question: "Which of the following is used to create a dictionary in Python?",
        options: ["{}", "[]", "()", "<>"],
        correct: 0,
        explanation: "Curly braces {} are used to create dictionaries in Python, with key-value pairs separated by colons."
      },
      {
        question: "Which of the following is used to import a module in Python?",
        options: ["include module", "using module", "import module", "require module"],
        correct: 2,
        explanation: "The 'import' keyword is used to import modules in Python."
      },
      {
        question: "Which function is used to get the current working directory in Python?",
        options: ["os.getcwd()", "os.getwd()", "os.current()", "os.getdir()"],
        correct: 0,
        explanation: "The os.getcwd() function returns the current working directory as a string."
      },
      {
        question: "Which of the following is used to check if a value exists in a list in Python?",
        options: ["exist", "in", "contains", "has"],
        correct: 1,
        explanation: "The 'in' operator is used to check if a value exists in a sequence like a list, tuple, or string."
      }
    ],
    
    React: [
      {
        question: "What is React?",
        options: ["A JavaScript library for building user interfaces", "A programming language", "A database management system", "A CSS framework"],
        correct: 0,
        explanation: "React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications."
      },
      {
        question: "Which company developed React?",
        options: ["Google", "Facebook", "Microsoft", "Twitter"],
        correct: 1,
        explanation: "React was developed by Facebook and is maintained by Facebook and a community of developers."
      },
      {
        question: "What is JSX?",
        options: ["A syntax extension for JavaScript", "A new programming language", "A CSS preprocessor", "A database query language"],
        correct: 0,
        explanation: "JSX is a syntax extension for JavaScript that allows writing HTML-like code in JavaScript files."
      },
      {
        question: "Which method is used to render a React component?",
        options: ["render()", "display()", "show()", "output()"],
        correct: 0,
        explanation: "The render() method is required in class components to return the JSX that should be rendered."
      },
      {
        question: "What is a React Hook?",
        options: ["A function that lets you use state and other React features without writing a class", "A CSS property", "A database connection", "A testing framework"],
        correct: 0,
        explanation: "Hooks are functions that let you use state and other React features in functional components."
      },
      {
        question: "Which hook is used to manage state in functional components?",
        options: ["useState()", "useEffect()", "useContext()", "useReducer()"],
        correct: 0,
        explanation: "The useState() hook is used to add state to functional components in React."
      },
      {
        question: "What does useEffect() hook do?",
        options: ["Performs side effects in functional components", "Changes component state", "Creates new components", "Handles forms"],
        correct: 0,
        explanation: "The useEffect() hook lets you perform side effects in functional components, similar to lifecycle methods in class components."
      },
      {
        question: "How do you pass data from parent to child component?",
        options: ["Props", "State", "Context", "Redux"],
        correct: 0,
        explanation: "Data is passed from parent to child components through props (properties)."
      },
      {
        question: "What is the virtual DOM?",
        options: ["A lightweight copy of the real DOM", "A database", "A CSS framework", "A testing tool"],
        correct: 0,
        explanation: "React uses a virtual DOM, which is a lightweight representation of the real DOM in memory."
      },
      {
        question: "What is the purpose of keys in React lists?",
        options: ["To uniquely identify elements in a list", "To encrypt data", "To store passwords", "To create animations"],
        correct: 0,
        explanation: "Keys help React identify which items have changed, been added, or been removed in a list."
      },
      {
        question: "Which command is used to create a new React app?",
        options: ["npx create-react-app my-app", "npm init react-app my-app", "react create my-app", "Both 1 and 2"],
        correct: 3,
        explanation: "Both 'npx create-react-app my-app' and 'npm init react-app my-app' can be used to create a new React app."
      },
      {
        question: "What is React Router used for?",
        options: ["For client-side routing in React applications", "For database queries", "For state management", "For styling components"],
        correct: 0,
        explanation: "React Router is a standard library for routing in React applications, enabling navigation between views."
      }
    ],
    
    NodeJS: [
      {
        question: "What is Node.js?",
        options: ["A JavaScript runtime built on Chrome's V8 engine", "A JavaScript library", "A CSS framework", "A database"],
        correct: 0,
        explanation: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows running JavaScript on the server."
      },
      {
        question: "Which of the following is NOT a core module in Node.js?",
        options: ["http", "fs", "path", "jquery"],
        correct: 3,
        explanation: "jQuery is a client-side JavaScript library, not a Node.js core module. http, fs, and path are all Node.js core modules."
      },
      {
        question: "What is NPM?",
        options: ["Node Package Manager", "New Project Manager", "Node Project Module", "None of the above"],
        correct: 0,
        explanation: "NPM stands for Node Package Manager, which is the default package manager for Node.js."
      },
      {
        question: "Which module is used to handle file system operations in Node.js?",
        options: ["fs", "file", "filesystem", "path"],
        correct: 0,
        explanation: "The fs (file system) module provides an API for interacting with the file system in Node.js."
      },
      {
        question: "What does the require() function do?",
        options: ["Imports modules", "Exports modules", "Creates modules", "Deletes modules"],
        correct: 0,
        explanation: "The require() function is used to import modules in Node.js."
      },
      {
        question: "What is package.json?",
        options: ["A file that holds metadata about the project", "A JavaScript file", "A CSS file", "A database file"],
        correct: 0,
        explanation: "package.json is a JSON file that holds metadata about a Node.js project, including dependencies and scripts."
      },
      {
        question: "Which method is used to create a web server in Node.js?",
        options: ["http.createServer()", "server.create()", "web.createServer()", "node.createServer()"],
        correct: 0,
        explanation: "The http.createServer() method creates an HTTP server in Node.js."
      },
      {
        question: "What is the purpose of the module.exports object?",
        options: ["To export functions, objects, or values from a module", "To import modules", "To delete modules", "To create modules"],
        correct: 0,
        explanation: "module.exports is used to export functions, objects, or values from a Node.js module so they can be used in other files."
      },
      {
        question: "Which global object provides information about the current module?",
        options: ["module", "global", "process", "console"],
        correct: 0,
        explanation: "The module object provides information about the current module in Node.js."
      },
      {
        question: "What is the purpose of the __dirname variable?",
        options: ["Returns the directory name of the current module", "Returns the file name of the current module", "Returns the current working directory", "Returns the user's home directory"],
        correct: 0,
        explanation: "__dirname returns the directory name of the currently executing module."
      },
      {
        question: "Which of the following is a popular Node.js framework?",
        options: ["Express", "Django", "Flask", "Spring"],
        correct: 0,
        explanation: "Express is a minimal and flexible Node.js web application framework."
      },
      {
        question: "What is middleware in Express.js?",
        options: ["Functions that have access to the request and response objects", "Database queries", "CSS styles", "HTML templates"],
        correct: 0,
        explanation: "Middleware functions are functions that have access to the request object, response object, and the next middleware function."
      }
    ],
    
    SQL: [
      {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Question Language", "Structured Question Language", "Simple Query Language"],
        correct: 0,
        explanation: "SQL stands for Structured Query Language, which is used to communicate with databases."
      },
      {
        question: "Which SQL statement is used to retrieve data from a database?",
        options: ["SELECT", "GET", "RETRIEVE", "EXTRACT"],
        correct: 0,
        explanation: "The SELECT statement is used to select data from a database."
      },
      {
        question: "Which SQL statement is used to update data in a database?",
        options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
        correct: 0,
        explanation: "The UPDATE statement is used to modify existing records in a table."
      },
      {
        question: "Which SQL statement is used to delete data from a database?",
        options: ["DELETE", "REMOVE", "DROP", "ERASE"],
        correct: 0,
        explanation: "The DELETE statement is used to delete existing records in a table."
      },
      {
        question: "Which SQL clause is used to filter records?",
        options: ["WHERE", "FILTER", "HAVING", "CHECK"],
        correct: 0,
        explanation: "The WHERE clause is used to filter records based on specified conditions."
      },
      {
        question: "Which SQL keyword is used to sort the result set?",
        options: ["ORDER BY", "SORT BY", "ARRANGE BY", "GROUP BY"],
        correct: 0,
        explanation: "The ORDER BY keyword is used to sort the result set in ascending or descending order."
      },
      {
        question: "Which SQL function is used to count the number of rows?",
        options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
        correct: 0,
        explanation: "The COUNT() function returns the number of rows that matches a specified criterion."
      },
      {
        question: "Which type of join returns all records from both tables?",
        options: ["FULL OUTER JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN"],
        correct: 0,
        explanation: "A FULL OUTER JOIN returns all records when there is a match in either left or right table."
      },
      {
        question: "What is a primary key?",
        options: ["A unique identifier for each record in a table", "A foreign key", "Any column in a table", "The first column in a table"],
        correct: 0,
        explanation: "A primary key is a column (or set of columns) that uniquely identifies each row in a table."
      },
      {
        question: "Which SQL statement is used to create a new table?",
        options: ["CREATE TABLE", "NEW TABLE", "ADD TABLE", "MAKE TABLE"],
        correct: 0,
        explanation: "The CREATE TABLE statement is used to create a new table in a database."
      },
      {
        question: "Which SQL statement is used to add new rows to a table?",
        options: ["INSERT INTO", "ADD INTO", "CREATE ROW", "NEW ROW"],
        correct: 0,
        explanation: "The INSERT INTO statement is used to insert new records in a table."
      },
      {
        question: "Which SQL keyword is used to combine rows from two or more tables?",
        options: ["JOIN", "MERGE", "COMBINE", "UNITE"],
        correct: 0,
        explanation: "The JOIN keyword is used to combine rows from two or more tables based on a related column."
      }
    ],
    
    TypeScript: [
      {
        question: "What is TypeScript?",
        options: ["A typed superset of JavaScript", "A new programming language", "A CSS framework", "A database"],
        correct: 0,
        explanation: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
      },
      {
        question: "Which company developed TypeScript?",
        options: ["Microsoft", "Google", "Facebook", "Oracle"],
        correct: 0,
        explanation: "TypeScript was developed by Microsoft and first released in 2012."
      },
      {
        question: "What is the main advantage of TypeScript over JavaScript?",
        options: ["Static typing", "Faster execution", "Smaller file size", "Easier syntax"],
        correct: 0,
        explanation: "The main advantage of TypeScript is static typing, which helps catch errors during development rather than at runtime."
      },
      {
        question: "How do you define a variable with a specific type in TypeScript?",
        options: ["let name: string;", "string let name;", "let string name;", "name: string let;"],
        correct: 0,
        explanation: "In TypeScript, you declare a variable with a type using a colon after the variable name: let name: string;"
      },
      {
        question: "What file extension is used for TypeScript files?",
        options: [".ts", ".js", ".typescript", ".tsx"],
        correct: 0,
        explanation: "TypeScript files use the .ts extension. .tsx is used for TypeScript files containing JSX."
      },
      {
        question: "Which command is used to compile TypeScript to JavaScript?",
        options: ["tsc", "typescript", "ts-compile", "compile-ts"],
        correct: 0,
        explanation: "The tsc command (TypeScript compiler) is used to compile TypeScript files to JavaScript."
      },
      {
        question: "What is an interface in TypeScript?",
        options: ["A way to define the structure of an object", "A graphical user interface", "A connection between two systems", "A type of variable"],
        correct: 0,
        explanation: "An interface in TypeScript is a way to define the structure of an object, specifying what properties and methods it should have."
      },
      {
        question: "What is the 'any' type in TypeScript?",
        options: ["A type that can be anything", "A specific data type", "An array type", "A function type"],
        correct: 0,
        explanation: "The 'any' type is a type that can represent any JavaScript value, effectively opting out of type checking."
      },
      {
        question: "How do you define an array of numbers in TypeScript?",
        options: ["let numbers: number[];", "let numbers: array<number>;", "let numbers: []number;", "Both 1 and 2"],
        correct: 3,
        explanation: "Both number[] and Array<number> are valid ways to define an array of numbers in TypeScript."
      },
      {
        question: "What are generics in TypeScript?",
        options: ["A way to create reusable components that work with multiple types", "A type of function", "A way to import modules", "A type of variable"],
        correct: 0,
        explanation: "Generics allow creating reusable components that can work with a variety of types rather than a single one."
      }
    ]
  };
  
  let currentCategory = null;
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 300; // 5 minutes
  let timerInterval;
  let quizStarted = false;
  let startTime = null;
  let endTime = null;
  
  // DOM elements
  const categorySelection = document.getElementById("category-selection");
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const quizCategoryElement = document.getElementById("quiz-category");
  const timerElement = document.getElementById("timer");
  const questionNumberElement = document.getElementById("question-number");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  const correctCountElement = document.getElementById("correct-count");
  const incorrectCountElement = document.getElementById("incorrect-count");
  const remainingCountElement = document.getElementById("remaining-count");
  const progressElement = document.getElementById("progress");
  const progressTextElement = document.getElementById("progress-text");
  const resetButton = document.getElementById("reset-btn");
  const scorePercentageElement = document.getElementById("score-percentage");
  const scoreCircle = document.getElementById("score-circle");
  const resultCorrectElement = document.getElementById("result-correct");
  const resultIncorrectElement = document.getElementById("result-incorrect");
  const resultTimeElement = document.getElementById("result-time");
  
  // Theme toggle
  document.getElementById("toggle-theme").addEventListener("change", (e) => {
    const body = document.body;
    const themeLabel = document.getElementById("theme-label");
    const isChecked = e.target.checked;
  
    if (isChecked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      themeLabel.textContent = "Light Mode";
      localStorage.setItem("quiz-theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      themeLabel.textContent = "Dark Mode";
      localStorage.setItem("quiz-theme", "light");
    }
  });
  
  // Load theme preference from localStorage
  function loadThemePreference() {
    const savedTheme = localStorage.getItem("quiz-theme");
    const toggleCheckbox = document.getElementById("toggle-theme");
    const themeLabel = document.getElementById("theme-label");
    
    if (savedTheme === "dark") {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      toggleCheckbox.checked = true;
      themeLabel.textContent = "Light Mode";
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      toggleCheckbox.checked = false;
      themeLabel.textContent = "Dark Mode";
    }
  }
  
  // Initialize theme on page load
  window.addEventListener("DOMContentLoaded", loadThemePreference);
  
  function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 300;
    quizStarted = true;
    startTime = new Date();
    
    // Update UI elements
    quizCategoryElement.textContent = category + " Quiz";
    correctCountElement.textContent = "0";
    incorrectCountElement.textContent = "0";
    remainingCountElement.textContent = quizData[category].length;
    
    // Show/hide sections
    categorySelection.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    
    // Add animation class
    quizContainer.classList.add("slide-up");
    
    // Show reset button
    resetButton.style.visibility = "visible";
    
    // Start timer and show first question
    startTimer();
    showQuestion();
    updateProgressBar();
  }
  
  function startTimer() {
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timeLeft = 0;
        showTimeOver();
        setTimeout(showResults, 1500);
      }
    }, 1000);
  }
  
  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timerElement) {
      timerElement.querySelector("span").textContent = timerText;
      
      // Add warning class when time is running low
      if (timeLeft <= 60) {
        timerElement.style.background = "linear-gradient(90deg, #f72585, #b5179e)";
        timerElement.style.animation = "pulse 1s infinite";
      } else if (timeLeft <= 120) {
        timerElement.style.background = "linear-gradient(90deg, #f8961e, #f3722c)";
      }
    }
  }
  
  function showTimeOver() {
    const timeOverMessage = document.createElement("div");
    timeOverMessage.textContent = "⏰ Time's Up!";
    timeOverMessage.classList.add("time-over-message");
    quizContainer.appendChild(timeOverMessage);
  }
  
  function showQuestion() {
    const currentQuestion = quizData[currentCategory][currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    const totalQuestions = quizData[currentCategory].length;
    
    // Update question number and text
    questionNumberElement.textContent = `Q.${questionNumber}`;
    questionElement.textContent = currentQuestion.question;
    
    // Update progress
    updateProgressBar();
    
    // Clear options and add new ones
    optionsElement.innerHTML = "";
    
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.innerHTML = `
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${option}</span>
      `;
      
      button.addEventListener("click", () => selectOption(index, button));
      optionsElement.appendChild(button);
    });
    
    // Hide next button initially
    nextButton.classList.add("hidden");
  }
  
  function updateProgressBar() {
    const progress = ((currentQuestionIndex) / quizData[currentCategory].length) * 100;
    const totalQuestions = quizData[currentCategory].length;
    const currentQuestionNum = currentQuestionIndex + 1;
    
    if (progressElement) {
      progressElement.style.width = `${progress}%`;
    }
    
    if (progressTextElement) {
      progressTextElement.textContent = `Question ${currentQuestionNum} of ${totalQuestions}`;
    }
    
    if (remainingCountElement) {
      remainingCountElement.textContent = totalQuestions - currentQuestionNum + 1;
    }
  }
  
  function selectOption(selectedIndex, button) {
    const currentQuestion = quizData[currentCategory][currentQuestionIndex];
    const options = document.querySelectorAll("#options button");
    
    // Disable all buttons
    options.forEach((btn) => {
      btn.disabled = true;
      btn.classList.add("no-hover");
    });
    
    // Highlight correct/wrong answers
    if (selectedIndex === currentQuestion.correct) {
      button.classList.add("correct");
      score++;
      correctCountElement.textContent = score;
    } else {
      button.classList.add("wrong");
      const correctButton = options[currentQuestion.correct];
      correctButton.classList.add("correct");
      incorrectCountElement.textContent = parseInt(incorrectCountElement.textContent) + 1;
    }
    
    // Show next button
    nextButton.classList.remove("hidden");
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData[currentCategory].length) {
      showQuestion();
    } else {
      endTime = new Date();
      clearInterval(timerInterval);
      showResults();
    }
  }
  
  function showResults() {
    endTime = new Date();
    const totalQuestions = quizData[currentCategory].length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const timeTaken = startTime ? Math.round((endTime - startTime) / 1000) : 0;
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Update result elements
    scoreElement.textContent = `Your score is ${score} out of ${totalQuestions}`;
    scorePercentageElement.textContent = `${percentage}%`;
    resultCorrectElement.textContent = score;
    resultIncorrectElement.textContent = totalQuestions - score;
    resultTimeElement.textContent = timeString;
    
    // Animate the score circle
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    scoreCircle.style.strokeDashoffset = offset;
    
    // Show/hide containers
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("scale-in");
    
    // Hide reset button
    resetButton.style.visibility = "hidden";
    
    // Remove time over message if present
    const timeOverMessage = document.querySelector(".time-over-message");
    if (timeOverMessage) {
      timeOverMessage.remove();
    }
  }
  
  function resetQuiz() {
    // Reset variables
    currentCategory = null;
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 300;
    quizStarted = false;
    startTime = null;
    endTime = null;
    
    // Clear timer
    clearInterval(timerInterval);
    
    // Reset UI elements
    timerElement.querySelector("span").textContent = "05:00";
    timerElement.style.background = "";
    timerElement.style.animation = "";
    
    // Hide quiz and result containers
    quizContainer.classList.add("hidden");
    resultContainer.classList.add("hidden");
    
    // Show category selection
    categorySelection.classList.remove("hidden");
    
    // Hide reset button
    resetButton.style.visibility = "hidden";
    
    // Remove time over message if present
    const timeOverMessage = document.querySelector(".time-over-message");
    if (timeOverMessage) {
      timeOverMessage.remove();
    }
  }
  
  // Initialize the app
  window.addEventListener("DOMContentLoaded", () => {
    // Add animation to category cards
    const categoryCards = document.querySelectorAll(".category-card");
    categoryCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  });

  // Set current year in footer
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll('#currentYear');
  yearElements.forEach(el => {
      if (el) el.textContent = currentYear;
  });