import React, { useRef, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";


// Home Page
function Home() {
  return (
    <div className="card">
      <h1>React Practice Examples</h1>

      <p>
        This project demonstrates useState, useRef and React Router through
        four simple practice applications.
      </p>

      <div className="home-grid">

        <Link className="practice-card" to="/counter">
          <h2>Practice 1</h2>
          <p>Counter App - useState</p>
        </Link>

        <Link className="practice-card" to="/profile">
          <h2>Practice 2</h2>
          <p>Student Profile - useRef</p>
        </Link>

        <Link className="practice-card" to="/students">
          <h2>Practice 3</h2>
          <p>Student Portal - Routing</p>
        </Link>

        <Link className="practice-card" to="/tasks">
          <h2>Practice 4</h2>
          <p>Task Manager - useState + useRef + Routing</p>
        </Link>

      </div>
    </div>
  );
}


// Practice 1 - Counter
function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div className="card small-card">

      <h1>Counter App</h1>

      <p className="count">{count}</p>

      <div className="button-row">

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

      </div>

      <p className="note">
        This practice uses useState to store the counter value.
      </p>

    </div>
  );
}


// Practice 2 - Student Profile
function Profile() {

  const nameInput = useRef(null);

  const [name, setName] = useState("");

  function focusName() {
    nameInput.current.focus();
  }

  function clearName() {
    setName("");
    nameInput.current.focus();
  }

  return (
    <div className="card small-card">

      <h1>Student Profile</h1>

      <h2>Student Profile Form</h2>

      <label>Student Name</label>

      <input
        ref={nameInput}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <div className="button-row">

        <button onClick={focusName}>
          Focus Name
        </button>

        <button onClick={clearName}>
          Clear
        </button>

      </div>

      <h3>
        {name ? `Hello, ${name}!` : "Enter your name above."}
      </h3>

      <p className="note">
        The Focus Name button uses useRef to focus the input.
      </p>

    </div>
  );
}


// Practice 3 - Student Portal Main Page
function StudentPortal() {

  return (
    <div className="card">

      <h1>Student Portal</h1>

      <p>
        Choose a page below:
      </p>

      <div className="home-grid">

        <Link className="practice-card" to="/students/list">

          <h2>Students</h2>

          <p>
            View the list of students.
          </p>

        </Link>


        <Link className="practice-card" to="/students/about">

          <h2>About</h2>

          <p>
            Learn more about the Student Portal.
          </p>

        </Link>

      </div>

    </div>
  );
}


// Practice 3 - Students Page
function Students() {

  const students = [
    "Ayush",
    "Rahul",
    "Priya"
  ];

  return (
    <div className="card small-card">

      <h1>Students</h1>

      <p>
        Students enrolled in the portal:
      </p>

      <ul className="student-list">

        {students.map((student, index) => (
          <li key={index}>
            {student}
          </li>
        ))}

      </ul>

    </div>
  );
}


// Practice 3 - About Page
function About() {

  return (
    <div className="card small-card">

      <h1>About</h1>

      <p>
        This Student Portal is a simple React application
        that demonstrates page navigation using React Router.
      </p>

    </div>
  );
}


// Practice 4 - Task Manager
function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [task, setTask] = useState("");

  const taskInput = useRef(null);


  function addTask() {

    if (task.trim() === "") {

      taskInput.current.focus();

      return;
    }

    setTasks([...tasks, task]);

    setTask("");

    taskInput.current.focus();
  }


  function clearInput() {

    setTask("");

    taskInput.current.focus();
  }


  return (
    <div className="card small-card">

      <h1>Task Manager</h1>

      <input
        ref={taskInput}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />

      <div className="button-row">

        <button onClick={addTask}>
          Add Task
        </button>

        <button onClick={clearInput}>
          Clear Input
        </button>

      </div>

      <h2>Task List</h2>

      {tasks.length === 0 ? (

        <p className="note">
          No tasks added yet.
        </p>

      ) : (

        <ul className="task-list">

          {tasks.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}

        </ul>

      )}

    </div>
  );
}


// Main App
function App() {

  return (
    <>

      <header>

        <div className="nav">

          <Link className="logo" to="/">
            React Practice
          </Link>

          <nav>

            <Link to="/">
              Home
            </Link>

            <Link to="/counter">
              Counter
            </Link>

            <Link to="/profile">
              Profile
            </Link>

            <Link to="/students">
              Students
            </Link>

            <Link to="/tasks">
              Tasks
            </Link>

          </nav>

        </div>

      </header>


      <main>

        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Practice 1 */}
          <Route
            path="/counter"
            element={<Counter />}
          />

          {/* Practice 2 */}
          <Route
            path="/profile"
            element={<Profile />}
          />

          {/* Practice 3 - Student Portal */}
          <Route
            path="/students"
            element={<StudentPortal />}
          />

          {/* Practice 3 - Students */}
          <Route
            path="/students/list"
            element={<Students />}
          />

          {/* Practice 3 - About */}
          <Route
            path="/students/about"
            element={<About />}
          />

          {/* Practice 4 */}
          <Route
            path="/tasks"
            element={<Tasks />}
          />

        </Routes>

      </main>


      <footer>
        React Practice Submission
      </footer>

    </>
  );
}

export default App;