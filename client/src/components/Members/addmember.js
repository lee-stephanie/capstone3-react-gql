import React, { useState } from "react";
import {
	Form,
	Col,
	Button,
	Container,
	Modal,
	Popover,
	OverlayTrigger
} from "react-bootstrap";

const popover1 = (
	<Popover id="popover-basic">
		<Popover.Content>
			<strong>Add New Member</strong>
		</Popover.Content>
	</Popover>
);

const AddMember = props => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container>
			<OverlayTrigger trigger="hover" placement="top" overlay={popover1}>
				<Button variant="info" onClick={handleShow}>
					<i class="fas fa-user-plus"></i>
				</Button>
			</OverlayTrigger>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>New Member Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="lname">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
						<Form.Row>
							<Form.Group as={Col} controlId="fname">
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group as={Col} controlId="fname">
								<Form.Label>Nickname</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</Form.Row>

						<Form.Group controlId="bday">
							<Form.Label>Birthday</Form.Label>
							<Form.Control type="date" placeholder="MM/DD/YY" />
						</Form.Group>
						<Form.Group controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" />
						</Form.Group>
						<Form.Group controlId="formGridEmail">
							<Form.Label>Contact No.</Form.Label>
							<Form.Control type="text" />
						</Form.Group>

						{/*			<Form.Group id="formGridCheckbox">
							<Form.Check
								type="checkbox"
								label="I hereby allow Valiant MMA & Fitness Gym to record my data for membership purposes."
							/>
						</Form.Group>*/}

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default AddMember;
