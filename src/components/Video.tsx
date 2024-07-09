function Video() {
  return (
    <div className="container-fluid">
      <div className="container px-0">
        <div className="embed-responsive embed-responsive-16by9 video-container">
          <iframe 
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/8ZjFAhQjGzY?rel=0&start=12"
            allowFullScreen
            title="YouTube video"
            style={{ width: '100%', height: '90%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Video; 