import { useState } from "react";

export const useTheme = () => ({ theme: "dark" });
export const ThemeProvider = ({ children }) => children;

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.isValid) {
      alert("The Email that you have entered is wrong!!");
      return;
    }
    if (password.length < 8) {
      alert("The password length must be at least 8");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="First">
            <label> First Name</label>
            <input
              required
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            ></input>
          </div>
          <div className="Last">
            <label> Last Name</label>
            <input
              required
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            ></input>
          </div>
          <div className="Email">
            <label>Email ID</label>
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="pass">
            <label>Password</label>
            <input
              required
              type="password"
              min="8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button type="submit">Create Account</button>
        </fieldset>
      </form>
    </div>
  );
}