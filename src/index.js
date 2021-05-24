// import { ReactComponent } from '*.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	render() {
		return (
			<div>
				<h1>Привіт, світе!</h1>
				<h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

ReactDOM.render(<Clock />, document.getElementById('root'));

// setInterval(tick, 1000);
