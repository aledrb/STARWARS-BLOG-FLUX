import React from "react";
//import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
//import { Card } from "../component/Card";
import { Personajes } from "../views/personajes";
import { Planetas } from "../views/planetas";
import { Vehiculos } from "../views/vehiculos";

export const Home = () => (
	<div>
		<div className="personajesPAGINA">
			<Personajes />
		</div>
		<div className="vehiculosPAGINA">
			<Vehiculos />
		</div>
		<div className="planetasPAGINA">
			<Planetas />
		</div>
	</div>
);
/*

	<div>
		<div className="container">
			<h1 className="my-5 text-white">Personajes</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{dataPersonajes.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							gender={item.gender}
							hair={item.hair_color}
							eyes={item.eye_color}
						/>
					);
				})}
			</div>
		</div>

		<div className="text-center mt-5">
			<h1 className="text-white">Bienvenido al mejor blog de starwars!</h1>

			<div className="row flex-row flex-nowrap overflow-auto">
				{dataVehiculos.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							model={item.model}
							consumables={item.consumables}
							vehicle_class={item.vehicle_class}
						/>
					);
				})}
			</div>
			<div className="row flex-row flex-nowrap overflow-auto">
				{dataplanetas.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							climate={item.climate}
							gravity={item.gravity}
							terrain={item.terrain}
						/>
					);
				})}
			</div>
		</div>
	</div>
*/
