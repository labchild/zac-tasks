import React from "react";
import lilzac from "../assets/lilzac-full-sq.png";

function Flyer() {
  return (
    <header className="flyer">
      <section className="visuals">
        <div className="title marquee">
          <h1>
            come party with Zac
          </h1>
        </div>
        <div className="gif-wrapper">
          <img
            src={lilzac}
            alt="zac as a 3 year old child, holding a pot of pink tulips with a pouty, territorial look on his face"
          />
        </div>
      </section>
      <article className="info">all the info here</article>
    </header>
  );
}

export default Flyer;
