import React from "react";
import HomePage from "./Componentes/HomePage";

import Navbar from "./Componentes/Navbar";
import Serviços from "./Componentes/Serviços";

export default function Home() {
	return (
		<>
			<Navbar />
			<HomePage />
			<Serviços />
		</>
	);
}
