import React from "react";
import "../styles/magazine_reader.css";

export default function MagazineReader({ magazine }) {
  return (
    <div className="mag-reader-wrapper">
      <div className="mag-reader-header">
        <div className="mag-reader-title">Magazine Reader</div>
        <div className="mag-reader-actions">
          <a className="mag-btn mag-download" href={magazine.pdf} download>
            Download PDF
          </a>
          <a
            className="mag-btn mag-open"
            href={magazine.pdf}
            target="_blank"
            rel="noreferrer"
          >
            Open in Chrome
          </a>
        </div>
      </div>

      <div className="mag-stage">
        <iframe
          className="mag-viewer"
          src={magazine.pdf}
          title="Magazine Reader"
          allowFullScreen
        />
      </div>
    </div>
  );
}

