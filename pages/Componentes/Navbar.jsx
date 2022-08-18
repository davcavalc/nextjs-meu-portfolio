import React from "react";

function Navbar() {
	return (
		<div>
			<nav className="fixed z-20 bg-white w-full">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center sm:mx-10 md:mx-20 justify-center w-full">
							<div className="flex justify-center items-center flex-shrink-0">
								<h1 className="font-bold text-xl cursor-pointer">
									<span className="text-blue-600">Davner </span>Firmino Cavalcante
								</h1>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
