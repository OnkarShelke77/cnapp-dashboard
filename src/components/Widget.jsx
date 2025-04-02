export default function Widget({ title, content, onRemove }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "5px"
      }}
    >
      <h3 style={{ margin: "0", fontSize: "18px", color: "#333" }}>{title}</h3>
      <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>{content}</p>
      <button
        onClick={onRemove}
        style={{
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          alignSelf: "flex-start",
          marginTop: "5px",
        }}
      >
        ❌ Remove
      </button>
    </div>
  );
}
