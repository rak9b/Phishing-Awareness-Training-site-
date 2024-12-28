const VideoPlayer = () => (
  <div className="relative w-full h-64">
    <video
      className="w-full h-full object-cover"
      controls
      src="/assets/videos/intro.mp4"
    >
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoPlayer;
