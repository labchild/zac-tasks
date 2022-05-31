import React, { useState } from "react";

const ContactForm = () => {
  // set form state
  const [buttonState, setbuttonState] = useState("submit");
  // const [rsvpChoice, setRSVPChoice] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rsvp: "",
  });

  // handle form state change
  function handleStateChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  }

  // handle submit (RSVP) and send as email
  // async to fetch for response to mailer, read docs
  const handleRSVP = async (e) => {
    e.preventDefault();
    console.log("rsvp'd");
    setbuttonState("sending...");

    const { name, email, rsvp, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      rsvp: rsvp.value,
      message: message.value,
    };
    console.log(details);

    let response = await fetch("/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ details }),
    });
    console.log(response);

    setbuttonState("submit");
    let result = await response.json();
    alert(result.status);
  };

  // return jsx
  return (
    <form onSubmit={handleRSVP}>
        <h3 className="bookman">répondez s'il vous plaît</h3>
      <div className="formSection">
        <label htmlFor="name">who are you? </label>
        <input
          placeholder="name"
          name="name"
          id="name"
          type="text"
          onChange={handleStateChange}
          value={formData.name}
          required
        />
      </div>
      <div className="formSection">
        <label htmlFor="email">your deets: </label>
        <input
          placeholder="email"
          name="email"
          id="email"
          type="email"
          onChange={handleStateChange}
          value={formData.email}
          required
        />
      </div>
      <div className="formSection">
        <label htmlFor="rsvp">will you be celebrating with us?</label>
        <select
          name="rsvp"
          id="rsvp"
          value={formData.rsvp}
          onChange={handleStateChange}
          required
        >
          <option value={""} disabled>
            yes or no...
          </option>
          <option value={true}>wouldn't miss it for the world &#x1F973;</option>
          <option value={false}>
            i'm busy, but drowning in fomo &#x1F62D;
          </option>
        </select>
      </div>
      <div className="formSection">
        <label htmlFor="message">anything else you wanna say?</label>
        <textarea id="message" name="message" />
      </div>
      <button type="submit" className="bookman btn">{buttonState}</button>
    </form>
  );
};

export default ContactForm;
