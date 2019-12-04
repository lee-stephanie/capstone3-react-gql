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
						<NavDropdown.Item href="#action/3.1">
							Database
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.1">
							Add Member
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.1">
							Update Member
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.1">
							Delete Member
						</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Coach" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">
							Database
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.1">
							Add Coach
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.1">
							Update Coach
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.1">
							Delete Coach
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#deets">Logout</Nav.Link>
					<Nav.Link eventKey={2} href="#memes">
						Hi, username!
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Menu;
