import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Constants from './constants';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos : [],
			selectedVideo : null
		};
		this.getVideos('Zakir khan');
	}

	getVideos(searchTerm) {
		YTSearch({key: Constants.API_KEY, term: searchTerm}, (videos) => {
			this.setState({
				videos : videos,
				selectedVideo : videos[0]
			});
		});	
	}

	render() {
		const videoSearch = _.debounce((searchTerm) => {this.getVideos(searchTerm)}, 300);
		return (
			<div>
				<SearchBar onSearchType={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
				videos={this.state.videos}
				onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
