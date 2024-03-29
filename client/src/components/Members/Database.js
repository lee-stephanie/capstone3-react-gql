import React, {useState, useEffect} from "react";
import { Table, 
	Popover, 
	OverlayTrigger, 
	Button, 
	Form,
	Col,
	Container,
	Modal,


 } from "react-bootstrap";

import AddMember from "./addmember";

import Swal from "sweetalert2";
//lodash to use compose

import { flowRight as compose } from "lodash";

//ApolloServer
import { graphql } from "react-apollo";

//import the query
import { getMembersQuery, getMemberQuery } from "../../queries/queries";

//import the mutation 
import { updateMemberMutation } from "../../queries/mutation";
import {deleteMemberMutation} from "../../queries/mutation";





const popoverB = (
	<Popover id="popover-basic">
		<Popover.Content>
			<strong>Delete Member</strong>
		</Popover.Content>
	</Popover>
);

const MemberDatabase = props => {
		console.log(props);

	//retrieve the data
	const memberData = props.getMembersQuery.getMembers
		? props.getMembersQuery.getMembers
		: [];

	if (props.getMembersQuery.loading) {
			let timerInterval;
			Swal.fire({
				title: "Fetching members...",
				timer: 1000,
				timerProgressBar: true,
				onBeforeOpen: () => {
					Swal.showLoading();
				},
				onClose: () => {
					clearInterval(timerInterval);
				}
			}).then(result => {
				if (
					/* Read more about handling dismissals below */
					result.dismiss === Swal.DismissReason.timer
				) {
					console.log("I was closed by the timer"); // eslint-disable-line
				}
			});
		}

	const deleteMemberHandler = e => {
		console.log("deleting a member...");
		console.log(e.target.id);
		let id = e.target.id;

		Swal.fire({
			title: "Are you sure you want to delete?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then(result => {
			if (result.value) {
				props.deleteMemberMutation({
					variables: { id: id },
					refetchQueries: [
						{
							query: getMembersQuery
						}
					]
				});
				Swal.fire(
					"Deleted!",
					"The member has been deleted.",
					"success"
				);
			}
		});


	};

	//update

	let member = props.getMemberQuery.getMember
		? props.getMemberQuery.getMember
		: {};
	console.log(member);

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


	// if (!props.getMemberQuery.loading) {
	// 	const setDefaultValues = () => {
	// 		console.log(member.teamId);
	// 		setMemberSince(member.MemberSince);
	// 		setnickName(member.nickName);
	// 		setFirstName(member.firstName);
	// 		setLastName(member.lastName);
	// 		setEmail(member.email);
	// 		setbday(member.bday);
	// 		setContact(member.contact);
	// 	};
	// }

			if (!props.getMemberQuery.loading) {
		const setDefaultValues = () => {
			console.log(member.teamId);
			setMemberSince(member.MemberSince);
			setnickName(member.nickName);
			setFirstName(member.firstName);
			setLastName(member.lastName);
			setEmail(member.email);
			setbday(member.bday);
			setContact(member.contact);
		};
	}
//effects 

const popover = (
	<Popover id="popover-basic">
		<Popover.Content>
			<strong>Update Member</strong>
		</Popover.Content>
	</Popover>
);
	const updateMember = e => {
		e.preventDefault();

		//register to system

		let updatedMember = {
			id: props.match.params.id,
			memberSince: memberSince,
			nickName: nickName,
			firstName: firstName,
			lastName: lastName,
			birthday: bday,
			contact: contact,
			email: email,
		
		};

		

			props.updateMemberMutation({
				variables: updatedMember
			}).then(res => {
				console.log(res);
			});

			Swal.fire({
			title: "member updated",
			text: "member has been updated",
			type: "success",

			// first approach
			html:
				'<a href="/" class="button is-success">Go back to members </a>',
			showCancelButton: false,
			showConfirmButton: false

			// or
			// confirmButtonText:
			// '<a href="/" class="has-text-white">Go back to members </a>'
		});
	};




	return (
		<div>
			<Table striped borderless hover responsive="sm" variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Member Since</th>
						<th>Nickname</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Birthday</th>
						<th>Contact No.</th>
						<th>E-mail</th>
						<th colspan="3">Actions</th>
					</tr>
				</thead>
				<tbody>
					{memberData.map(member => {
						/*	console.log(member.birthday);*/
						return (
							<tr key="member.id">
								<td>2</td>
								<td>{member.memberSince}</td>
								<td>{member.nickName}</td>
								<td>{member.firstName}</td>
								<td>{member.lastName}</td>
								<td>{member.birthday}</td>
								<td>{member.contact}</td>
								<td>{member.email}</td>

								<td>
								<Container>
				<OverlayTrigger
					trigger="hover"
					placement="top"
					overlay={popover}
				>
					<Button variant="success" onClick={handleShow} id="updateModal">
						<i className="fas fa-user-edit"></i>
					</Button>
				</OverlayTrigger>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update Member Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form key={member.id} onSubmit={updateMember}>
						

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
								</td>
								<td>
									<OverlayTrigger
										trigger="hover"
										placement="top"
										overlay={popoverB}
									>
										<Button variant="danger" onClick={deleteMemberHandler} id={member.id}>
											<i className="fas fa-user-minus"></i>
										</Button>
									</OverlayTrigger>
								</td>
								<td>
									<AddMember />
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default compose(
	graphql(getMembersQuery, { name: "getMembersQuery" }),
	graphql(deleteMemberMutation, { name: "deleteMemberMutation" }), 
	graphql(updateMemberMutation, { name: "updateMemberMutation" }),
	graphql(getMemberQuery, {
		options: props => {
			// retrieve the wildcard id param
			console.log(props.match.params.id);
			return {
				variables: {
					id: props.match.params.id
				}
			};
		},
		name: "getMemberQuery"
	})


	)(
	MemberDatabase);
