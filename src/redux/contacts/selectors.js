import { selectContacts } from "./contactsSlice";
import { selectNameFilter } from "../filters/filtersSlice";
import { createSelector } from "@reduxjs/toolkit";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);