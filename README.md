# 🚀 Cognifyz Full Stack Development Internship  
## Internship Project Repository (Tasks 1–5)

This repository contains the first **five completed tasks** of the Full Stack Development Internship.

Each task is structured as an independent mini-project to ensure:

- Clean separation of concerns  
- Independent execution  
- Professional project organization  
- Proper Git version control per task  

The work demonstrates practical implementation of:

- Frontend Development  
- Backend Development  
- Server-Side Rendering  
- REST APIs  
- Client-Side Routing  
- Validation Layers  
- CRUD Architecture  

---

# 📂 Repository Structure
```bash
cognifyz-fullstack-internship/
│
├── task-1-html-ssr/
├── task-2-validation-storage/
├── task-3-responsive-ui/
├── task-4-dom-routing/
├── task-5-rest-api-crud/
│
└── README.md
```


Each task is a standalone project and can be run independently.

---

# 🛠 Tech Stack Used

## Frontend
- HTML5
- CSS3
- Advanced CSS (Hover effects, transitions, media queries)
- Bootstrap 5
- JavaScript (ES6+)
- DOM Manipulation
- LocalStorage
- Fetch API

## Backend
- Node.js
- Express.js
- EJS (Server-Side Rendering)
- REST API Architecture

## Development Tools
- Git
- GitHub
- Nodemon
- VS Code

---

# ✅ TASK 1 – HTML + Express + EJS (Server-Side Rendering)

## Objective
Create a basic web application with:
- HTML form
- Express backend
- POST endpoint
- Server-side rendering using EJS

## Implementation Details
- Built an Express server handling GET and POST routes.
- Created a form to collect user input (name, email, message).
- Implemented middleware to parse form data.
- Used EJS template engine to render dynamic content.
- Added server-side validation to prevent empty submissions.
- Displayed submitted data on a success page using SSR.

## Key Concepts Practiced
- Express server setup
- Routing (GET/POST)
- Middleware usage
- Template rendering
- Basic validation
- Static file serving

---

# ✅ TASK 2 – Client-Side & Server-Side Validation + Temporary Storage

## Objective
Enhance form handling with:
- Inline CSS styling
- Inline JavaScript validation
- Server-side validation
- Temporary in-memory storage

## Implementation Details
- Created a registration form with:
  - Name
  - Email
  - Phone
  - Password
  - Confirm Password
- Implemented client-side validation using inline JavaScript:
  - Email format validation
  - Phone number validation
  - Password strength validation
  - Password confirmation match
- Added server-side validation to prevent bypassing client rules.
- Stored successful submissions in an in-memory array.
- Created a separate route to display stored submissions.

## Key Concepts Practiced
- Two-layer validation architecture
- Input sanitization
- Error handling
- Server-side data management
- Temporary storage logic

---

# ✅ TASK 3 – Responsive UI + Advanced CSS + Bootstrap

## Objective
Create a responsive and visually polished user interface using:
- Bootstrap grid system
- Custom CSS styling
- Media queries

## Implementation Details
- Built a responsive landing page layout.
- Implemented:
  - Navbar with collapse functionality
  - Hero section
  - Card grid layout
  - Pricing section
  - Footer
- Used Bootstrap components and utilities.
- Added custom CSS for:
  - Hover animations
  - Shadows
  - Transitions
  - Responsive adjustments
- Implemented search filter and modal interaction.

## Key Concepts Practiced
- Responsive design principles
- Mobile-first design
- Bootstrap integration
- UI polish and visual hierarchy
- Media queries
- Interactive components

---

# ✅ TASK 4 – Single Page Application (SPA) + Dynamic DOM + Routing

## Objective
Build a Single Page Application with:
- Client-side routing
- Dynamic DOM manipulation
- Complex validation logic
- LocalStorage persistence

## Implementation Details
- Built a Task Manager SPA.
- Implemented client-side routing using `history.pushState`.
- Created dynamic rendering logic based on route.
- Added complex validation:
  - Minimum length enforcement
  - Duplicate prevention
- Implemented:
  - Add task
  - Delete task
  - Toggle completion
  - Filter (All / Completed / Pending)
- Stored tasks in LocalStorage for persistence.

## Key Concepts Practiced
- SPA architecture
- Client-side routing
- Dynamic UI rendering
- State management
- LocalStorage persistence
- Event delegation
- DOM creation and manipulation

---

# ✅ TASK 5 – REST API + CRUD + Frontend Consuming API

## Objective
Build a RESTful API and connect it with a frontend application.

## Backend (Express REST API)

Created API endpoints:

- `GET /api/notes` – Retrieve all notes  
- `GET /api/notes/:id` – Retrieve single note  
- `POST /api/notes` – Create note  
- `PUT /api/notes/:id` – Update note  
- `DELETE /api/notes/:id` – Delete note  

### Features
- Proper HTTP status codes
- Input validation
- JSON request handling
- In-memory data storage
- Error handling responses

## Frontend

- Built a Notes Manager UI.
- Used Fetch API to interact with backend.
- Implemented:
  - Create note
  - Edit note
  - Delete note
  - Refresh list
- Added client-side validation before sending requests.
- Implemented safe HTML rendering to prevent injection.
- Provided user feedback via success/error alerts.

## Key Concepts Practiced
- REST architecture
- CRUD operations
- API design
- Fetch API
- JSON handling
- Error handling patterns
- Frontend-backend integration
- State synchronization

---

# 📌 What This Internship Demonstrates

This repository reflects practical understanding of:

- Full-stack architecture
- Separation of frontend and backend concerns
- Validation layering
- RESTful service design
- CRUD data handling
- SPA fundamentals
- Responsive design
- Git-based project management
- Incremental feature development
- Professional folder structure discipline

---

# ▶️ How to Run Each Task

## Node-Based Tasks (1, 2, 5)

Navigate into respective folder:

```bash
npm install
npm run dev
```


Then open the specified localhost port in your browser.

---

## Frontend-Only Tasks (3, 4)

Open `index.html` in browser  
or use Live Server extension in VS Code.

---

# 📈 Internship Progress

✔ Completed 5 out of 8 assigned tasks  
✔ Followed clean Git commit workflow  
✔ Structured each task independently  
✔ Maintained professional repository standards  

---

# 👨‍💻 Author

**Dhruv Bamal**  
Aspiring Full Stack Developer  
Focused on building scalable and structured web applications.  

GitHub: https://github.com/dhruv-bamal  
LinkedIn: https://www.linkedin.com/in/dhruv-bamal-9314283a8/