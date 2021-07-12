import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						<p>{props.gender}</p>
						<p>{props.hair}</p>
						<p>{props.eyes}</p>
						<p>{props.climate}</p>
						<p>{props.gravity}</p>
						<p>{props.terrain}</p>
						<p>{props.model}</p>
						<p>{props.consumables}</p>
						<p>{props.vehicle_class}</p>
					</p>
					<div className="row justify-content-between">
						<a href="https://swapi.dev/api/people/1" className="btn btn-primary" style={{ color: "#fff" }}>
							Ver Mas
						</a>
						<a onClick={() => actions.setFavoritos(props.title)} href="#" className="btn btn-warning">
							<i className="far fa-heart" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	title: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string,
	climate: PropTypes.string,
	gravity: PropTypes.string,
	terrain: PropTypes.string,
	model: PropTypes.string,
	consumables: PropTypes.string,
	vehicle_class: PropTypes.string
};
