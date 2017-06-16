import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<ul className="header__menu">
					<li className="header__menu-item">
						<Link to="/">Landing page</Link>
					</li>
					<li className="header__menu-item">
						<Link to="/main">Main page</Link>
					</li>
					<li className="header__menu-item">
						<Link to="/about">About page</Link>
					</li>
					<li className="header__menu-item">
						<Link to="/photos">Photos</Link>
					</li>
					<li className="header__menu-item">
						<Link to="/news">News</Link>
					</li>
				</ul>
			</div>
		);
	}
}
export default Header;
