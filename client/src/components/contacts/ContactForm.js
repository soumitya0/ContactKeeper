import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  //what ever we type in the INput filed get add to state
  const onChangeForm = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value }); //this is not a single form field we have to put the object in  1 copy the rest to this useing spread operator  2-> e.tagret
  };

  const onSubmit = (e) => {
    e.preventDefault();

    contactContext.addContact(contact); // this contact have all of the state field

    setContact({
      //clear a from
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Contact </h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChangeForm}
      ></input>

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChangeForm}
      ></input>

      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChangeForm}
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
          onChange={onChangeForm}
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
