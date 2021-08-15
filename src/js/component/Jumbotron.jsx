import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your second component
const Jumbo = () => {
	return (
		<div className="mt-5">	
			<div className="jumbotron container-fluid">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</div>
		</div>	
	);
};

export default Jumbo;
