import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your fisrt component
const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-light bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand text-light" href="#">
					Start Boostrap
				</a>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a
							className="nav-link active text-light"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
