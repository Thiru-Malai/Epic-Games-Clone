import { useState } from "react";
import "./sign-up.css";

function SignUp() {
  const [name, setName] = useState("");
  function handleSubmit() {
    alert(`Thanks for registering ${name} !`);
  }
  return (
    <>
      <div className="sign-up">
        <br></br>
        <br></br>
        <div className="register">REGISTER</div>
        <div className="form">
          <form onSubmit={handleSubmit} class="submission-form">
            <table>
              <tr>
                <td>
                  <label>Name:</label>
                </td>
                <td>
                  <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email:</label>
                </td>
                <td>
                  <input name="email" type="email"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phone Number:</label>
                </td>
                <td>
                  <input name="phone" type="phonenumber"></input>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <label>Country</label>{" "}
                </td>
                <td>
                  {" "}
                  <input name="country" type="text"></input>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {" "}
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default SignUp;
