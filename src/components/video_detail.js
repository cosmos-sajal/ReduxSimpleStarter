import React from 'react';
import Constants from '../constants';

const VideoDetail = (props) => {
	if (!props.video) {
		return <div>Loading</div>;
	}

	const videoId = props.video.id.videoId;
	const url = Constants.youtube_url + `/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url} />
			</div>
			<div className="details">
				<div>{props.video.snippet.title}</div>
				<div>{props.video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoDetail;
