import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<div>
			<div className="bg-white px-3 py-4 shadow-2xl myHeader">
				<div className="myLogo flex">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaXu5NfObKblDbsF08tiqsoG7ifokpe4qWA&usqp=CAU"
						alt=""
						className="myLogoImage"
					/>
					<p className="myLogoText font-bold">Shashank Patil</p>
				</div>
				<div className="navDiv gap-10">
					<Link href="/">Home</Link>
					<Link href="/">Project</Link>

					<Link href="/">About</Link>
				</div>
				<button className="hireButton font-bold">Contact</button>
			</div>
		</div>
	);
};

export default Header;
