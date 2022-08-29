import Image from "next/image";
import React from "react";
import Face2 from "../../public/perfil.jpg";

function HomePage() {
	return (
		<>
			<div className="flex justify-center text-center md:mx-20 md:pt-32 pt-28">
				<div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
					<Image
						className="rounded-full cursor-pointer hidden md:block"
						layout="fill"
						objectFit="cover"
						src={Face2}
						alt="Heroimage"
					/>
				</div>
				<div className="flex flex-col md:ml-20 mx-10 mt-10">
					<h1 className="font-bold text-7xl text-left mb-5">
						Olá, meu nome é <span className="text-indigo-900">Davner</span>
					</h1>
					<p className="text-left font-normal mb-5 flex-wrap mt-4 ">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores ad, dolorem in nulla eveniet
						dignissimos doloribus temporibus iste amet impedit architecto sit ipsa error, accusamus quis
						id aperiam. Impedit ut at ullam, temporibus non placeat dignissimos minus labore praesentium
						architecto repellendus doloribus delectus sed recusandae. Accusamus dolores atque nesciunt
						distinctio?
          </p>
          <a href="#" className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black">Veja o meu portfólio!</a>
				</div>
			</div>
		</>
	);
}

export default HomePage;
