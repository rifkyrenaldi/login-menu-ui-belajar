import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="#home">Pertamina Mini</Navbar.Brand>
          <Nav className=" text-dark ms-2 mb-lg-0">
            <Nav.Link href="#Pengadaan">Pengadaan</Nav.Link>
            <Nav.Link href="#Karir">Karir</Nav.Link>
            <Nav.Link href="#Hubungi Kami">Hubungi Kami</Nav.Link>
          </Nav>
          <>
            <Button variant="secondary" size="mb" active>
              Register Lembaga Penyalur
            </Button>
          </>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;
