import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gallery extends Component {
	onYearBtnClick(e) {
		this.props.getPhotos(+e.target.innerText)
	}
	render() {
		const { year, photos, fetching, error } = this.props
		const years = [2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007];
		return <div className='ib page'>
			<div>
				{years.map((item, index) => <button className='btn' key={index} onClick={::this.onYearBtnClick}>{item}</button>)}
			</div>
			<h3>{year} год</h3>
			<p>У тебя {photos.length} фото за {year} год</p>
			{error ? <p className='error'> Во время загрузки фото произошла ошибка</p> : '' }
			{fetching ?
				<p>Загрузка...</p>
			:
				photos.map((entry, index) =>
					<div key={index} className='photo'>
						<p><img src={entry.src} /></p>
						<p>{entry.likes.count} ❤</p>
					</div>
				)
			}
		</div>
	}
}

Gallery.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired
}

export default Gallery;

