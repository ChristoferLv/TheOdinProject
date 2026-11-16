# The Odin Project - Studies

This repository centralizes all the projects and exercises built during my studies following [The Odin Project](https://www.theodinproject.com/) Full Stack JavaScript curriculum: a rigorous, project-driven path covering everything from HTML/CSS fundamentals to production-grade Node.js backends and React frontends.

Every project here was built from scratch, without scaffolding or boilerplate, with a focus on understanding the underlying concepts rather than just making things work.

## Concepts & Skills Covered

A full picture of what was studied and applied across all sections of the curriculum:

| Area | Concepts & Technologies |
|------|------------------------|
| **Backend** | Node.js, Express 5, RESTful API design, MVC architecture, middleware pipelines, centralized error handling, input validation with express-validator, EJS server-side templating |
| **Authentication & Security** | JWT (issue, verify, refresh), Passport.js (JWT + Local strategies), session-based authentication, bcrypt password hashing, role-based access control, protected routes |
| **API Design** | RESTful conventions (GET, POST, PUT, PATCH, DELETE), offset pagination, query filters, search endpoints, consistent JSON response format, CORS configuration |
| **Architecture & Patterns** | Module Pattern, Factory Functions, dependency injection, monorepo with multiple clients, service/controller layering, separation of concerns, full CRUD |
| **Database** | PostgreSQL, Prisma ORM, database migrations, seeding, raw SQL (`$queryRaw`), relational data modeling, self-referencing tables, composite unique constraints, partial indexes, Prisma transactions, cascade deletes |
| **External APIs** | REST API consumption (PokeAPI, Visual Crossing Weather API, Giphy API), async data fetching, error handling for third-party responses |
| **Real-Time** | WebSocket communication with Socket.IO (server + client), JWT-authenticated socket connections, per-user rooms, server-pushed event notifications. *self-studied, not covered in the curriculum* |
| **Data Structures & Algorithms** | Linked Lists, Binary Search Trees (balanced, traversals, rebalancing), HashMap (hash function, collision handling, load factor resizing), BFS, recursion, Merge Sort |
| **External APIs** | REST API consumption (PokeAPI, Visual Crossing Weather API, Giphy API), async data fetching, error handling for third-party responses |
| **JavaScript** | ES6+ modules, classes, prototypes, destructuring, spread/rest, async/await, Promises, Fetch API, closures, callbacks, higher-order functions, DOM manipulation, LocalStorage |
| **Frontend** | React 19, React Router 8, Context API for global state, custom hooks, protected route wrappers, Socket.IO client, CSS Modules, responsive design, toast notifications |
| **HTML & CSS** | Semantic HTML5, CSS Flexbox, CSS Grid, responsive layouts, custom fonts and typography, Constraint Validation API, form styling |
| **Testing** | Unit testing with Jest, component testing with React Testing Library, edge case coverage, ESM + Babel configuration |
| **Tooling** | Git, npm, Vite, Webpack, ESLint, Babel, dotenv, Nodemon |

## Repository Structure


### 🟢 NodeJS

Projects developed in the [**NodeJS**](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) section, focused on Express servers, authentication, databases, and full-stack applications:

#### 📅 Projects (in reverse chronological order)

- **[Odin Book](https://github.com/ChristoferLv/top-odin-book)** - Full-featured social network inspired by Twitter/X, the final capstone project of the curriculum. RESTful API with 30+ endpoints covering posts, replies, shares (repost), quote tweets, likes, bookmarks, follows, real-time notifications via Socket.IO, trending posts, content and user search, image uploads with Sharp, and a React frontend with multiple contexts and pages. The largest and most complete project in the course.

- **[Messaging App](https://github.com/ChristoferLv/top-messaging-app)** - WhatsApp-inspired messaging application built with a RESTful API using Express, PostgreSQL, and Prisma, with a React frontend. Features real-time communication via Socket.IO, supporting private chats, group conversations, and media sharing.

- **[Where's Waldo](https://github.com/ChristoferLv/top-wheres-waldo)** - Interactive photo tagging game with multiple levels, React frontend and Express/Prisma backend, with secure coordinate validation on the server side to prevent cheating.

- **[Blog API](https://github.com/ChristoferLv/top-blog-api)** - Blog in a monorepo with an Express/Prisma backend and two React/Vite frontends, covering JWT authentication, posts, and comments.

- **[File Uploader](https://github.com/ChristoferLv/top-file-uploader)** - Application for uploading, downloading, organizing, and sharing files with authentication, sessions, and Prisma.

- **[Members Only](https://github.com/ChristoferLv/top-members-only)** - Message board with authentication, sessions, role-based permissions, and message posting for members.

- **[Inventory Application](https://github.com/ChristoferLv/top-inventory-application)** - Inventory system with products and categories, full CRUD operations, and administrative views.

- **[Mini Message Board](https://github.com/ChristoferLv/top-mini-message-board)** - Simple message board with EJS, form validation, and PostgreSQL persistence.

- **[Basic Informational Site](https://github.com/ChristoferLv/top-basic-informational-site)** - Basic informational site with routes for Home, About, Contact, and a custom 404 page.


### ⚛️ React

Projects developed in the [**React**](https://www.theodinproject.com/paths/full-stack-javascript/courses/react) section, focused on components, state, and forms:

#### 📅 Projects (in reverse chronological order)

- **[Shopping Cart](https://github.com/ChristoferLv/top-shopping-cart)** - Store with Home, Products, and Cart pages, API consumption, cart with totals, and tests with React Testing Library.

- **[Memory Card](https://github.com/ChristoferLv/top-memory-card)** - Memory card game with shuffled cards, scoring, and data loaded from the PokeAPI.

- **[CV Application](https://github.com/ChristoferLv/top-cv-application)** - Resume generator with editable forms, multiple entries, and final preview.


### ⚙️ Advanced HTML and CSS Course

Project developed in the [**Advanced HTML and CSS**](https://www.theodinproject.com/paths/full-stack-javascript/courses/advanced-html-and-css) section, focused on advanced layout, typography, and responsiveness:

#### 📅 Project

- **[Homepage](https://github.com/ChristoferLv/top-homepage)** - Responsive portfolio page with introduction, works, and contact sections, using custom fonts and project cards.


### 💛 JavaScript

Projects developed in the [**JavaScript**](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript) section, focused on advanced JavaScript concepts and programming:

#### 📅 Projects (in reverse chronological order)
- **[Battleship](https://github.com/ChristoferLv/top-battleship)** - Battleship game with a ship placement phase, computer opponent mode, and turn-based matches with hit and miss feedback.

- **[Knights Travails](https://github.com/ChristoferLv/top-knights-travails/)** - Shortest path algorithm for a knight on a chessboard using breadth-first search (BFS), returning the full path between origin and destination.

- **[Binary Search Trees](https://github.com/ChristoferLv/top-binary-search-trees/)** - BST implementation with balanced construction, insertion, removal, traversals, balance checking, and rebalancing.

- **[HashMap](https://github.com/ChristoferLv/top-HashMap/)** - Manual HashMap implementation with a hash function, collision handling, and automatic resizing based on load factor.

- **[Linked Lists](https://github.com/ChristoferLv/top-linked-lists)** - Implementation of the *Linked List* data structure in JavaScript, with insertion, search, index-based access, and textual representation of the list.

- **[Recursion](https://github.com/ChristoferLv/top-recursion)** - Implementation of Fibonacci (iterative and recursive) and Merge Sort algorithms for practicing recursion, divide and conquer, and algorithmic logic.

- **[Testing Practice](https://github.com/ChristoferLv/top-testing-practice)** - Unit testing practice project with Jest, covering utility functions, edge cases, and ESM configuration with Babel.

- **[Weather App](https://github.com/ChristoferLv/top-weather-app)** - Weather forecast application integrating external APIs (Visual Crossing and Giphy). Practice with asynchronous requests using Promises and async/await, dynamic DOM manipulation, and bundling with Webpack.

- **[Todo List](https://github.com/ChristoferLv/top-todo-list)** - Task management application with group organization, LocalStorage persistence, and modular JavaScript architecture using callbacks and dependency injection.

- **[Restaurant Page](https://github.com/ChristoferLv/top-restaurant-page)** - Restaurant page with dynamically rendered content via modular JavaScript and bundling with Webpack.

- **[Tic Tac Toe](https://github.com/ChristoferLv/top-tic-tac-toe)** - Two-player tic-tac-toe game. Practice with code organization using Module Pattern and Factory Functions, encapsulation, and separation of concerns.

- **[Library](https://github.com/ChristoferLv/top-library)** - Virtual library for book management. Practice with object constructors, prototypes, classes, the *Constraint Validation API*, and separation between data and DOM rendering.

- \***[Form Validation Practice](Javascript/form-validation-practice/)** - Supplementary activity from the JavaScript form validation lesson, for practicing form validation with visual error feedback and real-time validation.

### 🎨 Intermediate HTML and CSS

Projects developed in the [**Intermediate HTML and CSS**](https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css) section, focused on intermediate HTML and CSS concepts:

#### 📅 Projects (in reverse chronological order)

- **[Admin Dashboard](https://github.com/ChristoferLv/top-admin-dashboard)** - "Holy Grail" layout dashboard built entirely using CSS Grid.

- **[Sign-up Form](https://github.com/ChristoferLv/top-sign-up-form)** - Basic sign-up form exploring HTML Forms concepts and form styling with CSS.


### 🎯 Foundations

Projects developed in the [**Foundations**](https://www.theodinproject.com/paths/foundations/courses/foundations) section, focused on HTML, CSS, and basic JavaScript fundamentals:

#### 📅 Projects (in reverse chronological order)

- **[Calculator](https://github.com/ChristoferLv/top-calculator)** - Functional calculator with a graphical interface. Practice with JavaScript logic and mathematical operations.

- **[Etch-a-Sketch](https://github.com/ChristoferLv/top-etch-a-sketch)** - Interactive drawing application on a grid, simulating the classic toy. Focus on DOM manipulation and JavaScript events.

- **[Rock, Paper, Scissors](https://github.com/ChristoferLv/top-rock-paper-scissors)** - Classic game against the computer. Introduction to programming logic and conditional structures.

- **[Landing Page](https://github.com/ChristoferLv/top-landing-page)** - Modern presentation page. Practice with CSS Flexbox layout.

- **[Odin Recipes (with CSS)](Foundations/odin-recipes-css/)** - Styled version of the recipes site. Application of CSS styles to improve presentation.

- **[Odin Recipes](Foundations/odin-recipes/)** - Basic recipes site using only HTML. First project for practicing semantic HTML structure.

## Supplementary Exercises

- **[css-exercises/](css-exercises/)** - CSS-focused exercises for practicing specific concepts
- **[javascript-exercises/](javascript-exercises/)** - JavaScript exercises for deepening programming knowledge

## How to Navigate

Each project has its own README with specific usage instructions and context within the curriculum. Projects are organized in reverse chronological order, showing the most complex and recent work first.

---

🚀 **Status**: Completed ✅ — All sections of the Full Stack JavaScript path finished, from Foundations to NodeJS
