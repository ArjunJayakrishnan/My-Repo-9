import React from "react";
import patternDividerDesktop from "./pattern-divider-desktop.svg";
import patternDividerMobile from "./pattern-divider-mobile.svg";
import diceSVG from "./icon-dice.svg";
import { useState } from "react";

function App() {
	const [advice, setAdvice] = useState("click dice 👇");
	const [index, setIndex] = useState("");
	async function fetchAdvice() {
		try {
			const res = await fetch("https://api.adviceslip.com/advice");
			const data = await res.json();
			setAdvice(data.slip.advice);
			setIndex(data.slip.id);
		} catch {
			alert("error of somekind. make sure internet is connected. and reload");
		}
	}

	return (
		<div className="App">
			<div className="container">
				<h3 className="index">Advice #{index}</h3>
				<div className="advice-container">
					<p className="advice-quote">"{advice}"</p>
				</div>

				<img
					src={
						window.innerWidth < 450
							? patternDividerMobile
							: patternDividerDesktop
					}
					alt="Dice Icon"
					className="image-divider"
				/>

				<div className="image-dice-div">
					<img
						src={diceSVG}
						alt="Dice Icon"
						className="image-dice"
						onClick={fetchAdvice}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
