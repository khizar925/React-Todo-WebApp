import TodoItems from "./TodoItems";
export default function TodoCard({todos}) {
    const cardStyle = {
        width: '450px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        height: "20vh",
        overflowY:"auto"
    };
  return (
    <div style={cardStyle}>
        {todos.length === 0 ? (<div style={{height:"100%",display: "flex", justifyContent: "center", alignItems:"center"}}><p>No Todos Yet</p></div>) : (
          todos.map((todos, index) => <TodoItems key={index} text={todos.text}/>)
        )}
    </div>
  )
}