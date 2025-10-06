export default function StatusBadge({ status }) {
  const colors = {
    pending: "gray",
    running: "blue",
    completed: "green",
    failed: "red"
  };
  const color = colors[status] || "gray";
  return (
    <span style={{
      backgroundColor: color,
      color: "white",
      padding: "0.2rem 0.5rem",
      borderRadius: "0.3rem",
      fontWeight: "bold"
    }}>
      {status}
    </span>
  );
}
