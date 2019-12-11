import React from "react";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = props => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#features">Martial Arts</Nav.Link>
					<Nav.Link href="#pricing">Membership</Nav.Link>
				</Nav>
				<Nav>
					<NavDropdown title="Member" id="collasible-nav-dropdown">
						<NavDropdown.Item href="/">
							Database
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Coach" id="collasible-nav-dropdown">
						<NavDropdown.Item href="/CoachDatabase">
							Database
						</NavDropdown.Item>
					</NavDropdown>

				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Menu;
