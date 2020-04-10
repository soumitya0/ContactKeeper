import React from "react";

import Contacts from "../contacts/Contacts";

import "../../App.css";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <h1>Contacts Forms </h1>
        <ContactForm />
      </div>

      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
