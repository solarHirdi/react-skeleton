import './style.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class About extends Component {
	render() {
		return (
			<div className="about">
				<h1 className="about__heading">This is "About Page"</h1>
			</div>
		);
	}
}

export default connect(state => ({}))(About);
