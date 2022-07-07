import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import hellerbw from "../images/hellerbw.jpg"

const About = () => (
  <Layout>
    <SEO title="dru heller bio page" />
    <h1>Biography</h1>
    
		<div className="row">
      <div className="column">
        <img src={hellerbw} alt="heller biophoto" id="biophoto" />
      </div>

      <div
        className="column"
        style={{ fontFamily: "Open Sans", padding: "10px" }}
      >
        <p>
          <strong>DRU HELLER</strong> is an expressive, authentic, and joyful
          drummer, composer, and bandleader. His passionate playing and love for
          music has opened opportunities for him to perform and teach all over
          the country.
        </p>
        <p>
          Known for his dynamic and interactive playing, his career spans over
          two decades. He has toured and recorded with some of the greatest
          musicians in jazz, including Don Byron, John Ellis, Ron Miles, Art
          Lande and Greg Osby. He was a featured performer on Don Byron’s
          original score for the American Masters (PBS) documentary of Lorraine
          Hansberry: <em> Sighted Eyes Feeling Heart</em>. His own quartets
          havereceived accolades and garnered attention from jazz enthusiasts
          worldwide, and he is a first-call drummer for the bandstands in the
          greater Denver area.
        </p>
        <p>
          Dru is an engaged and empathetic teacher. He made his home in Denver,
          Colorado after he received a Master of Music degree from the
          University of Colorado. He has served as an artist-in-residence at
          multiple schools and festivals, and he is a music faculty member at
          Metropolitan State University of Denver and the University of
          Colorado- Denver. He is able to reach students of all ages and ability
          levels and maintains his own private studio.
        </p>
        <p>
          On and off the bandstand, Dru is an active listener. His vibrant
          spirit can be felt and heard through the flick of his sticks or the
          wit and charm of his conversations.
        </p>
      </div>
    </div>
  </Layout>
)
export default About
