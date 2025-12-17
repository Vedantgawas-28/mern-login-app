import Characters from "../components/Characters";
import LoginForm from "../components/LoginForm";
import BackgroundParticles from "../components/ParticlesBackground";
import "../styles/login.css";

function LoginPage() {
  return (
    <>
      {/* PARTICLES BACKGROUND */}
      <BackgroundParticles />

      {/* MAIN CONTENT */}
      <div className="login-container">
        <div className="left-panel">
          <Characters />
        </div>

        <div className="right-panel">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginPage;