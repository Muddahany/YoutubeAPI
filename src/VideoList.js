import React from 'react';

class VideoList extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	flag = null;
	render(){
	return(
		<div className="sidebar">
			<ul className="video-list">
				{this.props.videos.map((video, i) => <li key={i}  >
				<div className="image-container">
    				<img src={video.snippet.thumbnails.default.url} alt="" id={i} onClick={this.up}/>
    			</div>
				<h6>{video.snippet.title}</h6></li>)}
			</ul>
		</div>
	)
}
componentWillMount(){
	this.flag=this.props.updateVideo;
}
up (event){
	console.log("folla");
	this.flag(this.props.videos[event.target.id]);
}
}

export default VideoList;

