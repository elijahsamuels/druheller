import React from "react"
import Link from "gatsby-link"

const Menu = () => {

	function onMenuChange(title) {
		
		if (typeof document !== "undefined" || undefined) {
			if (document.URL.includes(title?.toLowerCase())) {
				return <p style={{ color: "white" }}>{title}</p>
			} else {
				return title
			}
		} else {
				return title
			}
		}

  return (
    <div
      className="menu"
      style={{ paddingTop: "20px" }}
      id="menu"
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {/* if url is current location, make link text white */}

        <li>
          <Link to="/about" className="menu-link">{onMenuChange("About")}</Link>
          {/* <Link to="/about">{onMenuChange("About")}</Link> */}
        </li>
        <li>
          <Link to="/live" className="menu-link" >{onMenuChange("Live")}</Link>
        </li>
        <li>
          <Link to="/lessons" className="menu-link" >{onMenuChange("Lessons")}</Link>
        </li>

        <li>
          <h3>
            <Link to="/" className="menu-link" >{onMenuChange("Dru Heller")}</Link>
          </h3>
        </li>

        <li>
          <Link to="/audio" className="menu-link" >{onMenuChange("Audio")}</Link>
        </li>
        <li>
          <Link to="/video" className="menu-link" >{onMenuChange("Video")}</Link>
        </li>
        <li>
          <Link to="/contact" className="menu-link" >{onMenuChange("Contact")}</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
