import React from "react";
import { Table, Popover, OverlayTrigger, Button } from "react-bootstrap";

import AddMember from "./addmember";

//lodash to use compose

import { flowRight as compose } from "lodash";

//ApolloServer
import { graphql } from "react-apollo";

//import the query
import { getMembersQuery } from "../../queries/queries";

const popover = (
	<Popover id="popover-basic">
		<Popover.Content>
			<strong>Update Member</strong>
		</Popover.Content>
	</Popover>
);

const popoverB = (
	<Popover id="popover-basic">
		<Popover.Content>
			<strong>Delete Member</strong>
		</Popover.Content>
	</Popover>
);

const MemberDatabase = props => {
	/*	console.log(props);*/

	//retrieve the data
	const memberData = props.getMembersQuery.getMembers
		? props.getMembersQuery.getMembers
		: [];

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
									<OverlayTrigger
										trigger="hover"
										placement="top"
										overlay={popover}
									>
										<Button variant="success">
											<i className="fas fa-user-edit"></i>
										</Button>
									</OverlayTrigger>
								</td>
								<td>
									<OverlayTrigger
										trigger="hover"
										placement="top"
										overlay={popoverB}
									>
										<Button variant="danger">
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

export default compose(graphql(getMembersQuery, { name: "getMembersQuery" }))(
	MemberDatabase
);
