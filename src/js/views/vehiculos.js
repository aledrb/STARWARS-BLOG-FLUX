import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Vehiculos = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchVehiculos();
	}, []);

	return (
		<div className="container">
			<h1 className="my-5 text-white">Vehiculos</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.vehiculosLista.map((item, index) => {
					{
					}
					return (
						<Card
							key={index}
							title={item.name}
							model={item.model}
							consumables={item.consumables}
							vehicle_class={item.vehicle_class}
							link={"https://swapi.dev/api/vehicles/"}
						/>
					);
				})}
			</div>
		</div>
	);
};
