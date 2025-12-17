import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API = process.env.REACT_APP_API_URL;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const typingTimeout = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    document.body.classList.remove("happy", "sad");

    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        document.body.classList.add("sad");
        toast.error(data.error || "Invalid email or password ❌");
        setLoading(false);
        return;
      }

      // ✅ Save JWT
      localStorage.setItem("token", data.token);

      document.body.classList.add("happy");
      toast.success("Login successful 🎉");

      navigate("/dashboard");
    } catch (err) {
      toast.error("Server not responding. Try again later ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Welcome back</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);

          document.body.classList.add("typing");
          clearTimeout(typingTimeout.current);
          typingTimeout.current = setTimeout(() => {
            document.body.classList.remove("typing");
          }, 500);
        }}
        onFocus={() => document.body.classList.add("look-down")}
        onBlur={() => {
          document.body.classList.remove("look-down");
          document.body.classList.remove("typing");
        }}
        disabled={loading}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <div className="divider">
        <span>OR</span>
      </div>

      <button
        type="button"
        className="google-btn"
        onClick={() => toast.info("Google login coming soon 🚀")}
        disabled={loading}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google"
        />
        Continue with Google
      </button>

      <p className="hint">
        Don’t have an account?{" "}
        <span onClick={() => navigate("/register")}>Sign up</span>
      </p>
    </form>
  );
}

export default LoginForm;
