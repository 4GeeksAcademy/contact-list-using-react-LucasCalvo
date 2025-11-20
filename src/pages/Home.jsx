import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">

			<div className="card p-3 d-flex flex-row align-items-center" style={{ width: "80%", margin: "0 auto" }}>
				<img 
					src="https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png"
					className="rounded-circle me-3"
					style={{ width: "90px", height: "90px", objectFit: "cover" }}
					alt="Foto"
				/>

			
				<div className="text-start flex-grow-1">
					<h5 className="mb-1">Lucas Calvo</h5>
					<p className="mb-0">2101 Ludlam Rd</p>
					<p className="mb-0">786-914-9920</p>
					<p className="mb-0">lucascalvo2903@gmail.com</p>
				</div>

				<div className="d-flex flex-column ms-3">
					<button className="btn btn-light mb-2">
						✏️
					</button>
					<button className="btn btn-light">
						🗑️
					</button>
				</div>

			</div>

			<div className="card p-3 d-flex flex-row align-items-center" style={{ width: "80%", margin: "0 auto" }}>
				<img 
					src="https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png"
					className="rounded-circle me-3"
					style={{ width: "90px", height: "90px", objectFit: "cover" }}
					alt="Foto"
				/>

			
				<div className="text-start flex-grow-1">
					<h5 className="mb-1">Lucas Calvo</h5>
					<p className="mb-0">2101 Ludlam Rd</p>
					<p className="mb-0">786-914-9920</p>
					<p className="mb-0">lucascalvo2903@gmail.com</p>
				</div>

				<div className="d-flex flex-column ms-3">
					<button className="btn btn-light mb-2">
						✏️
					</button>
					<button className="btn btn-light">
						🗑️
					</button>
				</div>

			</div>

<div className="card p-3 d-flex flex-row align-items-center" style={{ width: "80%", margin: "0 auto" }}>
				<img 
					src="https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png"
					className="rounded-circle me-3"
					style={{ width: "90px", height: "90px", objectFit: "cover" }}
					alt="Foto"
				/>

			
				<div className="text-start flex-grow-1">
					<h5 className="mb-1">Lucas Calvo</h5>
					<p className="mb-0">2101 Ludlam Rd</p>
					<p className="mb-0">786-914-9920</p>
					<p className="mb-0">lucascalvo2903@gmail.com</p>
				</div>

				<div className="d-flex flex-column ms-3">
					<button className="btn btn-light mb-2">
						✏️
					</button>
					<button className="btn btn-light">
						🗑️
					</button>
				</div>

			</div>


		</div>
		
	);
};
