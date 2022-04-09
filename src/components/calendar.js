import React from "react"
// import Calendar from "@ericz1803/react-google-calendar" // TURN THIS ON!
// import "./styles.css";
// import { css } from "@emotion/react"

const API_KEY = process.env.GATSBY_API_KEY
const CALENDAR_ID = process.env.GATSBY_CALENDAR_ID

//replace calendar id with one you want to test
let calendars = [
  { calendarId: CALENDAR_ID },
  // { calendarId: `${CALENDAR_ID}` }
]

let styles = {
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
    borderRadius: "10px",
		border: "2px solid #51565d",
    backgroundColor: "#F5F5F5",
		color: "#51565d",
  },
  today: { color: "#51565d", border: "2px solid #51565d", borderRadius: "2px" },
  day: {
    color: "#51565d",
    borderRadius: "2px",
    fontSize: "15px",
    textAlign: "center",
  },
  eventText: {
    color: "#51565d",
    borderRadius: "2px",
    fontSize: "15px",
    textAlign: "center",
  },
	// tooltip: {
	// 	transitionDelay: "200ms",
	// }
}

export default function GoogleCalendar() {
  return (
    <div className="App">
      <div
        style={{
          width: "90%",
          paddingTop: "50px",
          paddingBottom: "50px",
          margin: "auto",
          maxWidth: "100%",
        }}
      >
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
      </div>
    </div>
  )
}
