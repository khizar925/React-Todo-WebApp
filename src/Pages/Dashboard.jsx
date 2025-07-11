import { useNavigate } from "react-router-dom";
import TodoCard from "../components/TodoCard";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [todoText, setTodoText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [todos, setTodos] = useState([]);

  const fetchData = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(stored);
  }, []);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const addTodo = () => {
    if (todoText.trim()) {
      const newTodo = { text: todoText };
      const updatedTodos = [newTodo, ...todos];
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodoText('');
    }
  };

  const containerStyle = {
    height: "86vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  };

  const cardStyle = {
    width: "500px",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const welcomeStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    margin: 0,
  };

  const btnStyle = {
    backgroundColor: '#3D74B6',
    padding: '6px 14px',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  const lineStyle = {
    height: "1px",
    backgroundColor: "#ccc",
    margin: "10px 0 20px"
  };

  const inputGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px'
  };

  const inputStyle = {
    flex: 1,
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px'
  };

  const addBtnStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>
          <p style={welcomeStyle}>Welcome, {fetchData?.firstName || "User"}</p>
          <button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              localStorage.removeItem("todos");

              navigate("/");
            }}
            style={btnStyle}
          >
            Logout
          </button>
        </div>

        {/* Add Todo */}
        <div style={inputGroupStyle}>
          <input
            type="text"
            value={todoText}
            onChange={handleChange}
            placeholder="Enter your task..."
            style={inputStyle}
          />
          <button onClick={addTodo} style={addBtnStyle}>Add Todo</button>
        </div>

        {/* Search Todo */}
        <div style={inputGroupStyle}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search todo..."
            style={inputStyle}
          />
          <button
            onClick={() => {
              if (searchQuery.trim()) navigate(`/search/${searchQuery}`);
            }}
            style={{ ...btnStyle, padding: '8px 12px' }}
          >
            Search
          </button>
        </div>

        <div style={lineStyle}></div>
        <TodoCard todos={todos} />
      </div>
    </div>
  );
}
