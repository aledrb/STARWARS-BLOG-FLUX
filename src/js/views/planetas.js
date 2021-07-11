import React, { useState, useEffect } from "react";
import { Card } from "../component/Card";

export const Planetas = () => {
	const [dataplanetas, setDataPlanetas] = useState([]);

	const listadoPlanetas = () => {
		fetch("https://swapi.dev/api/planets/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setDataPlanetas(data.results));
	};

	useEffect(() => {
		listadoPlanetas();
	}, []);

	return (
		<div className="container">
			<h1 className="my-5 text-white">Planetas</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{dataplanetas.map((item, index) => {
					return (
						<Card
							key={index}
							url="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png"
							title={item.name}
							climate={item.climate}
							gravity={item.gravity}
							terrain={item.terrain}
						/>
					);
				})}
			</div>
		</div>
	);
};
