import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("token");
  toast.info("Logged out successfully 👋");
  navigate("/");
};


  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        color: "#e8faff",
        background: "transparent",
      }}
    >
      <h1>Dashboard</h1>
      <p>You are logged in 🔐</p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          borderRadius: "24px",
          border: "none",
          background: "linear-gradient(135deg, #ff4d6d, #ff8fa3)",
          color: "#001018",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
