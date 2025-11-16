import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="navbar-brand ms-auto">
					<Link to="/Addcontact">
						<button className="btn btn-primary">Add new contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};