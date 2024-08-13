import React from "react";
import "./DesktopNotesContent.css";

function DesktopNotesContent({ note, key }) {
  return (
    <div key={key} className="notes-align">
      <div
        style={{
          width: "80vw",
          marginLeft: "2%",
          marginTop: "1%",
          fontFamily: "Roboto",
          lineHeight: "28.83px",
          letterSpacing: "3.5%",
          fontWeight: "400",
          fontSize: "18px",
          marginBottom: "1%",
          marginRight: "1%",
        }}
      >
        {note.content}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "12vw",
          fontFamily: "DM Sans, sans-serif",
          margin: "5px",
        }}
      >
        {note.date} {note.time}
      </div>
    </div>
  );
}

export default DesktopNotesContent;
