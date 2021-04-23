import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/home'

// import Resume from './screens/resume';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<section className="hero">
					<div className="hero-body">
						<div className="container ">
							<h1 className="title">Oops! Something went wrong!</h1>
							<h5>
								Please <a href="Dashboard/Home" >Click</a> on this link to go back to the home page and
								Please reach out to <a href="mailto:nikhil.mandge@test.com">Nikhil Mandge</a> if the
								problem persists after a retry.
							</h5>
						</div>
					</div>
				</section>
			);
		}		
		return this.props.children;
	}
}

const routing = (
	<Router>
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
		<ErrorBoundary>						
			<Route exact path="/" component={Home} />				
		</ErrorBoundary>
	</Router>
);

ReactDOM.render(
  
  <React.StrictMode>
  {routing}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
