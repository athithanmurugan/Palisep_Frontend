import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Iconographies from "./components/Iconographies";
import Identification from "./components/Identification";
import Recherche from "./components/recherche";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Navigation from "./components/Navbar/Navbar";

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/iconographies" element={<Iconographies />} />
				<Route path="/identification" element={<Identification />} />
				<Route path="/recherche" element={<Recherche />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
			<Routes>
			<Route path="/" element={<Main />} />
			</Routes>
			<Footer />
		</Router>
	);
}
export default App;
