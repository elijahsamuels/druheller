import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import heller1 from "../images/heller1.jpg"

const Lessons = () => (
  <Layout>
    <SEO title="Dru Heller lessons page" />
      <h1>Lessons</h1>

      <div className="row">
        <div className="column">
          <img src={heller1} alt="heller lessonsphoto" id="lessonsphoto" />
        </div>

        <div
          className="column"
          style={{ fontFamily: "Open Sans", padding: "10px" }}
        >
          <p>Here is information on lessons with Dru.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum
            dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum
            dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum
            dolor sit amet, consectetur.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum
            dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum
            dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
            consectetur. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum
            dolor sit amet, consectetur.{" "}
          </p>
        </div>
      </div>
  </Layout>
)

export default Lessons
