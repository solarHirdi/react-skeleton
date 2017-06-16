import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style.less";

class User extends Component {

	render() {
		let template;
		if (this.props.name) {
			template = <p>Привет, {this.props.name}!</p>
		}else {
			template = <button onClick={this.props.handleLogin}>Войти</button>
		}
		return (
			<div className="user">
				<h2>userbar</h2>
				{template}
			</div>
		);
	}
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	handleLogin: PropTypes.func.isRequired
}

export default User;
