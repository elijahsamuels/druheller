import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import Player from "../components/player.js"
// import Player2 from "../components/player2.js"


const Audio = () => (
  <Layout>
    <SEO title="Dru Heller Audio page" />
    <div>
      <h1>Audio</h1>

      <div className="audio">
			<Player src={"https://samplelib.com/lib/preview/mp3/sample-3s.mp3"}/>				
			{/* <Player />				 */}

      </div>
    </div>
  </Layout>
)

export default Audio
