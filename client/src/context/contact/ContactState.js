import React, { useReducer } from "react";

import { v1 as uuid } from "uuid";
// these is use to generated a random id

import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "soumitya",
        email: "so@gmail.com",
        phone: "454460",
        type: "professional",
      },
      {
        id: 2,
        name: "raj",
        email: "raj@gmail.com",
        phone: "45654654460",
        type: "personal",
      },
      {
        id: 3,
        name: "gita",
        email: "gitaa@gmail.com",
        phone: "54460",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //ADD contact
  const addContact = (contact) => {
    contact.id = uuid;
    // this is just to add ID becase now we are not using the Mongodb and mongodb have it own id gen
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //set current contact

  //clear current contact

  //update curretn contact

  //filter contact

  //clear filter

  //warpring the application using provide
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
