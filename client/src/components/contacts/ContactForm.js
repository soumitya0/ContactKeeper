import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  //what ever we type in the INput filed get add to state
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value }); //this is not a single form field we have to put the object in  1 copy the rest to this useing spread operator  2-> e.tagret
  };

  return (
    <form>
      <h2 className="text-primary">Add Contact </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onchange}
      ></input>

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onchange}
      ></input>

      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onchange}
      ></input>

      <h5>
        {" "}
        Contact Type
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
        />
        Personal {""}
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
        />
        professional {""}
        <div>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-primary btn-block"
          ></input>
        </div>
      </h5>
    </form>
  );
};

export default ContactForm;
