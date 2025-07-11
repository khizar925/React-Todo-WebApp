import { useParams } from "react-router-dom";
import TodoItems from "../components/TodoItems";

export default function SearchResults() {
  const { query } = useParams();

  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  const filtered = todos.filter(todo =>
    todo.text.toLowerCase().includes(query.toLowerCase())
  );

  const cardStyle = {
    width: '500px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  return (
    <div style={{height: "80vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={cardStyle}>
        <h3>Search Results for: "{query}"</h3>
        <div style={{ marginTop: "20px" }}>
            {filtered.length > 0 ? (
            filtered.map((todo, index) => (
                <TodoItems key={index} text={todo.text} />
            ))
            ) : (
            <p>No results found.</p>
            )}
        </div>
        </div>
    </div>
  );
}
