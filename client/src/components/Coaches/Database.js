import React, {useState, useEffect} from "react";
import { Table, 
	Popover, 
	OverlayTrigger, 
	Button, 
	Form,
	Col,
	Container,
	Modal


 } from "react-bootstrap";

import AddMember from "./addmember";

import Swal from "sweetalert2";
//lodash to use compose

import { flowRight as compose } from "lodash";

//ApolloServer
import { graphql } from "react-apollo";

//import the query
import { getCoachesQuery, getCoachQuery } from "../../queries/queries";

//import the mutation 
import {updateCoachMutation } from "../../queries/mutation";
import {deleteCoachMutation} from "../../queries/mutation";





const popoverB = (
	<Popover id="popover-basic">
		<Popover.Content>
			<strong>Delete Member</strong>
		</Popover.Content>
	</Popover>
);

const CoachDatabase = props => {
		console.log(props);

	//retrieve the data
	const memberData = props.getCoachesQuery.getCoaches
		? props.getCoachesQuery.getCoaches
		: [];

	if (props.getCoachesQuery.loading) {
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

	const deleteCoachHandler = e => {
		console.log("deleting a coach...");
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
				props.deleteCoachMutation({
					variables: { id: id },
					refetchQueries: [
						{
							query: getCoachesQuery
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

	let coach = props.getCoachesQuery.getCoach
		? props.getCoachesQuery.getCoach
		: {};
	console.log(coach);

	//hooks for modal close and show
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//useEffect for hooks to about delay

	useEffect(() => {
		console.log("firstName :" + firstName);
		console.log("lastName :" + lastName);
		console.log("contact :" + contact);
	});

	//hooks for input fields data.


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

	if (!props.getCoachesQuery.loading) {
		const setDefaultValues = () => {
			setFirstName(coach.firstName);
			setLastName(coach.lastName);
			setContact(coach.contact);
		};
	}
//effects 

const popover = (
	<Popover id="popover-basic">
		<Popover.Content>
			<strong>Update Coach</strong>
		</Popover.Content>
	</Popover>
);
	const updateCoach = e => {
		e.preventDefault();

		//register to system

		let updatedCoach = {
			id: props.match.params.id,
			firstName: firstName,
			lastName: lastName,
			contact: contact,
	
		};

		

			props.updateCoachMutation({
				variables: updatedCoach
			}).then(res => {
				console.log(res);
			});

			Swal.fire({
			title: "coach updated",
			text: "coach has been updated",
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
						<th>First Name</th>
						<th>Last Name</th>
						<th>Contact No.</th>
						<th colspan="3">Actions</th>
					</tr>
				</thead>
				<tbody>
					{memberData.map(coach => {
						/*	console.log(member.birthday);*/
						return (
							<tr key="coach.id">
								<td>{coach.firstName}</td>
								<td>{coach.lastName}</td>
								<td>{coach.contact}</td>

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
					<Modal.Title>Update Coach Form</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form key={coach.id} onSubmit={updateCoach}>
						

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

						<Form.Group controlId="contact">
							<Form.Label>Contact No.</Form.Label>
							<Form.Control
								type="text"
								onChange={contactChangeHandler}
								value={contact}
							/>
						</Form.Group>


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
										<Button variant="danger" onClick={deleteCoachHandler} id={coach.id}>
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
	graphql(getCoachesQuery, { name: "getCoachesQuery" }),
	graphql(deleteCoachMutation, { name: "deleteCoachMutation" }), 
	graphql(updateCoachMutation, { name: "updateCoachMutation" }),
/*	graphql(getCoachQuery, {
		options: props => {
			// retrieve the wildcard id param
			console.log(props.match.params.id);
			return {
				variables: {
					id: props.match.params.id
				}
			};
		},
		name: "getCoachQuery"
	})*/


	)(
	CoachDatabase);
