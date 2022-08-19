import React, { useState } from "react";
import { Link } from "react-scroll";
import { Transition } from '@headlessui/react';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className="fixed z-20 bg-white w-full">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0">
								{/* This section for logo or brand name */}
								<h1 className="font-bold text-xl cursor-pointer">
									<span className="text-blue-600">Davner </span>Firmino Cavalcante
								</h1>
							</div>
							{/* This section for links */}
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link
										activeCLass="Home"
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">
										Home
									</Link>
									<Link
										activeCLass="services"
										to="services"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">
										Services
									</Link>
									<Link
										activeCLass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">
										Projects
									</Link>
									<Link
										activeCLass="Clients"
										to="Clients"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">
										Clients
									</Link>
									<Link
										activeCLass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">
										Contact
									</Link>
								</div>
							</div>
							{/* This section is for direct contact via email section */}
							<div className="flex justify-center items-center flex-shrink-0 ml-4">
								<h1 className="font-semibold text-lg cursor-pointer hidden md:block">
									Say <span className="text-blue-600">Hi</span>
								</h1>
							</div>
						</div>
						{/* COMPLETED THE DESKTOP PART */}
						{/* Beginning of the mobile screen code */}
						<div className="mr-14 flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false">
								<span className="sr-only">Open main menu</span>
								</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
