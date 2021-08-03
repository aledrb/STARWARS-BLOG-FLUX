import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	const [listaFav, setListaFav] = useState([]);
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="starwars"
						src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/personajes">
					<button className="btn btn-primary">Personajes</button>
				</Link>
				<Link to="/vehiculos">
					<button className="btn btn-primary">Vehiculos</button>
				</Link>
				<Link to="/planetas">
					<button className="btn btn-primary">Planetas</button>
				</Link>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Favoritos {store.favoritosLista.length}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favoritosLista.map((item, index) => {
							return (
								<Dropdown.Item key={index}>
									{item}
									<button
										className=""
										onClick={() => {
											actions.setEliminarFavoritos(item);
										}}>
										<span>X</span>
									</button>
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
