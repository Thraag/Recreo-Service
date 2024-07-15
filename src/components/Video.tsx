function Video() {
  return (
    <div className="container-fluid pb-5 mb-4">
      <div className="container px-0">
        <div className="video-container">
          <iframe 
            className="video-iframe"
            src="https://www.youtube.com/embed/tyXazhBtKFw"
            allowFullScreen
            title="YouTube video"
          />
        </div>
      </div>
    </div>
  );
}

export default Video;
