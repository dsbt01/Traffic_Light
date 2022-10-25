import React from "react";


//create your first component
const Home = () => {
	return (
		<div className="main-traffic-light">
			<div className="light redLight glowEffect" ></div>
			<div className="light yellowLight" ></div>
			<div className="light greenLight" ></div>			
		</div>
	);
};

export default Home;
 