import React, { useState } from "react";

const ContactForm = () => {
  // set form state
  const [formStatus, setFormStatus] = useState("Submit");
  const [rsvpChoice, setRSVPChoice] = useState("");
  // handle submit (RSVP) and send as email
  // async to fetch for response to mailer, read docs
  const handleRSVP = async (e) => {
    e.preventDefault();
    console.log("rsvp'd");
  };

  // return jsx
  return (
    <form onSubmit={handleRSVP}>
      <div>
        <label htmlFor="name">who are you? (you gotta tell me)</label>
        <input name="name" id="name" type="text" required />
      </div>
      <div>
        <label htmlFor="phone">how can i bug you? (not required, but helpful!)</label>
        <input name="phone" id="phone" type="tel" />
      </div>
      <div>
        <label htmlFor="rsvp">will you be celebrating with us?</label>
        <select
          name="rsvp"
          id="rsvp-select"
          defaultValue={rsvpChoice}
          onChange={(e) => setRSVPChoice(e.target.value)}
        >
          <option value={""} disabled>
            yes or no...
          </option>
          <option value={true}>wouldn't miss it for the world &#x1F973;</option>
          <option value={false}>i'm busy but drowning in fomo &#x1F62D;</option>
        </select>
      </div>
      <button type="submit">{formStatus}</button>
    </form>
  );
};

export default ContactForm;
