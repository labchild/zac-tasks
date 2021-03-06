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
        <div className="update">
          <h4>TODAY IS THE DAY</h4>
          <p>
            it's not raining in south brooklyn (yet!), so we'll be at Chilo's
            until the weather says otherwise!
            <br />
            <br />
            reach out to Lelah at anytime to find out where we are – their
            number is <a href="tel:6126956190">612.695.6190</a>
          </p>
        </div>
        <p>
          Join to celebrate the man we all know and love as he officially enters
          his <em>early 30s</em>.
        </p>
        <table>
          <tbody>
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
                <a
                  href="https://www.chilosbk.com/chilos-greenwood"
                  target="_blank"
                  rel="noreferrer"
                >
                  <address>
                    Chilo's Greenwood
                    <br />
                    740 5th Ave
                    <br />
                    Brooklyn, NY 11232
                  </address>
                </a>
              </td>
            </tr>
          </tbody>
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
            <br />
            <br />
            This party will go until we get too tired and/or drunk to hang any
            longer, so come when you can and leave only if you must.
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
            Be sure to RSVP, so Lelah knows who to contact with updates.
          </p>
        </div>
      </article>
    </header>
  );
}

export default Flyer;
