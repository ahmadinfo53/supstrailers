import React from "react";
import { Link } from "react-router-dom";
import "../homestyle.css";
import homebackground from "../assets/images/homebacka.jpeg";

const Layout = () => {
  return (
    <main className="maindiv">
      <img
        className="homebackgroundimg"
        src={homebackground}
        alt="comicbooks"
      />
      <div className="backoverly"></div>
      <div className="herodiv">
        <div className="leftdiv">
          <div>
            <h1 className="logo">Sups Trailers</h1>
          </div>
          <p className="herosecparagraph">
            SUPS TRAILERS IS A WEBSITE WHERE YOU WILL FIND MARVEL TRAILERS OF
            ALL MARVEL MOVIES THAT ARE RELEASED TILL TODAY. YOU CAN WATCH THESE
            TRAILERS BY RELEASED ORDER OR CHRONOLOGICAL ORDER. YOU CAN ALSO
            EXPLORE THESE TRAILERS BY PHASE, MAIN HERO, OR SAGA.
          </p>
        </div>
        <div className="rightdiv">
          <div className="righttopdiv">
            <div className="exploretag">
              <h3>EXPLORE BY:</h3>
            </div>
            <div className="righttopfirstsec">
              <div className="sagadiv">
                <Link className="linkstyle" to="/saga">
                  <div className="inddiv">
                    <p>
                      SAGA: THERE ARE CURRENTLY TWO SAGAS IN MCU. THE FIRST ONE
                      WAS INFINITY SAGA. THANOS WAS THE MAIN VILLIAN OF THAT
                      SAGA AND IT ENDED WITH ENDGAME. THE CURRENT SAGA IS
                      CURRENT SAGA IS MULTIVERSE SAGA AND KANG IS SEEMED TO BE
                      THE MAIN VILLIAN OF THIS SAGA AS HE IS A TIME TRAVELLER
                    </p>
                  </div>
                </Link>
              </div>
              <div className="superherodiv">
                <Link className="linkstyle" to="/superhero">
                  <div className="inddiv">
                    <p>
                      SUPER HEROS: EXPLORE MAEVEL MOVIES TRAILERS BY MAIN
                      SUPERHERO APPEARED IN THESE MOVIES. MOST OF THE SUPERHEROS
                      HAVE THREE MOVIES, SOME HAS TWO, SOME HAS ONE WHILE THE
                      REMAINING ARE SIDE CHARCTERS IN EACH MOVIE
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="rightbottomdiv">
            <div className="bottomdivphasesec">
              <Link className="linkstyle" to="/phase">
                <div>
                  <p>
                    PHASE: THERE ARE CURRENTLY FOUR PHASES OF MARVEL MOVIES
                    COMPLETED. THE FORTH PHASE ENDED WITH “BLACK PANTHER:
                    WAKANDA FOREVER”. THE FIFTH PHASE WILL START WITH “ANTMAN
                    AND THE WASP: QUANTUMANIYA” THAT WLL RELEASE IN FEB 2023
                  </p>
                </div>
              </Link>
            </div>
            <div className="bottomdivordersec">
              <Link className="linkstyle" to="/order">
                <div>
                  <p>
                    ORDER: EXPLORE MARVEL MOVIES IN RELEASE ORDER OR
                    CHRONOLOGICAL ORDER. EACH MARVEL MOVIE HAS ITS OWN TIMELINE
                    AND SOME PEOPLE LOVE TO WATCH THEM BY CHRONOLOGICAL ORDER.
                    IN CHRONOLOGICAL ORDER, MOVIES ARE ARRANGED ACCORDING TO
                    THEIR TIMELINE
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
