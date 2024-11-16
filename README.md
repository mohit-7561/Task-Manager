# Task Manager App

A simple task manager application where users can add, delete, and mark tasks as completed. The app uses `localStorage` to persist data across page reloads.

## Features

- **Add a task** with a title and priority.
- **Sort tasks** by Title, Priority, or Completion status.
- **Search tasks** by title.
- **Mark tasks** as completed or incomplete.
- **Delete tasks**, with changes reflected in `localStorage`.

## Setup and Launch Process

1. **Clone this repository**:

` git clone https://github.com/yourusername/task-manager.git`

2. Navigate to the project directory:

`cd task-manager`

3. Install dependencies:

`npm install`

4. Run the app:

`npm start`

`The application will launch at http://localhost:3000`

## Assumptions Made During Development

- Data will be stored in localStorage and persist even after page reloads.
- No user authentication or authorization is required for this simple task manager.
