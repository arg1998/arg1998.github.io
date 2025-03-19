const YouTubeFrame = ({ embedUrl }) => (<div className="video-container">
    <iframe
        src={`${embedUrl}&rel=0&modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
    </iframe>
</div>)

export default YouTubeFrame