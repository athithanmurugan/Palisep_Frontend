/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./footer.css";
import img from "../../Assets/img footer.jpg";
import { FiSend } from "react-icons/fi";
import { GiOpenBook } from "react-icons/gi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Aos from "aos";

const Footer = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<section className="footer">
			<div className="imgDiv">
				<img src={img} alt="Background Image" />
			</div>

			<div className="secContent container">
				<div className="contactDiv flex">
					<div data-aos="fade-up" className="text">
						<small>KEEP READING</small>
						<h2>Heraldry Course</h2>
					</div>

					<div className="inputDiv flex">
						<input
							data-aos="fade-up"
							type="text"
							placeholder="Enter Email Address"
						/>
						<button data-aos="fade-up" className="btn flex" type="submit">
							SEND
							<FiSend className="icon" />
						</button>
					</div>
				</div>

				<div className="footerCard flex">
					<div className="footerIntro flex">
						<div className="logoDiv">
							<a href="#" className="logo flex">
								<GiOpenBook Name="icon" /> Palisep.
							</a>
						</div>

						<div data-aos="fade-up" className="footerParagraph">
							Unlock the ancient art of Heraldry with our comprehensive course.
							Delve into the rich history of symbols, colors, and coats of arms
							that have defined families for centuries. Embrace the fascinating
							world of heraldic traditions and craft your own legacy.
						</div>

						<div data-aos="fade-up" className="footerSocials flex">
							<AiOutlineTwitter className="icon" />
							<AiOutlineYoutube className="icon" />
							<AiOutlineInstagram className="icon" />
						</div>
					</div>

					<div className="footerDiv flex">
						<small> © Philippe Palasi - Isep </small>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
