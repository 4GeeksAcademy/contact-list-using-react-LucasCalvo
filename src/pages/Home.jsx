import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";




export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div classNameName="text-center mt-5">
			<div className="card" style={{ width: "18rem" }}>
				<img src="https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Lucas Calvo</h5>
				    <p className="card-text">2101 ludlam Rd</p>
					<p className="card-text">786-914-9920</p>
					<p className="card-text">lucascalvo2903@gmail.com</p>
				</div>
				<div className="card-body">
					<a href="#" className="card-link">Card link</a>
					<a href="#" className="card-link">Another link</a>
				</div>
			</div>
		</div>
	);
}; 