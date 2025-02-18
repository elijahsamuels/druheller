import React from "react"
// import Layout from "../components/layout.js"
// import SEO from "../components/seo.js"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../images/heller2.jpg'

// const Player = () => (
  // <AudioPlayer
		// {...console.log("inputSource:", Object.values(inputSource)[0])}
    // src={Object.values(inputSource)[0]} 
    // src="https://samplelib.com/lib/preview/mp3/sample-3s.mp3"
    // src="../mp3/caravan.mp3"
	// 	autoPlay={false}
	// 	showSkipControls={true}

  // />
// );

// this way works if passing in an object as the audio source
const Player = (inputSource) => (
  <AudioPlayer
		// {...console.log("inputSource:", Object.values(inputSource)[0])}
    src={Object.values(inputSource)[0]} // if the 
    // src="https://samplelib.com/lib/preview/mp3/sample-3s.mp3"
  />
);


export default Player;