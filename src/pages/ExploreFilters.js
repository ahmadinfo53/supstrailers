import React from "react";
import { useParams } from "react-router-dom";
import moviesData from "../moviesData";
import { Link } from "react-router-dom";
import "../../src/homestyle.css";
import homebackground from "../../src/assets/images/homebacka.jpeg";

const ExploreFilters = () => {
  let { filter } = useParams();

  let temp = moviesData.map((item) => item[filter]);

  const sections = [...new Set(temp)];
  Array.from(sections);

  for (let x in sections) {
    temp = sections[x];
    console.log(sections[x]);
  }

  var i = -1;

  var renderedTitles = sections.map(
    (indsec) => (
      (i = i + 1),
      (
        <div className="filterchilddiv">
          <Link className="linkstyle" to={`/${filter}/${sections[i]}`}>
            <div className="exploreparentdiv">{indsec.toUpperCase()}</div>
          </Link>
        </div>
      )
    )
  );

  return (
    <div className="parentdiv">
      <img
        className="homebackgroundimg"
        src={homebackground}
        alt="comicbooks"
      />
      <div className="contentdiv">
        <h2 className="filterstitle">Explore By: {filter}</h2>
        <p className="exploreparagraph">
          EXPLORE THE MOVIES BY {filter.toUpperCase()}. SELECT ANY OF THE
          FOLLOWING {filter.toUpperCase()} AND YOU WILL BE DIRECTED TO A PAGE
          WHERE YOU WILL FIND THE MOVIES AS PER THE {filter.toUpperCase()} YOU
          SELECTED
        </p>
        <div className="filterparentdiv">{renderedTitles}</div>
      </div>
    </div>
  );
};

export default ExploreFilters;
