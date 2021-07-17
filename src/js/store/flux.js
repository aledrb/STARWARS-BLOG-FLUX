const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personasLista: [],
			planetasLista: [],
			vehiculosLista: [],
			favoritosLista: []
		},
		actions: {
			setFavoritos: tituloFav => {
				const store = getStore();
				setStore({ favoritosLista: [...store.favoritosLista, tituloFav] });
			},
			setEliminarFavoritos: titulofav => {
				setStore({ favoritosLista: getStore().favoritosLista.filter(favoritos => favoritos !== titulofav) });
			},

			fetchPersonas: () => {
				const URL = "https://swapi.dev/api/people";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json())
					.then(data => setStore({ personasLista: data.results }));
			},
			fetchPlanetas: () => {
				const URL = "https://swapi.dev/api/planets/";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json())
					.then(data => setStore({ planetasLista: data.results }));
			},
			fetchVehiculos: () => {
				const URL = "https://swapi.dev/api/vehicles/";
				const OBJCONFIG = {
					method: "GET",
					headers: {
						"Content-type": "aplication/json"
					}
				};

				fetch(URL, OBJCONFIG)
					.then(res => res.json())
					.then(data => setStore({ vehiculosLista: data.results }));
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
