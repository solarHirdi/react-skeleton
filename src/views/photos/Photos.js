import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { User, Gallery } from '../../components';

import { accountActions, galleryActions } from '../../store/actions';


import "./style.less";


class Photos extends Component {

	render() {
		const { user, gallery } = this.props;
		return (
			<div className="photos">
				<div className="photos__heading">
					<h1>Раздел Фотографии</h1>
				</div>
				<div className="photos__list">
					<h2>photogallery</h2>
					<Gallery photos={gallery.photos} year={gallery.year} getPhotos={this.props.galleryActions.getPhotos} fetching={gallery.fetching} error={gallery.error}/>
				</div>
				<div className="photos__sidebar">
					<User name= {user.first_name ? user.first_name : ''} handleLogin={this.props.accountActions.login} />
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		user: state.account.user,
		gallery: state.gallery
	}),
	dispatch => ({
		galleryActions: bindActionCreators(galleryActions, dispatch),
		accountActions: bindActionCreators(accountActions, dispatch)
	})
)(Photos);
