import React from "react"
import Layout from "../components/layout.jsx"
import SEO from "../components/seo.js"
import Player from "../components/player.js"
import testImage from '../images/heller1.jpg';
// import Player2 from "../components/player2.js"

//************************************//
//																		//
//	UPLOAD MP3 FILES HERE:						//
//	https://mailboxdrive.com/upload/	//
//	Then add link below								//
//																		//
//************************************//

const Audio = () => (
  <Layout>
    <SEO title="Dru Heller Audio page" />
    <div>
      {/* <h1>Audio</h1> */}

      <h3 align="center">Album Cover Placeholder</h3>
			<img className="album-img" src={testImage} alt='album cover title' />
			<div>
				<h3 align="center">Album Title - Track Title</h3>
				<div className="audio">
					<Player src={"https://www.mboxdrive.com/Another%20Way%20-%20Nitti%20Gritti%20(Sax%20Remix).mp3"}/>
					{/* <Player src={"https://samplelib.com/lib/preview/mp3/sample-3s.mp3"}/>				 */}
				</div>
			</div>
  
      <h3 align="center">Album Title - Track Title</h3>
      <div className="audio">
        <Player src={"https://www.mboxdrive.com/Another%20Way%20-%20Nitti%20Gritti%20(Sax%20Remix).mp3"}/>
        {/* <Player src={"https://samplelib.com/lib/preview/mp3/sample-3s.mp3"}/>				 */}
      </div>
    </div>
  </Layout>
)

export default Audio
