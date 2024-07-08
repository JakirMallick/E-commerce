import Login from "../components/Login";
import { useState } from "react";
import CreateAccount from "../components/CreateAccount";
function SignUp() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="signup">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <CreateAccount onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default SignUp;
