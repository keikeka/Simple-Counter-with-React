//Import REACT
import React from "react";
import ReactDOM from "react-dom";

//Import BOOTSTRAP
import "bootstrap";

//Styles
import "../styles/index.scss";
import "../styles/secondscounter.scss";

//Components
import SecondsCounter from "./component/SecondsCounter.jsx";

//React application is rendered, but first an arrow function is declared to divide the counter, and by means of the calculation to get the corresponding digit.

let counter = 0;

setInterval(() => {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	counter++;
	ReactDOM.render(
		<SecondsCounter
			digiOne={one}
			digiTwo={two}
			digiThree={three}
			digiFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
