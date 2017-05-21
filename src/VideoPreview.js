import React from 'react';

function VideoPreview(props){
    console.log(props);
	if(props.activeVideo.id){
    return(
		    <div className="main">
    			<div>
    				<div className="videoWrapper">
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.activeVideo.id.videoId}`}></iframe>
    				</div>
    				<h4>{props.activeVideo.snippet.title}</h4>
    				<h5>{props.activeVideo.snippet.channelTitle}</h5>
    				<p>{props.activeVideo.snippet.description}</p>
                                        </div>}
    			</div>
	)
}
return (
    <h1>No Video</h1>
    )
}

export default VideoPreview;
