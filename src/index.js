import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Constants from './constants';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {videos : []};
		YTSearch({key: Constants.API_KEY, term: 'Zakir khan'}, (videos) => {
			this.setState({videos});
			console.log(this.state.videos);
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
