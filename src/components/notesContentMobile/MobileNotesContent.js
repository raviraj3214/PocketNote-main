import React from "react";
import "./MobileNotesContent.css";

function MobileNotesContent({ note }) {
  return (
    <div className="mobile__notes__content__body">
      
      <div className="mobile__notes__content__details">
        <p>{note.content}</p>
      </div>
      <div className="mobile__notes__content__date__time__details">
        <span>{note.date}</span><span style={{ paddingLeft:'10px' }}>{note.time}</span>
      </div>
    </div>
  );
}

export default MobileNotesContent;
