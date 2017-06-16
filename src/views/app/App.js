import React, {Component} from 'react';
import {connect} from 'react-redux';
import {accountActions} from '../../store/actions';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import "./style.less";
import Header from '../header/header.js';
import Landing from '../landing/Landing.js';
import Main from '../main/Main.js';
import About from '../about/about.js';
import Photos from '../photos/Photos.js';
import News from '../news/News.js';

class App extends Component {

	render() {

		return (
			<Router>
				<div className="app">
					<div className="app__header">
						<Header/>
					</div>
					<div className="app__content">
						<Switch>
							<Route exact={true} path="/" component={Landing}/>
							<Route path="/main" component={Main}/>
							<Route path="/about" component={About}/>
							<Route path="/photos" component={Photos}/>
							<Route path="/news" component={News}/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default connect(state => ({

}))(App);
