import React from "react";
import { Table, Popover, OverlayTrigger, Button } from "react-bootstrap";

import AddMember from "./addmember";

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
					<tr>
						<td>2</td>
						<td>Dec 5, 2019</td>
						<td>Orlando</td>
						<td>Orlando</td>
						<td>Bloom</td>
						<td>Dec 1, 2019</td>
						<td>2222222</td>
						<td>orlando@bloom.com</td>

						{/*crud*/}
						<td>
							<OverlayTrigger
								trigger="hover"
								placement="top"
								overlay={popover}
							>
								<Button variant="success">
									<i class="fas fa-user-edit"></i>
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
									<i class="fas fa-user-minus"></i>
								</Button>
							</OverlayTrigger>
						</td>
						<td>
							<AddMember />
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dec 5, 2019</td>
						<td>Orlando</td>
						<td>Orlando</td>
						<td>Bloom</td>
						<td>Dec 1, 2019</td>
						<td>2222222</td>
						<td>orlando@bloom.com</td>

						{/*crud*/}
						<td>
							<OverlayTrigger
								trigger="hover"
								placement="top"
								overlay={popover}
							>
								<Button variant="success">
									<i class="fas fa-user-edit"></i>
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
									<i class="fas fa-user-minus"></i>
								</Button>
							</OverlayTrigger>
						</td>
						<td>
							<AddMember />
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dec 5, 2019</td>
						<td>Orlando</td>
						<td>Orlando</td>
						<td>Bloom</td>
						<td>Dec 1, 2019</td>
						<td>2222222</td>
						<td>orlando@bloom.com</td>
						{/*crud*/}
						<td>
							<OverlayTrigger
								trigger="hover"
								placement="top"
								overlay={popover}
							>
								<Button variant="success">
									<i class="fas fa-user-edit"></i>
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
									<i class="fas fa-user-minus"></i>
								</Button>
							</OverlayTrigger>
						</td>
						<td>
							<AddMember />
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dec 5, 2019</td>
						<td>Orlando</td>
						<td>Orlando</td>
						<td>Bloom</td>
						<td>Dec 1, 2019</td>
						<td>2222222</td>
						<td>orlando@bloom.com</td>
						{/*crud*/}
						<td>
							<OverlayTrigger
								trigger="hover"
								placement="top"
								overlay={popover}
							>
								<Button variant="success">
									<i class="fas fa-user-edit"></i>
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
									<i class="fas fa-user-minus"></i>
								</Button>
							</OverlayTrigger>
						</td>
						<td>
							<AddMember />
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dec 5, 2019</td>
						<td>Orlando</td>
						<td>Orlando</td>
						<td>Bloom</td>
						<td>Dec 1, 2019</td>
						<td>2222222</td>
						<td>orlando@bloom.com</td>
						{/*crud*/}
						<td>
							<OverlayTrigger
								trigger="hover"
								placement="top"
								overlay={popover}
							>
								<Button variant="success">
									<i class="fas fa-user-edit"></i>
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
									<i class="fas fa-user-minus"></i>
								</Button>
							</OverlayTrigger>
						</td>
						<td>
							<AddMember />
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dec 5, 2019</td>
						<td>Orlando</td>
						<td>Orlando</td>
						<td>Bloom</td>
						<td>Dec 1, 2019</td>
						<td>2222222</td>
						<td>orlando@bloom.com</td>
						{/*crud*/}
						<td>
							<OverlayTrigger
								trigger="hover"
								placement="top"
								overlay={popover}
							>
								<Button variant="success">
									<i class="fas fa-user-edit"></i>
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
									<i class="fas fa-user-minus"></i>
								</Button>
							</OverlayTrigger>
						</td>
						<td>
							<AddMember />
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dec 5, 2019</td>
						<td>Orlando</td>
						<td>Orlando</td>
						<td>Bloom</td>
						<td>Dec 1, 2019</td>
						<td>2222222</td>
						<td>orlando@bloom.com</td>
						{/*crud*/}
						<td>
							<OverlayTrigger
								trigger="hover"
								placement="top"
								overlay={popover}
							>
								<Button variant="success">
									<i class="fas fa-user-edit"></i>
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
									<i class="fas fa-user-minus"></i>
								</Button>
							</OverlayTrigger>
						</td>
						<td>
							<AddMember />
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Dec 5, 2019</td>
						<td>Orlando</td>
						<td>Orlando</td>
						<td>Bloom</td>
						<td>Dec 1, 2019</td>
						<td>2222222</td>
						<td>orlando@bloom.com</td>
						{/*crud*/}
						<td>
							<OverlayTrigger
								trigger="hover"
								placement="top"
								overlay={popover}
							>
								<Button variant="success">
									<i class="fas fa-user-edit"></i>
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
									<i class="fas fa-user-minus"></i>
								</Button>
							</OverlayTrigger>
						</td>
						<td>
							<AddMember />
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default MemberDatabase;
