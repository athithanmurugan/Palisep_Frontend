/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import { GiOpenBook } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	const [active, setActive] = useState("navBar");
	const showNav = () => {
		setActive("navBar activeNavbar");
	};
	return (
		<section className='navBarSection'>
      <header className="header flex">

			<div className="logoDiv">
  		<a href="#" className="logo flex">
    	<GiOpenBook className="icon" />
    	<h1>Palisep.</h1>
  		</a>
			</div>


				<div className={active}>
					<ul className="navLists flex">
						<li className="navItem">
							<NavLink to="/" className="navLink">
								Welcome
							</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/recherche" className="navLink">
								Weapon & Family Search
							</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/iconographies" className="navLink">
								Search for Iconographies
							</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/identification" className="navLink">
								Administration
							</NavLink>
						</li>
						<NavLink to="signin">
							<button className="btn text-white">Sign-In</button>
						</NavLink>
						<NavLink to="/signup">
							<button className="btn text-white">Sign-Up</button>
						</NavLink>
					</ul>
				</div>
				<div onClick={showNav} className="toggleNavbar">
					<TbGridDots className="icon" />
				</div>
			</header>
		</section>
	);
};

export default Navigation;
