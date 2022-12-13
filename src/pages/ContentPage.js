import React from "react";
import { useParams } from "react-router-dom";
import moviesData from "../moviesData";
import homebackgroundimg from "../../src/assets/images/homebacka.jpeg";
import "../../src/homestyle.css";
import YouTube from "react-youtube";

const ContentPage = () => {
  let data = useParams();
  let keys = Object.keys(data);

  let firstvalue = data[keys[0]];

  let secondvalue = data[keys[1]];
  console.log(data);
  let newData = new Object(moviesData);

  if (firstvalue === "order") {
    console.log(" in order");
    if (secondvalue === "Release order") {
      moviesData.sort((a, b) => a.releaseorder - b.releaseorder);
    } else {
      moviesData.sort((a, b) => a.chronologicalorder - b.chronologicalorder);
      console.log("chrono order");
    }
  } else {
    newData = moviesData.filter((movie) => movie[firstvalue] === secondvalue);
    console.log(newData.length);
    console.log("other things");
  }

  let width = window.innerWidth;
  function getWidht() {
    if (width > 1100) {
      return width * 0.2;
    } else if (width > 700 && width <= 1100) {
      return width * 0.33;
    } else {
      return width * 0.48;
    }
  }

  console.log(firstvalue, secondvalue);

  var renderedTrailers = newData.map((e) => {
    return (
      <div className="trailersindsection">
        {}
        <YouTube
          className="videosec"
          opts={{
            height: "auto",
            width: getWidht(),
          }}
          videoId={e.trailerid}
        />
        <h3 className="trailertitle">{e.name}</h3>
      </div>
    );
  });

  return (
    <div>
      <img
        className="homebackgroundimg"
        src={homebackgroundimg}
        alt="comicbooks"
      />
      <h2 className="contentTitle">
        HERE ARE THE TRAILERS OF MOVIES OF/BY {data.nestedfilter.toUpperCase()}
      </h2>
      <div className="trailersparentsection">{renderedTrailers}</div>
    </div>
  );
};

export default ContentPage;
