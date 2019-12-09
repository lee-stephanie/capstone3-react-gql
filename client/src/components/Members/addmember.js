import React, { useState, useEffect } from "react";
import {
	Form,
	Col,
	Button,
	Container,
	Modal,
	Popover,
	OverlayTrigger
} from "react-bootstrap";

import { toBase64, nodeServer } from "../../function.js";

//lodash to use compose

import { flowRight as compose } from "lodash";

//ApolloServer
import { graphql } from "react-apollo";

//mutations
import { createMemberMutation } from "../../queries/mutation";
import { getMembersQuery } from "../../queries/queries";

//effects
const popover1 = (
	<Popover id="popover-basic">
		<Popover.Content>
			<strong>Add New Member</strong>
		</Popover.Content>
	</Popover>
);

const AddMember = props => {
	//hooks for modal close and show
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//useEffect for hooks to about delay

	useEffect(() => {
		console.log("membership date :" + memberSince);
		console.log("firstName :" + firstName);
		console.log("lastName :" + lastName);
		console.log("nickName :" + nickName);
		console.log("setbday :" + bday);
		console.log("contact :" + contact);
	});

	//hooks for input fields data.

	//membership date
	const [memberSince, setMemberSince] = useState("");

	const memberSinceChangeHandler = e => {
		console.log(e.target.value);
		setMemberSince(e.target.value);
	};

	//firstName
	const [firstName, setFirstName] = useState("");
	const fnameChangeHandler = e => {
		console.log(e.target.value);
		setFirstName(e.target.value);
	};

	//lastName

	const [lastName, setLastName] = useState("");
	const lnameChangeHandler = e => {
		console.log(e.target.value);
		setLastName(e.target.value);
	};

	//nickName

	const [nickName, setnickName] = useState("");
	const nickChangeHandler = e => {
		console.log(e.target.value);
		setnickName(e.target.value);
	};

	//bday

	const [bday, setbday] = useState("");
	const bdayChangeHandler = e => {
		console.log(e.target.value);
		setbday(e.target.value);
	};

	//email

	const [email, setEmail] = useState("");
	const emailChangeHandler = e => {
		console.log(e.target.value);
		setEmail(e.target.value);
	};

	//contact

	const [contact, setContact] = useState("");
	const contactChangeHandler = e => {
		console.log(e.target.value);
		setContact(e.target.value);
	};

	//photo

	const [imagePath, setImagePath] = useState("");
	const fileRef = React.createRef();
	console.log(fileRef);

	const imagePathHandler = e => {
		/*console.log(fileRef.current.files[0]);*/
		toBase64(fileRef.current.files[0]).then(encodedFile => {
			console.log(encodedFile);
			setImagePath(encodedFile);
		});
	};

	//add a new key-value pair field for newMember. Create a key imageLocation
	//and assign the value of the imagePath state as its value.

	//addmember

	const addMember = e => {
		e.preventDefault();

		//register to system

		let newMember = {
			memberSince: memberSince,
			nickName: nickName,
			firstName: firstName,
			lastName: lastName,
			birthday: bday,
			contact: contact,
			email: email,
			imageLocation: imagePath
		};

		console.log(newMember.imagePath);

		props.createMemberMutation({
			variables: newMember,
			refetchQueries: [
				{
					query: getMembersQuery
				}
			]
		});

		setFirstName("");
		setLastName("");
		setnickName("");
		setbday("");
		setEmail("");
		setContact("");
	};

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
					<Form onSubmit={addMember}>
						<Form.Group controlId="profilepic">
							<Form.Label>Photo</Form.Label>
							<Form.Control
								type="file"
								accept="image/jpg"
								ref={fileRef}
								onChange={imagePathHandler}
							/>
						</Form.Group>

						<Form.Group controlId="lname">
							<Form.Label>Membership Date</Form.Label>
							<Form.Control
								type="date"
								onChange={memberSinceChangeHandler}
								value={memberSince}
							/>
						</Form.Group>
						<Form.Row>
							<Col md={4}>
								<Form.Group controlId="lname">
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										type="text"
										onChange={lnameChangeHandler}
										value={lastName}
									/>
								</Form.Group>
							</Col>
							<Col md={8}>
								<Form.Group controlId="fname">
									<Form.Label>First Name</Form.Label>
									<Form.Control
										type="text"
										onChange={fnameChangeHandler}
										value={firstName}
									/>
								</Form.Group>
							</Col>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId="nick">
								<Form.Label>Nickname</Form.Label>
								<Form.Control
									type="text"
									onChange={nickChangeHandler}
									value={nickName}
								/>
							</Form.Group>
							<Form.Group controlId="bday">
								<Form.Label>Birthday</Form.Label>
								<Form.Control
									type="date"
									placeholder="MM/DD/YY"
									onChange={bdayChangeHandler}
									value={bday}
								/>
							</Form.Group>
						</Form.Row>

						<Form.Group controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								onChange={emailChangeHandler}
								value={email}
							/>
						</Form.Group>
						<Form.Group controlId="contact">
							<Form.Label>Contact No.</Form.Label>
							<Form.Control
								type="text"
								onChange={contactChangeHandler}
								value={contact}
							/>
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

export default compose(
	graphql(createMemberMutation, { name: "createMemberMutation" }),
	graphql(getMembersQuery, { name: "getMembersQuery" })
)(AddMember);
