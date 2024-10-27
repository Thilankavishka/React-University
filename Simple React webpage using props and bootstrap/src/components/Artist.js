import { useState } from "react";
import "../assets/main.css";

export default function Artist({ passArtistName }) {
  return (
    <>
      <div className="artist-name ">
        <p>
          Artist Name: <b>{passArtistName}</b>
        </p>
      </div>
    </>
  );
}
