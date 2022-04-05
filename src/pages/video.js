import React from "react"
import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import YoutubeEmbed from "../components/youtubeEmbed"

const Video = () => (
  <Layout>
    <SEO title="Dru Heller Video page" />
    <div>
      <h1>Video</h1>

      <div className="video">
        <YoutubeEmbed embedId="Z2jzvpaYNzI" />
        <YoutubeEmbed embedId="6EcqXCND_6w" />
        <YoutubeEmbed embedId="hfmPjpAi0lI" />
        <YoutubeEmbed embedId="6eRG6_C3K-A" />
        <YoutubeEmbed embedId="COw7VhC3D5g" />
      </div>
    </div>
  </Layout>
)

export default Video
