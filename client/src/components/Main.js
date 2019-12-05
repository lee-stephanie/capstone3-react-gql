import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Main = props => {
	return (
		<div>
			<Row>
				<Col sm>
					<Card className="cardwrap">
						<Card.Body>
							<Card.Title>Muay Thai</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Card Subtitle
							</Card.Subtitle>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col sm>
					<Card className="cardwrap">
						<Card.Body>
							<Card.Title>Boxing</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Card Subtitle
							</Card.Subtitle>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col sm>
					<Card className="cardwrap">
						<Card.Body>
							<Card.Title>Jiujitsu</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Card Subtitle
							</Card.Subtitle>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Main;
