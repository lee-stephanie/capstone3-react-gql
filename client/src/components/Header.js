import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";

const Header = props => {
	return (
		<div>
			<Carousel className="mb-4">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="./images/header.png"
						alt="Valiant MMA and Fitness Gym"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="./images/headerA.png"
						alt="Test Your Courage, Train with Us"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="./images/headerB.png"
						alt="Where Fighters are made"
					/>
				</Carousel.Item>
			</Carousel>

			<Container>
				<Row>
					<Col sm>
						<Card style={{ width: "18rem" }}>
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
						<Card style={{ width: "18rem" }}>
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
						<Card style={{ width: "18rem" }}>
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
			</Container>
		</div>
	);
};

export default Header;
