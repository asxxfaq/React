import React, { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [activeTab, setActiveTab] = useState("pending"); // pending/completed tabs

  // Add or update task
  const addTask = () => {
    if (task.trim() === "") return;

    if (editId) {
      setTasks(
        tasks.map((t) =>
          t.id === editId ? { ...t, text: task } : t
        )
      );
      setEditId(null);
    } else {
      setTasks([
        ...tasks,
        { id: Date.now(), text: task, completed: false },
      ]);
    }
    setTask("");
  };

  // Mark task completed
  const markCompleted = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: true } : t
      )
    );
  };

  // Edit pending task
  const editTask = (id, text, completed) => {
    if (completed) return;
    setTask(text);
    setEditId(id);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Filter based on tab
  const pendingTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div style={styles.container}>
      <h2>To-Do List</h2>

      {/* INPUT SECTION */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* TABS */}
      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab("pending")}
          style={{
            ...styles.tabBtn,
            background: activeTab === "pending" ? "#4caf50" : "#ccc",
            color: activeTab === "pending" ? "#fff" : "#000",
          }}
        >
          Pending
        </button>

        <button
          onClick={() => setActiveTab("completed")}
          style={{
            ...styles.tabBtn,
            background: activeTab === "completed" ? "#4caf50" : "#ccc",
            color: activeTab === "completed" ? "#fff" : "#000",
          }}
        >
          Completed
        </button>
      </div>

      {/* LIST DISPLAY */}
      <ul style={styles.list}>
        {(activeTab === "pending" ? pendingTasks : completedTasks).map(
          (item) => (
            <li key={item.id} style={styles.listItem}>
              <input
                type="checkbox"
                disabled={item.completed}
                onChange={() => markCompleted(item.id)}
              />

              <span
                style={{
                  marginLeft: "10px",
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "green" : "black",
                  flex: 1,
                }}
              >
                {item.text}
              </span>

              {/* Edit button only pending */}
              {!item.completed && activeTab === "pending" && (
                <button
                  onClick={() =>
                    editTask(item.id, item.text, item.completed)
                  }
                  style={styles.editBtn}
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => deleteTask(item.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    width: "420px",
    margin: "30px auto",
    padding: "20px",
    borderRadius: "10px",
    background: "#f7f7f7",
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "8px 15px",
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  tabBtn: {
    padding: "8px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  editBtn: {
    background: "blue",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ToDo;
