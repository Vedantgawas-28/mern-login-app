import Characters from "../components/Characters";
import RegisterForm from "../components/RegisterForm";
import BackgroundParticles from "../components/ParticlesBackground";
import "../styles/login.css";

function RegisterPage() {
  return (
    <>
      <BackgroundParticles />

      <div className="login-container">
        <div className="left-panel">
          <Characters />
        </div>

        <div className="right-panel">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
