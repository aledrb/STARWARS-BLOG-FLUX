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
