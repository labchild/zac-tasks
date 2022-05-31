import React, { useState } from "react";
import lilzac from "../assets/lilzac-full-sq.png";

function Flyer() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  function toggleDetails() {
    detailsOpen ? setDetailsOpen(false) : setDetailsOpen(true);
  }

  return (
    <header className="flyer">
      <section className="visuals">
        <div className="title marquee">
          <h1>come party with Zac</h1>
        </div>
        <div className="gif-wrapper">
          <img
            src={lilzac}
            alt="zac as a 3 year old child, holding a pot of pink tulips with a pouty, territorial look on his face"
          />
        </div>
      </section>
      <article className="info">
        <h3>ZAC IS TURNING 30</h3>
        <p>
          Join to celebrate the man we all know and love as he officially enters
          his <em>early 30s</em>.
        </p>
        <table>
          <tr>
            <td>
              <strong>when: </strong>
            </td>
            <td>Saturday June 11th 2022 at 3pm</td>
          </tr>
          <tr>
            <td>
              <strong>where: </strong>
            </td>
            <td>
              <address>
                Chilo's Greenwood
                <br />
                740 5th Ave
                <br />
                Brooklyn, NY 11221
              </address>
            </td>
          </tr>
        </table>
        <p>
          Expect tacos, frozen margs, games, and good times.{" "}
          <span onClick={toggleDetails}>
            {detailsOpen ? "Hide details..." : "Show details..."}
          </span>
        </p>
        <div className={detailsOpen ? "details" : "details hide"}>
          <p>
            Chilo's is 100% outdoors, so please wear sunscreen and drink water!
            We're too old to fuck around with the sun like that.
            <br />
            <br />
            If you have game suggestions (card or drinking – remember, we'll be
            outdoors), bring it or send Lelah a note with your RSVP and she'll
            look into acquiring it.
          </p>
          <p>
            If it rains, the party will move to{" "}
            <strong>
              <a
                href="http://seawitchnyc.com/"
                target="_blank"
                rel="noreferrer"
              >
                Sea Witch
              </a>
            </strong>
            . It's just 2 blocks north of Chilo's.
            <br />
            <br />
            Be sure to RSVP so Lelah knows who to contact with updates.
          </p>
        </div>
      </article>
    </header>
  );
}

export default Flyer;
