import React, { useState } from "react";

const ContactForm = () => {
  // set form state
  const [formStatus, setFormStatus] = useState("submit");
  const [rsvpChoice, setRSVPChoice] = useState("");
  // handle submit (RSVP) and send as email
  // async to fetch for response to mailer, read docs
  const handleRSVP = async (e) => {
    e.preventDefault();
    console.log("rsvp'd");
    setFormStatus("sending...");

    const { name, phone, rsvp, message } = e.target.elements;
    let details = {
        name: name.value,
        phone: phone.value,
        rsvp: rsvp.value,
        message: message.value
    };
    console.log(details);

    let response = await fetch("/contact", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(details)
    });
    console.log(response);

    setFormStatus("submit");
    let result = await response.json();
    alert(result.status);
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
          id="rsvp"
          defaultValue={rsvpChoice}
          onChange={(e) => setRSVPChoice(e.target.value)}
          required
        >
          <option value={""} disabled>
            yes or no...
          </option>
          <option value={true}>wouldn't miss it for the world &#x1F973;</option>
          <option value={false}>i'm busy, but drowning in fomo &#x1F62D;</option>
        </select>
      </div>
      <div>
          <label htmlFor="message">anything else you you wanna say?</label>
          <textarea id="message" name="message" />
      </div>
      <button type="submit">{formStatus}</button>
    </form>
  );
};

export default ContactForm;
