export default function TodoItems({text}) {
    const cardStyle = {
      width: '90%',
      padding: '10px',
      marginBottom: '8px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px'
    };
  return (
    <div style={cardStyle}>
      <span style={{fontSize: "18px"}}>{text}</span>
    </div>
  );
}
