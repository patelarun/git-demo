import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { setUser } from "../actions";
import { requestUserLogin } from "../thunks/authentication";
import { useSelector, useDispatch } from "react-redux";

const LogInForm = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.authentication);
  const { email, password } = users.registerUser;

  const onChange = (e) => {
    const { name, value } = e.target;
    const addusers = { ...users.registerUser, [name]: value };
    dispatch(setUser(addusers));
  };

  const OnSubmit =  (e) => {
    e.preventDefault();
    if (
      !users.registerUser.email.trim() &&
      !users.registerUser.password.trim()
    ) {
      alert("Email and Password should not be empty");
    } else {
      dispatch(requestUserLogin(users.registerUser));
    }
  };

  return (
    <>
      <Form onSubmit={OnSubmit} className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(event) => onChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => onChange(event)}
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
    </>
  );
};

export default LogInForm;
