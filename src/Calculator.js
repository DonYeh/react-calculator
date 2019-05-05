import React, { Component } from "react";

export default class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
	}

	_addCharacter = input => {
		this.setState({ input: this.state.input + input });
	};

	_doTheMath = () => {
		let input = this.state.input.split("");
		let numbers = "1234567890.";
		let myNumbers = ["", ""];
		let operator = "";
		let index = 0;
		let result = null;

		input.forEach(eaChar => {
			if (numbers.includes(eaChar)) {
				myNumbers[index] += eaChar;
			} else {
				index += 1;
				operator = eaChar;
			}
		});

		switch (operator) {
			case "X":
				result = Number(myNumbers[0]) * Number(myNumbers[1]);
				break;
			case "*":
				result = Number(myNumbers[0]) * Number(myNumbers[1]);
				break;
			case "/":
				result = Number(myNumbers[0]) / Number(myNumbers[1]);
				break;
			case "-":
				result = Number(myNumbers[0]) - Number(myNumbers[1]);
				break;
			case "+":
				result = Number(myNumbers[0]) + Number(myNumbers[1]);
				break;
			case "%":
				result = Number(myNumbers[0]) % Number(myNumbers[1]);
		}
		this.setState({
			input: result
		});
	};

	_handleTyping = e => {
		if (e.key != "Shift" && e.key != "Enter" && e.key != "Backspace") {
			this.setState({ input: this.state.input + e.key });
			console.log("inside _handleTyping");
			console.log(e.key);
		} else if (e.key === "Enter") {
			this._doTheMath();
		} else if (e.key === "Backspace") {
			if (this.state.input.length > 0) {
				const { input } = this.state;
				this.setState({
					input: input.substring(0, input.length - 1)
				});
			}
		}
	};

	componentDidMount = () => {
		window.addEventListener("keydown", this._handleTyping);
	};

	render() {
		return (
			<div className="calc-body">
				<div className="row d-flex justify-content-center mt-3 mb-3">
					<div className="calc-display text-white">
						{this.state.input}
					</div>
				</div>

				<div className="row d-flex justify-content-center">
					<button
						className="btn btn-info"
						onClick={() => {
							this.setState({ input: "" });
						}}
					>
						AC
					</button>
					<button
						className="btn btn-info"
						onClick={() => {
							this.setState({ input: "" });
						}}
					>
						CE
					</button>
					<button
						className="btn btn-info"
						value="%"
						onClick={this._addCharacter}
					>
						%
					</button>
					<button
						className="btn btn-info"
						value="/"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						/
					</button>
				</div>
				<div className="row d-flex justify-content-center">
					<button
						className="btn btn-info"
						value="7"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						7
					</button>
					<button
						className="btn btn-info"
						value="8"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						8
					</button>
					<button
						className="btn btn-info"
						value="9"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						9
					</button>
					<button
						className="btn btn-info"
						value="X"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						X
					</button>
				</div>
				<div className="row d-flex justify-content-center">
					<button
						className="btn btn-info"
						value="4"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						4
					</button>
					<button
						className="btn btn-info"
						value="5"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						5
					</button>
					<button
						className="btn btn-info"
						value="6"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						6
					</button>
					<button
						className="btn btn-info"
						value="-"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						-
					</button>
				</div>
				<div className="row d-flex justify-content-center">
					<button
						className="btn btn-info"
						value="1"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						1
					</button>
					<button
						className="btn btn-info"
						value="2"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						2
					</button>
					<button
						className="btn btn-info"
						value="3"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						3
					</button>
					<button
						className="btn btn-info"
						value="+"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						+
					</button>
				</div>
				<div className="row d-flex justify-content-center">
					<button
						className="btn btn-info"
						value="0"
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						0
					</button>
					<button
						className="btn btn-info"
						value="."
						onClick={e => {
							this._addCharacter(e.target.value);
						}}
					>
						.
					</button>
					<button
						className="btn btn-info"
						value="="
						onClick={this._doTheMath}
					>
						=
					</button>
				</div>
			</div>
		);
	}
}
