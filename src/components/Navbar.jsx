import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar">
  <div className="container d-flex justify-content-end">
    <div className="row">
      <div className="col-12">
        <Link to="/Addcontact">
          <button className="btn btn-primary">Add new contact</button>
        </Link>
      </div>
    </div>
  </div>
</nav>
	);
};