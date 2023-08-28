import "./VideoPlayer.css";
import myVideo from "../../assets/bannervideo/banner2.mp4";
const VideoPlayer = () => {
  return (
    <div className="videoPlayer">
      <video autoPlay loop className="video">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>{" "}
      <div className="overlay">
        <div className="title1">Discover a World of Shopping Delights</div>
        <div className="title2">Your One-Stop E-Commerce Destination</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
