import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  const navigate = useNavigate();
  var user = null;
  const NavbarButtons = () => {
    user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      return (
        <ButtonGroup className="me-2">
          <Button
            variant="outline-success"
            onClick={() => navToPage("/products")}
          >
            Products
          </Button>
          <Button variant="outline-success" onClick={() => Logout("/login")}>
            Logout
          </Button>
        </ButtonGroup>
      );
    } else {
      return (
        <ButtonGroup className="me-2">
          <Button variant="outline-success" onClick={() => navToPage("/login")}>
            Login
          </Button>{" "}
          <Button
            variant="outline-success"
            onClick={() => navToPage("/register")}
          >
            Register
          </Button>
        </ButtonGroup>
      );
    }
  };

  const navToPage = (url) => {
    navigate(url);
  };
  const Logout = (url) => {
    localStorage.clear();
    navigate(url);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>The ShopStore</Navbar.Brand>
        {NavbarButtons()}
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
