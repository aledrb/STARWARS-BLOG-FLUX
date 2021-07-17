import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Personajes = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchPersonas();
	}, []);

	return (
		<div className="container">
			<h1 className="my-5 text-white">Personajes</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.personasLista.map((item, index) => {
					{
					}
					return (
						<Card
							key={index}
							title={item.name}
							gender={item.gender}
							hair={item.hair_color}
							eyes={item.eye_color}
							link={"https://swapi.dev/api/people/"}
						/>
					);
				})}
			</div>
		</div>
	);
};
