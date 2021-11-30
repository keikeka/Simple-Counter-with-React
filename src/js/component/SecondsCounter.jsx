//Import REACT, PROPTYPES AND COMPONENT STYLE
import React from "react";
import PropTypes from "prop-types";
import "../../styles/secondscounter.scss";

//An arrow function is declared with its respective props according to each digit.

const SecondsCounter = props => {
	return (
		<div className="firstCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.digiFour % 10}</div>
			<div className="three">{props.digiThree % 10}</div>
			<div className="two">{props.digiTwo % 10}</div>
			<div className="one">{props.digiOne % 10}</div>
		</div>
	);
};

//Proptypes Validation
SecondsCounter.propTypes = {
	digiFour: PropTypes.number,
	digiThree: PropTypes.number,
	digiTwo: PropTypes.number,
	digiOne: PropTypes.number
};

export default SecondsCounter;
