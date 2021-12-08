import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logout from "./componenets/Logout";
import { useSelector} from "react-redux";

function Linking() {
  const token = useSelector((state) => state.authentication.token);

  return (
    <>
      <div className="App">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">Form</Navbar.Brand>
            <Nav className="me-auto">
              {!token ? (
                <>
                  <Link className="mx-3" to="/login">
                    logIn
                  </Link>
                  <Link className="mx-3" to="/register">
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link className="mx-3" to="/products">
                    Products
                  </Link>
                  <Link className="mx-3" to="/locations">
                    Locations
                  </Link>
                  <Link className="mx-3" to="/transaction">
                    Transaction
                  </Link>
                  <Link className="mx-3" to="/families">
                    Families
                  </Link>
                </>
              )}
            </Nav>
          </Container>
          {token && <Logout />}
        </Navbar>
      </div>
    </>
  );
}

export default Linking;
