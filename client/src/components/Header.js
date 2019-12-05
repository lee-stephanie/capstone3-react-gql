import React from "react";
import { Carousel } from "react-bootstrap";

const Header = props => {
	return (
		<Carousel>
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
	);
};

export default Header;
