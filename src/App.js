import React, { Component } from "react";
import Loading from './Loading.gif'
import Playground from "./drawer1";

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			drawer: null
		}
	}

	isLoaded = () => this.setState({ isLoading: false })

	componentDidMount() {
		this.setState({ drawer: new Playground('renderCanvas') }, () => {
			this.state.drawer.draw(this.isLoaded)
		})
	}


	render() {
console.log(this.state);

		return (
			<div style={{ padding: 0, height: "96vh" }}>
				{
					this.state.isLoading|| (
						<div className='align-items-center' style={{textAlign: 'center', color: 'gray', height: '100%', width: '100%', paddingTop: '25%',backgroundColor: "#fdfdfdff" }}>
							<img src={Loading} alt='Loading' style={{ width: 80, height: 80 }}></img><br />
							<span>Loading...</span>
						</div>
					)
						
				}
				<canvas id='renderCanvas'></canvas>

			</div>
		);
	}

}