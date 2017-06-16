import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { newsActions } from '../../store/actions';


import "./style.less";


class News extends Component {

	render() {
		const { news } = this.props;
		return (
			<div className="news">
				<div className="news__heading">
					<h1>Раздел Новости</h1>
				</div>
				<div className="news__list">
					<h2>news</h2>
					<ul>
						{news.ids.map((item, index) => <li key={index}>{item}</li>)}
					</ul>
				</div>
				<div className="news__sidebar">
					<h2>press here</h2>
					<button onClick={this.props.newsActions.getNews}>fetch news</button>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		news: state.news
	}),
	dispatch => ({
		newsActions: bindActionCreators(newsActions, dispatch)
	})
)(News);
